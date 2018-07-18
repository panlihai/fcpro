import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TimelineOptions, FclistdataComponent, Fcmenu } from "fccomponent";
import { FCEVENT } from "fccomponent/fc";
import { SyshomeService } from "../../services/syshome.service";
import { NzModalService } from "ng-zorro-antd";
import { ColumnApi } from "ag-grid";
import { environment } from "../../../../environments/environment";
import { Sysmenu, ProvidersService } from "fccore";
import { NavLinkFunctionName, Args_NavLink } from "../../services/sysnavlink.service";
import { element } from "protractor";
import { OrderDownlineTreeviewEventParser } from "ngx-treeview";
@Component({
  selector: "home",
  templateUrl: "./home.component.html",
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
      padding-left: 21%;
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
    .todo-taskslist li span{
      width: 97%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      cursor: move;
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
      height: 250px;
      overflow: auto;
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
      padding-left: 20px;
      display: inline-block;
      padding: 5px;
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
  :host ::ng-deep .system-version .fc-timeline{
    height:240px;
    overflow:auto;
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
    height:22px;
    color:#666666;
    font-size:12px;
    text-align: center;
    line-height: 22px;
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
:host ::ng-deep .quick-navigation .fc-content{
  height:110px;
  overflow:auto;
}
:host ::ng-deep .templatehome .separated-lefttop .fc-layoutpanel,:host ::ng-deep .templatehome .separated-left .fc-layoutpanel,.templatehome .separated-righttop,:host ::ng-deep .templatehome .separated-rightcenter .fc-layoutpanel,:host ::ng-deep .templatehome .separated-left .fc-layoutpanel,.templatehome .separated-leftbottom,:host ::ng-deep .templatehome .separated-right .fc-layoutpanel,:host ::ng-deep .templatehome .separated-rightbottom .fc-layoutpanel,:host ::ng-deep .templatehome .separated-leftrightbottom .fc-layoutpanel {
  background:white;
  padding:5px;
  border-radius: 2px;
  box-shadow: 0 0 5px #ccc;
  width: auto;
}
:host ::ng-deep .templatehome .separated-lefttop .fc-layoutpanel,:host ::ng-deep .templatehome .separated-left .fc-layoutpanel,:host ::ng-deep .templatehome .separated-left .fc-layoutpanel,.templatehome .separated-leftbottom{
  margin: 0px 5px 5px 0px;
}
.templatehome .separated-righttop{
  margin: 0px 0px 5px 0px;
}
:host ::ng-deep .templatehome .separated-rightcenter .fc-layoutpanel{
  margin-bottom: 5px;
}
:host ::ng-deep .templatehome .separated-leftrightbottom .fc-layoutpanel {
  margin-right: 5px;
}
 .seeMore {
  text-align: center;
  color: #;
  color: #5C92FF;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.seeMore span:hover{
  border-bottom: 1px solid #1890FF;
}
    `
  ]
})
export class HomeComponent implements OnInit {
  simpleDrop: any = null;
  //初始化分页大小
  pagesize: number = 2;
  //初始化每一页几个数据
  pagenum: number = 1;
  //当前用户
  currentUser: any;
  //聊天消息
  contactMessages: any[] = [];
  //联系人姓名
  contactname: any;
  //通讯录列表
  contacts: any[];
  //输入框内准备发送的消息
  sendMassage: any;
  navLinkListCondition: any;
  //消息公告
  notifys: any;
  waits: any;
  links: any;
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  //隐藏聊天面板
  showchat: boolean = false;
  //柱状图文字
  _barLabels: string[] = [
    "哈局",
    "沈阳局",
    "北京局",
    "太原局",
    "呼和局",
    "...",
    "乌鲁木齐"
  ];
  //柱状图数据
  _barData: any[] = [
    {
      data: [73370315, 174698475, 87764250, 2250, 0, 250174, 9],
      label: "计提利息总额"
    },
    {
      data: [24823, 4310789, 790632, 23052, 668, 318150, 9],
      label: "累计已提折旧总额"
    }
  ];
  //饼状图文字
  _pieLabels: string[] = ["铁债", "国开行", "优先股"];
  //饼状图数据
  _pieData: number[] = [1692215654.69178, 293107561.643836, 933395486.794522];
  //选项卡
  _tabmain = [
    { name: "公告", disabled: false },
    { name: "消息", disabled: false }
  ];
  _tabmain2 = [
    { name: "数据统计1", disabled: false },
    { name: "数据统计2", disabled: false },
    { name: "访问量", disabled: false }
  ];
  //待办任务
  waitWork = {
    field: { FIELDCODE: "FIELDNAME" },
    data: [
      {
        FIELDNAME:
          "2018.03.26-项目元数据框架构建；项目内容尽快完成项目元数据框架构建，尽快实施上线任务完成并实施"
      }
    ]
  };
  test = [
    {
      FIELDNAME:
        "2018.03.26-项目元数据框架构建；项目内容尽快完成项目元数据框架构建，尽快实施上线任务完成并实施"
    },
    {
      FIELDNAME: "2018.03.26-元数据组件开发；项目内容尽快完成数据组件开发"
    },
    {
      FIELDNAME: "2018.03.26-开始进行元数据方法的呈现方式"
    },
    {
      FIELDNAME: "2018.03.26-项目元数据框架构建"
    },
    {
      FIELDNAME: "2018.03.26-元数据组件开发"
    },
    {
      FIELDNAME: "2018.03.26-元数据组件开发；项目内容尽快完成数据组件开发"
    }
  ];
  //时间轴
  versionTimeline: TimelineOptions = {
    fcAppid: "",
    fcLabelCode: "label",
    fcTitleCode: "title",
    fcColorCode: "color",
    fcId: "ID"
  };
  //待办任务状态
  _waitWorkStatus: string;
  //navLink 标签
  navLinks: any;
  firstInit: boolean = true;
  constructor(
    public mainService: SyshomeService,
    public router: Router,
    private _providers: ProvidersService,
    public activedRoute: ActivatedRoute,
    private _router: Router,
    private nzModal: NzModalService
  ) {}
  ngOnInit(): void {
    this.pagenum = 1;
    this.currentUser = this.mainService.getUserinfo().USERCODE;
    this.mainService.providers.appService
      .findWithQuery("SYSVERSION", { PAGENUM: 1, PAGESIZE: 6, ODER: "TS DESC" })
      .subscribe(result => {
        if (result.CODE === "0") {
          let version = (this.versionTimeline.fcValues = []);
          result.DATA.forEach(item => {
            let t = this.mainService.providers.commonService.timestampFormat(
              Number.parseInt(item.PUBLISHTIME) * 1000,
              "MM-dd"
            );
            version.push({
              label: t,
              title: environment.projectName + "发布" + item.LASTVERSION + "版",
              ID: item.ID,
              color: "normal"
            });
          });
        }
      });
    // 查询SYSNOTIFY所有元数据
    this.mainService.getannouncement().subscribe(result => {
      if (result.CODE === '0') {
        this.notifys = result.DATA;
        // 把时间转成时间戳
        this.notifys.forEach((item, index) => {
          this.notifys[index].PUBLISHTIME = this.mainService.providers.commonService.timestampFormat(
            Number.parseInt(item.PUBLISHTIME),
            "yyyy-MM-dd" + ""
          );
        });
      }
    })
    // 查询SYSASSIGNMENT所有元数据
    this.mainService.getassignment().subscribe(result => {
      if (result.CODE === '0') {
        this.waits = result.DATA;
        // 把时间转成时间戳
        this.waits.forEach((item, index) => {
          this.waits[index].CREATETIME = this.mainService.providers.commonService.timestampFormat(
            Number.parseInt(item.CREATETIME),
            "yyyy-MM-dd" + ""
          );
        });
      }
    })
    this.initNavLink();
    // 查询系统通讯录所有元数据
    this.mainService.providers.appService
      .findWithQuery("SYSCONTACT", {})
      .subscribe(result => {
        if (result.CODE === "0") {
          this.contacts = result.DATA;
        }
      });

  }

  /**
   * YM
   *动态加载快速导航标签数据;
   */
  initNavLink() {
    this.mainService.getNavLinks().subscribe(res => {
      if (res.CODE === "0") this.navLinks = res.DATA;
      let args: Args_NavLink = { navlinks: this.navLinks }
      this.navLinkListCondition = this.mainService.rebuildList_NavLink(args);
      this.mainService.refreshNavLink(args);
    });
  }
  /** YM
   * 新增快速导航标签
   */
  addNavLinkTag(contentTpl, footerTpl) {
    let args: Args_NavLink = { navlinks: this.navLinks, contentTpl: contentTpl, footerTpl: footerTpl, listdata: this.navLink_listdata }
    if (this.mainService.addNavLinkTag(args)) {
      setTimeout(() => {
        let column: ColumnApi = this.navLink_listdata._gridColumnApi;
        if (column) column.autoSizeAllColumns();
      });
    }
  }
  /** YM
   * 处理新增快速导航标签——确定
   */
  handleAddNavLink_ok(ev: any) {
    let args: Args_NavLink = { navlinks: this.navLinks, listdata: this.navLink_listdata, condition: this.navLinkListCondition }
    if (
      this.mainService.handleAddNavLink_ok(args)
    ) {
      setTimeout(() => {
        this.initNavLink();
      });
    }
  }
  /** YM
   * 处理新增快速导航标签——取消
   */
  handleAddNavLink_cancel(ev: any) {
    this.mainService.handleAddNavLink_cancel()
  }
  /** YM
   * 快速导航标签事件
   */
  navLinkEvent(ev: FCEVENT, link: any) {
    switch (ev.eventName) {
      case "close":
        break;
      case "beforeClose":
        let args: Args_NavLink = { link: link }
        this.mainService.deleteSubject().subscribe(res => {
          if (res) this.initNavLink();
        });
        this.mainService.navLinkBeforeClose(args);
        break;
      case "click":
        this.mainService.navToByMenuId(this.router, link.ROUTER);
        break;
      default:
        break;
    }
  }
  navTo(url: string) {
    this.mainService.navToByMenuId(this.router, url);
  }
  /** YM
   * 新增快速导航标签弹窗列表事件
   */
  navLinkListEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case "":
        break;
    }
  }
  /**
   * 柱状图事件
   * @param event
   */
  chartbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "hover":
        break;
      case "click":
        break;
    }
  }
  /**
   * 饼状图事件
   * @param event
   */
  chartpieEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "hover":
        break;
      case "click":
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
  * 消息公告点击跳转路由事件
  * @param event 
  */
  announcementEvent(id, catagory, publishuser) {
    if (publishuser !== this.mainService.providers.userService.getUserInfo().USERCODE) {
      let obj: any = {
        TS: this.mainService.announcementtime(),
        SORT: this.mainService.announcementtime(),
        POSTTIME: this.mainService.announcementtime(),
        CONTENT: "消息公告" + id + "进行回执",
        ISREAD: "N",
        ID: id,
        TYPE: "",
        NOTIFICATIONUSERID: publishuser,
        TITLE: "回执信息",
        POSTUSERID: this.mainService.announcementPOSTUSER()
        // POSTUSERID: this.mainService.providers.userService.getUserInfo().USERCODE
      };
      if (catagory === "error") {
        obj.TYPE = "danger";
      }
      if (catagory === "processing") {
        obj.TYPE = "normal"
      }
      if (catagory === "warning") {
        obj.TYPE = "waring"
      }
      this.mainService.announcementsave(obj)
    }
    this.mainService.sysannouncementrouter(this._router, id);
  }
  // 历史待办模块功能
  assignmentHistory(id) {
    this.mainService.sysassignmentrouter(this._router, id);
  }
  // 待办任务列表点击
  assignmentEvent(wait) {

    this.mainService.assignmentMessage(this._router, wait);
  }
  /* 时间轴事件
  * @param event
  */
  timelineEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "selected": //选中
        this._providers.commonService.event('selectedMenu', {//跳转到版本控制详情界面
          ID: event.param.ID, MENUID: 'SYSVERSION', ROUTER: 'sysversionDetail',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '版本控制', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
    }
  }
  /**
   * 聊天面板
   * @param event
   */
  chatEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "send": //发布聊天记录
        break;
      case "closed": //关闭聊天面板
        this.showchat = false;
        break;
    }
  }
  /**
   * 发送聊天记录
   */
  sendChat() {
    //获取消息，合成消息体
    let time;
    let obj = [{
      CONTENT: this.sendMassage,
      POSTUSERID: this.currentUser,
      NOTIFICATIONUSERID: this.contactname,
      POSTTIME: this.mainService.providers.commonService.getTimestamp(),
      TS:this.mainService.providers.commonService.getTimestamp(),
      ISSEND:'N',
      ISREAD:'N',
      SORT:this.mainService.providers.commonService.getTimestamp(),
      TITLE:'来自联系人的消息',
      TYPE:'normal'
    }];
    //如果是当天时间，不显示年月日
    console.log(new Date(obj[0].TS*1000).toLocaleDateString());
    if (new Date(obj[0].TS*1000).toLocaleDateString() === new Date().toLocaleDateString()) {
      time = this.mainService.providers.commonService.timestampFormat(obj[0].TS*1000, 'hh:mm:ss') + "";
    } else {
      //如果不是当天，年月日时分秒
      time = this.mainService.providers.commonService.timestampFormat(obj[0].TS*1000, 'yyyy-MM-dd hh:mm:ss') + "";
    }
    obj[0].TS=time; 
    //往集合顶部插入一条消息记录，并且清空输入框
    this.contactMessages = obj.concat(this.contactMessages);
    this.sendMassage = '';
    //将该条数据保存到数据库里面
    this.mainService.saveMessage_chat(obj);
  }
  /**
   * 关闭聊天面板
   */
  closeChat() {
    this.showchat = false;
  }
  /**
  * 点击消息按钮出现聊天面板
  */
  showcontact(userid) {
    this.pagenum = 1;
    this.showchat = true;
    this.contactname = userid;
    this.contactMessages = [];
    //首次加载聊天内容
    this.getChatmessage(userid);
    //远程消息接收
    this.mainService.providers.daoService.connectionWs(this.contactname).subscribe(data => {
      if (data.length !== 0) {
        this.contactMessages = this.contactMessages.concat(JSON.parse(data));
      }
    });
  }
  /**
   *  查询指定联系人的聊天内容 
   */
  getChatmessage(userid) {
    this.mainService.getChatcontent(userid, this.pagesize, this.pagenum)
      .subscribe(result => {
        if (result.CODE === "0") {
          //时间的显示
           result.DATA.forEach(element => {
            if (element.TS !== null && element.TS !== '') {
              //如果是当天时间，不显示年月日
              if (new Date(element.POSTTIME*1000).toLocaleDateString() === new Date().toLocaleDateString()) {
                element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.POSTTIME) * 1000, 'hh:mm:ss') + "";
              } else {
                //如果不是当天，年月日时分秒
                element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.POSTTIME) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
              }
            }
          })
          this.contactMessages = result.DATA.concat(this.contactMessages);
        }
      });
  }
  /* 点击查看更多 */
  seeMore() {
    this.pagenum++;
    //调用获取聊天消息
    this.getChatmessage(this.contactname);
  }
// }
//    * 图表事件
//    */
//   chatbarEvent() {

//   }
}
