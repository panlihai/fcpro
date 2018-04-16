import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FcadformOption, TimelineOptions, ParentDetailComponent } from 'fccomponent';
import { SysmessageService } from 'fccore';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'sysmessageback',
  templateUrl: "./sysmessageback.component.html",
  styles: [`
  .full>.fc-layoutpanel>fc-content{
    height:100%;
  }
  .messageback-detail{
    font-size:12px;
  }
  .messageback-detail p{

  }
  `]
})
/* 消息反馈详情 */
export class SysmessagebackComponent extends ParentDetailComponent {
  //点击时间轴显示隐藏右侧的内容
  showDetail: boolean = true;
  //反馈内容
  backResult: string;
  //选项卡标题
  _tabLabel = [
    { name: '未反馈消息', disabled: false },
    { name: '已反馈消息', disabled: false },
  ]
  //未反馈内容选中
  noFeedBackSelected: any;
  //已反馈内容选中
  hasFeedBackSelected: any;
  //未反馈内容
  noFeedBack: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  //已反馈内容
  hasFeedBack: TimelineOptions = {
    fcAppid: 'BG',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  constructor(public mainService: SysmessageService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
    this.noFeedBack.fcValues = [
      {
        SOURCEAID: "2018-03-14 18:00",
        title: "标题551",
        subTitle: "小标题",
        smark: "这是描述",
        color: 0
      }, {
        label: "2018-03-14 18:00",
        title: "标题25555",
        subTitle: "小标题",
        smark: "这是描述",
        color: 1
      }, {
        label: "2018-03-14 18:00",
        title: "标题3",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题4",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }
    ];
    this.hasFeedBack.fcValues = [
      {
        label: "2018-03-14 18:00",
        title: "标题1",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题2",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题3",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题4",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }
    ]
  }
  init(): void {

  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
    switch (eventName) {
      case 'selected':
        break;
      case 'rowClick':
        break;
      case 'listEdit'://修改
        break;
      case 'cardBack':
        break;
    }
  }
  /**
   * 已反馈事件
   * @param event 
   */
  hasfeedbackEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'selected':
        this.selectedIndex = 0;
        break;
    }
  }
  /**
   * 未反馈事件
   * @param event 
   */
  nofeedbackEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'selected':
        break;
    }
  }
  /**
   * 立即反馈
   */
  messageBack() {

  }
}
