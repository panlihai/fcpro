import { Component, OnInit, AfterContentInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, TimelineOptions } from 'fccomponent';
import { eventNames } from 'cluster';
import { FCEVENT } from 'fccomponent/fc';
import { LayoutService } from '../../services/layout.service';
import { SyshomeService } from '../../services/syshome.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
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
  .fc-chatouter{
    width:385px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px #333333;
}
.fc-chattop{
    width:100%;
    height:50px;
    background-color: #5C92FF;
    padding: 0px 20px;
    line-height: 50px;
    border-radius: 6px 6px 0 0;
}
.fc-username{
   margin-left:20px;
   color:#ffffff;
   font-size:16px;
   float:left;
}
.fc-chatuser {
    float: left;
    height: 50px;
    padding-top: 9px;
}
.fc-userimg{
    float:left;
    color:#ffffff;
}
.fc-close{
    color:#ffffff;
    font-size:14px;
    float:right;
    cursor:pointer;
}
.fc-chatcontent{
    width:100%;
    height:220px;
    overflow: auto;
    background-color:white;
}
.fc-chattime{
    width:100%;
    height:50px;
    color:#666666;
    font-size:12px;
    text-align: center;
    line-height: 50px;
}
.fc-chatleft{
    position: relative;
    left: 33px;
    width: 260px;
    min-height: 40px;
    background: #f1f1f1;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    color: #333333;
    font-size: 14px;
    padding-left: 20px;
    line-height: 37px;
    margin-bottom:20px;
    }
.fc-chatleft:before{
    position: absolute;
    content: "";
    width: 0;
    height: 16px;
    right: 100%;
    top: 20px;
    border-top: 16px solid transparent;
    border-right: 23px solid #f1f1f1;
    }    
.fc-chatinnerright{
    width:100%;
    margin-bottom:10px;
    min-height: 40px;
    line-height: 37px;
}
.fc-chatright{
    position: relative;
    width: 260px;
    height: 40px;
    background: #5c92ff;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    color: #ffffff;
    font-size: 14px;
    padding-left: 20px;
    line-height: 40px;
    float: right;
    margin-right: 33px;
    }
.fc-chatright:after{
    position: absolute;
    content: "";
    width: 0;
    height: 16px;
    left: 100%;
    top: 19px;
    border-top: 16px solid transparent;
    border-top: 16px solid transparent;
    border-left: 23px solid #5c92ff;
    }  
.fc-chatname{
    text-align:right;
    padding-right:20px;
    color:#cccccc;
    font-size:12px;
}  
.fc-chatbottom {
    width: 100%;
    height: 60px;
    background: #f1f1f1;
    border-radius: 0 0 6px 6px;
    padding:10px;
}
.fc-chatsend{
    background-color:#ffffff;
    border-radius:6px;
    width: 365px;
    height: 40px;
    padding-left:20px;
    line-height：40px;
}
.fc-chatlink{
    margin-right:13px;
    float:left;
    height: 40px;
    padding-top: 12px;
}
.fc-chattext{
    float:left;
    height:100%;
    width:260px;
    border:none;
    outline:none;
}
.fc-chattext .ant-input-wrapper{
    height:100%;
    width:240px;
}
:host ::ng-deep .fc-chatouter .ant-input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 100%;
    height:40px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;
    border: none;
}
:host ::ng-deep .ant-input {
    height: 40px;
    outline:none;
}
.fc-chatsendbutton{
    height:18px;
    font-size:14px;
    color:#5c92ff;
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
}
:host ::ng-deep .ant-input:focus {
    box-shadow: none;
}
    `
  ]
})
export class HomeComponent implements OnInit {

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
  test = [
    {
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
  versionTimeline: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcColorCode: 'color',
    fcId: 'ID'
  };
  //待办任务状态
  _waitWorkStatus: string;
  constructor(public mainService: SyshomeService, public router: Router,
    public activedRoute: ActivatedRoute, private _router: Router) {
  }
  ngOnInit(): void {
    this.mainService.providers.appService.findWithQuery('SYSVERSION', { PAGENUM: 1, PAGESIZE: 6, ODER: 'TS DESC' }).subscribe(result => {
      if (result.CODE === '0') {
        let version = this.versionTimeline.fcValues = [];
        result.DATA.forEach(item => {
          let t = this.mainService.providers.commonService.timestampFormat(Number.parseInt(item.PUBLISHTIME) * 1000, 'MM-dd');
          version.push({
            label: t,
            title: environment.projectName + '发布' + item.LASTVERSION + '版',
            ID: item.ID,
            color: 'normal'
          })
        })
      }
    })
  }
  /**
 * 柱状图事件
 * @param event 
 */
  chartbarEvent(event: FCEVENT) {
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
  /**
   * 快速开始
   */
  addStart() {

  }
  navTo(url: string) {
    this.mainService.layoutService.navToByMenuId(this.router, url);
  }
  /**
 * 时间轴事件
 * @param event 
 */
  timelineEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'selected'://选中
        this.router.navigate(['/system/sysversionDetail'], { queryParams: { ID: event.param.ID } })
        break;
    }
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
  /**
   * 发送聊天记录
   */
  sendChat() {

  }
  /**
   * 关闭聊天面板
   */
  closeChat() {
    this.showchat = false;
  }
}
