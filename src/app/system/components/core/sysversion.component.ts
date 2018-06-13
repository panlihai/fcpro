import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent, ParentDetailComponent } from 'fccomponent';
import { SysversionService, Sysversion } from '../../services/sysversion.service';
@Component({
  selector: 'sysversiondetail',
  template: `
  <fc-layoutpanel style="height:100%;" class="detail">
  <fc-layoutcol fcSpans="1,2" fccontent>
      <fc-title fcLabel="版本列表" fccontent1></fc-title>
      <div fccontent1 class="tagselect">
          <fc-tag fcLabel="返回首页" (click)="backHome()"></fc-tag>
      </div>
      <fc-timeline [fcOption]="timelineOption" [fcSelectedId]="selectedId" (fcEvent)="timelineEvent($event)" fcLabelPosition="left" fcLeft="30%" class="timeline-content" fccontent1 class="noread"></fc-timeline>
      <fc-layoutpanel fccontent2>
        <fc-title fcLabel="版本明细" fccontent></fc-title>
        <p class="main-title" fccontent>{{mainObj.VERSION}}<span class="mesagge-time">{{mainObj.TS}}</span></p>
        <fc-title fcLabel="上次发布版本" fccontent></fc-title>
        <p class="main-content" fccontent>{{mainObj.LASTVERSION}}</p>
        <fc-title fcLabel="版本详情" fccontent></fc-title>
        <p class="main-content" fccontent>{{mainObj.DESCRIPTION}}</p>
        <div style="height:250px;"><fc-listdata fcAppid='SYSVERSION' fccontent></fc-listdata></div>
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
  :host ::ng-deep .detail>.fc-layoutpanel{
    height:100%;
  }
  :host ::ng-deep .margin-top15>button{
    margin-top:15px;
  }
  :host ::ng-deep .detail .fc-title{
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
  .detail .main-title{
    min-height:30px;
    font-size:14px;
    font-weight:bold;
  }
  .detail .main-content{
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
export class SysversionComponent extends ParentDetailComponent {
  //选中的一条记录
  selectedId: any;
  //版本列表
  sysversionList: Sysversion[];
  //时间轴
  timelineOption = this.mainService.initTimelineOption();
  //编辑对象
  editObj: any;
  constructor(public mainService: SysversionService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //查看版本
    this.mainService.findAllVersion().subscribe(result => {
      if (result.CODE === '0') {
        this.sysversionList = result.DATA;
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(item => {
          item.color = 'normal';
          item.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(item.PUBLISHTIME) * 1000, 'MM-dd') + '';
        });
      }
    });
    //初始化版本详情
    this.selectedId = this.routerParam.ID;
    this.mainService.initMainObj(this.selectedId)
      .subscribe(result => {
        if (result.CODE === '0') {
          this.mainObj = result.DATA;
          if (this.mainObj.TS !== null && this.mainObj.TS !== '') {
            this.mainObj.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(this.mainObj.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
          }
        }
      });
    //首页传过来的选中ID
  }
  /**
   * 
   * @param eventName 事件名称
   * @param context 按钮内容
   */
  event(eventName: string, context: any): void {
    switch (eventName) {

    }
  }
  /**
   * 时间轴事件
   * @param event 
   */
  timelineEvent(event) {
    switch (event.eventName) {
      case 'selected'://选中一条
        this.mainObj = event.param;
    }
  }
  /**
   * 新增版本记录
   */
  addversionEvent() {

  }
  /**
   * 修改版本
   */
  editVersion() {

  }
  /**
   * 保存版本
   */
  saveVersion() {

  }
  /**
   * 回到首页
   */
  backHome() {
    this.navRouter('/system/home');
  }
}
