import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent, ParentDetailComponent, TimelineOptions } from 'fccomponent';
import { eventNames } from 'cluster';
import { SysmessageService, Sysmessage } from '../../services/sysmessage.service';
@Component({
  selector: 'sysmessagedetail',
  template: `
  <fc-layoutpanel style="height:100%;" class="messagedetail">
    <fc-layoutcol fcSpans="1,2" fccontent>
        <fc-title fcLabel="消息列表" fccontent1></fc-title>
        <div fccontent1 class="tagselect">
            <fc-tag (click)="allmassageCondition()" fcLabel="全部"  [fcColor]="allmessageColor"></fc-tag>
            <fc-tag (click)="isreadCondition()" fcLabel="已读" [fcColor]="isreadColor"></fc-tag>
            <fc-tag (click)="noreadCondition()" fcLabel="未读" [fcColor]="noreadColor"></fc-tag>
        </div>
        <fc-timeline [fcOption]="timelineOption" [fcSelectedId]="selectedId" (fcEvent)="timelineEvent($event)" fcLabelPosition="left" fcLeft="30%" class="timeline-content" fccontent1 class="noread"></fc-timeline>
        <fc-layoutpanel fccontent2>
          <fc-title fcLabel="消息明细" fccontent></fc-title>
          <p class="main-title" fccontent>{{mainObj.TITLE}}<span class="mesagge-time">{{mainObj.TS}}</span></p>
          <p class="main-content" fccontent>{{mainObj.CONTENT}}</p>
          <fc-title fcLabel="请输入回复内容" fccontent></fc-title>
          <fc-textarea [fcShowLabel]="false" [(ngModel)]="feedBackObj.CONTENT" fcPlaceHolder="内容是：" fccontent></fc-textarea>     
          <fc-button fcLabel="回复" fcType="primary" fccontent class="margin-top15" (click)="postFeedback()"></fc-button>
          <fc-title fcLabel="回复内容" ></fc-title>
          <div *ngFor="let item of sysmessageList" fccontent class="messagelist">
            <span *ngIf="item.POSTUSERID!==''&&item.POSTUSERID!==null">{{item.POSTUSERID}}|</span>
            <span>{{item.POSTTIME}}</span>          
            <div class="messagecontent">{{item.CONTENT}}</div>        
          </div>
        </fc-layoutpanel>     
      </fc-layoutcol>
  </fc-layoutpanel>  
  `,
  styles: [`
 :host ::ng-deep .fc-layoutcol {
    height:100%;
  }
  :host ::ng-deep .fc-layoutgroup{
    height: calc(100% - 40px);    
  }
  :host ::ng-deep .fc-layoutgroup .fc-content {
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content {
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1{
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1>fc-timeline>div{
    height:calc(100% - 44px);
    overflow:auto;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1 nz-tabset{
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content2{
    height:100%;
    overflow:auto;
    padding-left: 20px;
  }
  :host ::ng-deep .ant-tabs-content{
    height: calc(100% - 60px);
    overflow: auto;
    margin-top: 30px;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clear:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  :host ::ng-deep .messagedetail>.fc-layoutpanel{
    height:100%;
  }
  :host ::ng-deep .margin-top15>button{
    margin-top:15px;
  }
  :host ::ng-deep .messagedetail .fc-title{
    margin-left:0px;
  }
  :host ::ng-deep .ant-tabs-nav{
    width:100%;
  }
  :host ::ng-deep .ant-tabs-nav>.ant-tabs-tab{
    width:50%;
    text-align:center;
    margin-right:0px;
  }
  .tagselect{
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .messagedetail .main-title{
    min-height:30px;
    font-size:14px;
    font-weight:bold;
  }
  .messagedetail .main-content{
    min-height:30px;
  }
  .mesagge-time{
    margin-left: 10px;
    font-size: 14px;
  }
  .messagelist{
    margin-top:10px;
  }
  .messagecontent{
    font-size: 13px;
    color: #333;
  }
  `]
})
export class SysmessagedetailComponent extends ParentDetailComponent {
  //消息配置
  timelineOption = this.mainService.initTimelineOption();
  //回复的消息
  feedBackObj: Sysmessage;
  //时间轴选中项
  selectedId: any;
  //回复内容列表
  sysmessageList: Sysmessage[];
  //全部消息标签颜色
  allmessageColor: string;
  //已读消息标签颜色
  isreadColor: string;
  //未读消息标签颜色
  noreadColor: string;
  constructor(public mainService: SysmessageService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化时间轴的消息
    this.mainService.getMessageBy({}).subscribe(result => {
      if (result.CODE === '0') {
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(element => {
          if (element.TS !== null && element.TS !== '') {
            //如果是当天时间，不显示年月日只显示时分秒
            if (new Date(element.TS).toDateString() === new Date().toDateString()) {
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'hh:mm:ss') + "";
            } else {
              //如果是当年，不显示年，只显示月日
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'MM-dd') + "";
            }
          }
        })
      }
    });
    //初始化消息详情
    this.mainService.initMainObj(this.routerParam.PARAM)
      .subscribe(result => {
        if (result.CODE === '0') {
          this.mainObj = result.DATA;
          if (this.mainObj.TS !== null && this.mainObj.TS !== '') {
            this.mainObj.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(this.mainObj.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
          }
          this.initFeedBack();
        }
      });
    this.feedBackObj = this.mainService.appService.initObjDefaultValue(this.mainApp);
    this.allmessageColor = "#108ee9";
    this.isreadColor = "blue";
    this.noreadColor = "blue";
  }
  /**
   * 事件
   * @param eventName 
   * @param param 
   */
  event(eventName: string, param: any): void {

  }
  /**
   * 根据id查询已回复内容
   */
  initFeedBack() {
    this.selectedId = this.mainObj.ID;
    this.mainService.findAllMessage(this.mainObj.ID).subscribe(result => {
      if (result.CODE === '0') {
        this.sysmessageList = result.DATA;
        this.sysmessageList.forEach(element => {
          if (element.POSTTIME !== null && element.POSTTIME !== '') {
            //如果是当天时间，不显示年月日
            if (new Date(element.POSTTIME).toDateString() === new Date().toDateString()) {
              element.POSTTIME = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'hh:mm:ss') + "";
            } else {
              //如果是当年，不显示年，只显示月日
              element.POSTTIME = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'MM-dd') + "";
            }
          }
        })
      }
    });
  }
  /**
   * 点击回复内容
   */
  postFeedback() {
    this.sysmessageList.push(this.feedBackObj);
    this.mainService.feedBack(this.feedBackObj, this.mainObj).subscribe(result => {
      if (result.CODE === '0') {
        this.messageService.message("回复成功");
      } else {
        this.messageService.error("回复失败");
      }
    });
  }
  /**
   * 时间轴事件
   * @param event 
   */
  timelineEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'selected'://选中
        this.mainObj = event.param;
        this.initFeedBack();
        break;
    }
  }
  /**
   * 全部消息
   */
  allmassageCondition() {
    this.mainService.getMessageBy({}).subscribe(result => {
      if (result.CODE === '0') {
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(element => {
          if (element.TS !== null && element !== '') {
            //如果是当天时间，不显示年月日
            if (new Date(element.TS).toDateString() === new Date().toDateString()) {
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'hh:mm:ss') + "";
            } else {
              //如果是当年，不显示年，只显示月日
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'MM-dd') + "";
            }
          }
        })
      }
    });
    this.allmessageColor = "#108ee9";
    this.isreadColor = "blue";
    this.noreadColor = "blue";
  }
  /**
   * 过滤已读消息
   */
  isreadCondition() {
    this.mainService.getMessageBy({ ISREAD: 'Y' }).subscribe(result => {
      if (result.CODE === '0') {
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(element => {
          if (element.TS !== null && element !== '') {
            //如果是当天时间，不显示年月日
            if (new Date(element.TS).toDateString() === new Date().toDateString()) {
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'hh:mm:ss') + "";
            } else {
              //如果是当年，不显示年，只显示月日
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'MM-dd') + "";
            }
          }
        })
      }
    });
    this.allmessageColor = "blue";
    this.isreadColor = "#108ee9";
    this.noreadColor = "blue";
  }
  /**
   * 过滤未读消息
   */
  noreadCondition() {
    this.mainService.getMessageBy({ ISREAD: 'N' }).subscribe(result => {
      if (result.CODE === '0') {
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(element => {
          if (element.TS !== null && element !== '') {
            //如果是当天时间，不显示年月日
            let today = Number.parseInt(element.TS) * 1000;
            if (new Date(today).getMonth() === new Date().getMonth() && new Date(today).getDate() === new Date().getDate()) {
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'hh:mm:ss') + "";
            } else {
              //如果是当年，不显示年，只显示月日
              element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'MM-dd') + "";
            }
          }
        })
      }
    });
    this.allmessageColor = "blue";
    this.isreadColor = "blue";
    this.noreadColor = "#108ee9";
  }
}
