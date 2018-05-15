import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { Component, OnInit, AfterContentInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, TimelineOptions } from 'fccomponent';
import { LayoutService } from '../../../system/services/layout.service';
import { eventNames } from 'cluster';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'templatehome',
  templateUrl: './templatehome.component.html',
  styles: [
    `.messages-notices{
      position: absolute;
      right: 10px;
      top: 15px;
    }
    .all{
      display:flex;
      justify-content:between;
      align-item:center;
      height: 110px;
      padding: 20px 0px 0px 20px;
    }
    :host ::ng-deep .first-icon>i{
      font-size:40px;
    }
    .tagselect{
      position: absolute;
      right: 10px;
      top: 15px;
    }
    :host ::ng-deep .viewdetail a{
      font-size:14px;
      width:100%;
    }
    .home-list{
      width:100%;
      height:300px;
      overflow-y:hidden;
    }
    .home-list:hover{
      overflow-y:auto;
    }
    .contact li{
      height:40px;
      line-height:40px;
      border-bottom:1px solid #cccccc;
      display:flex;
      align-item:center;
      white-space:nowrap;
      overflow:hidden;
      position:relative;
      padding-left:20px;
    }
    .contact li span{
      font-size:14px;
    }
    .contact_right{
      color:#399dfb;
      margin-left:10px;
    }
    .main_contact{
      position:relative;
    }
    .contact_icon{
      z-index:999;
    }     
   :host ::ng-deep .home-calendar .ant-fullcalendar-header{
      position: absolute;
      top: -54px;
      right: -15px;
    }
    :host ::ng-deep .ant-fullcalendar-header .ant-radio-group{
      display:none;
    }
    :host ::ng-deep .contact_right a{
      font-size:14px;
    }
    .chat-wrap{
      width:50px;
      height:50px;
      overflow:hidden;
      position:fixed;
      right:25px;
      bottom:30px;
    }
    :host ::ng-deep .chat-show-wrap .fc-chatbox .fc-chatouter{
      visibility:visible;
      opacity: 1;
    }
    :host ::ng-deep .ant-btn-circle{
      width: 50px;
      border-radius: 50%;
      height: 50px;
      background-color:#5c92FF;
      border:none;
      font-size:0px;
    }
    :host ::ng-deep .ant-btn-circle i{
      font-size:18px;
    }
    :host ::ng-deep .fc-chatouter{
      position: fixed;
      bottom: 90px;
      right: 60px;
      opacity: 0;
      visibility:hidden;
      transition: all 0.3s;
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s; 
      -o-transition: all 0.3s;
    }
    .main_contain{
      margin-top: -10px;
    }
    .contacticon{
      position: absolute;
      right: 0;
    }
    .contacticon:hover{
      cursor: pointer;
    }
    :host ::ng-deep .fc-title{
      padding-left: 20px;
    }
  :host ::ng-deep .fastcontent{
    padding-left:20px;
  }
    :host ::ng-deep .fastcontenttext a{
    color:#333333;
    font-size:14px;
    height:40px;
    line-height:40px;
    display:inline-block;
    margin-right:20px;
  }
  :host ::ng-deep .add button{
    width:60px;
    height:28px;
    color:#5c92ff;
  }
  :host ::ng-deep .fc-timeline-left .fc-timeline-label {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width:89px;
  }
  .system-version{
    padding-left:10px;
  }
  .system-version>div{
    width:100%;
    height:300px;
    padding-left:20px;
  }
  .add {
    display:inline-block;
  }
  .home-list-inlineblock{
    display:inline-block;
  }
  :host ::ng-deep .piechart>div{
    padding-top:40px;
  }
  
    `
  ]
})
export class TemplatehomeComponent {
  //隐藏聊天面板
  showchat: boolean = false;
  //柱状图文字
  _barLabels: string[] = ['哈局', '沈阳局', '北京局', '太原局', '呼和局', '...', '乌鲁木齐'];
  //柱状图数据
  _barData: any[] = [
    { data: [73370315, 174698475, 87764250, 2250, 0, 250174, 9], label: '计提利息总额' },
    { data: [24823, 4310789, 790632, 23052, 668, 318150, 9], label: '累计已提折旧总额' }
  ];
  //饼状图文字
  _pieLabels: string[] = ['铁债', '国开行', '优先股']
  //饼状图数据
  _pieData: number[] = [1692215654.69178, 293107561.643836, 933395486.794522];
  /**
   * 柱状图事件
   * @param event 
   */
  chatbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'hover':
        break;
      case 'click':
        break;
    }
  }
  /**
   * 饼状图事件
   * @param event 
   */
  chartpieEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'hover':
        break;
      case 'click':
        break;
    }
  }
  /**
   * 上传图片
   * @param event 
   */
  fileEvent(event): any {
    switch (event.eventName) {
      case "success":
        break;
      case "failure":
        break;
    }
  }


  //选项卡
  _tabmain = [
    { name: '铁路局', disabled: false },
    { name: '总公司', disabled: false },
  ]
  _tabmain2 = [
    { name: '数据统计1', disabled: false },
    { name: '数据统计2', disabled: false },
    { name: '访问量', disabled: false }
  ]
  //待办任务
  waitWork = {
    field: { FIELDCODE: 'FIELDNAME' },
    data: [{
      FIELDNAME: '2018.03.26-项目元数据框架构建；项目内容尽快完成项目元数据框架构建，尽快实施上线任务完成并实施'
    }
    ]
  }
  test = [{
    FIELDNAME: '2018.03.26-项目元数据框架构建；项目内容尽快完成项目元数据框架构建，尽快实施上线任务完成并实施'
  }, {
    FIELDNAME: '2018.03.26-元数据组件开发；项目内容尽快完成数据组件开发'
  }, {
    FIELDNAME: '2018.03.26-开始进行元数据方法的呈现方式'
  }, {
    FIELDNAME: '2018.03.26-项目元数据框架构建'
  }, {
    FIELDNAME: '2018.03.26-元数据组件开发'
  }, {
    FIELDNAME: '2018.03.26-元数据组件开发；项目内容尽快完成数据组件开发'
  }]
  //时间轴
  timeline1: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    // fcTitleCode: '',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  //待办任务状态
  _waitWorkStatus: string;
  constructor(public mainService: LayoutService, public router: Router,
    public activedRoute: ActivatedRoute, private _router: Router) {
    this.timeline1.fcValues = [
      {
        label: "03-14 18:00",
        subTitle: "小标题",
        smark: "平台系统版本发布1.0版",
        color: 2
      }, {
        label: "03-14 18:00",
        subTitle: "小标题",
        smark: "平台系统版本发布2.0版",
        color: 2
      }, {
        label: "03-14 18:00",
        subTitle: "小标题",
        smark: "平台系统版本发布3.0版",
        color: 2
      }, {
        label: "03-14 18:00",
        subTitle: "小标题",
        smark: "平台系统版本发布4.0版",
        color: 2
      }
    ]
  }
  /**
   * 快速开始
   */
  addStart() {

  }
  navTo(url: string) {
    this.mainService.navToByMenuId(this.router, url);
  }
  /**
   * 聊天面板
   * @param event 
   */
  chatEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'send'://发布聊天记录
        break;
      case 'closed'://关闭聊天面板
        this.showchat = false;
        break;

    }
  }
  
}
