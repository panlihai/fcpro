import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FclistdataComponent, ParentDetailComponent } from 'fccomponent';
import { SysprofileService } from '../../services/sysprofile.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { GridApi, ColumnApi } from 'ag-grid';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
import { Args_NavLink, NavLinkFunctionName } from '../../services/sysnavlink.service';
@Component({
  selector: 'sysprofile',
  templateUrl: 'sysprofile.component.html',
  styles: [`
  .sysprofile{

  }
  .personel{
    height:100%;
  }
  .personel-avatar{
    text-align:center;
  }
  :host ::ng-deep .personel-avatar .fc-avatar{
    width: 100px;
    height: 100px;
    margin-top:20px;
    border-radius: 50%;
    cursor:pointer;
    position:relative;
  }
  :host ::ng-deep .personel-avatar .fc-avatar:after{
    content: '点击上传';
    width: 100%;
    display: block;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -16px;
    display:none;
  }
  :host ::ng-deep .upload-avatar .fc-avatar:after{
    content: '点击上传';
  }
  :host ::ng-deep .edit-avatar .fc-avatar:after{
    content: '点击修改';
  }
  :host ::ng-deep .personel-avatar .fc-avatar:before{
    content: '';
    width: 100%;
    height:100%;
    display: block;
    background-color:#000;
    opacity:0.18;
    position: absolute;
    top: 0;
    left:0;
    display:none;
  }
  :host ::ng-deep .personel-avatar .fc-avatar:hover::before,:host ::ng-deep .personel-avatar .fc-avatar:hover::after{
    display:block;
  }
  .text-center{
    text-align:center;
  }
  .personel-user{
    color:#000000;
    font-size:20px;
  }
  .flex-3{
    display:flex;
    justify-content:space-between;
    margin-top:20px;
    padding: 10px;
    background-color: #f6f9fd;
  }
  .flex-3-item{
    width:33.33%;
    text-align:center;
  }
  .personel-account{
    font-size:20px;
    font-weight: 300;
    color: #526069;
    display:block;
  }
  .account-stat-count+span {
    color: #a3afb7;
  }
  .personel-title{
   
  }
  .personel-title span{
    font-size: 18px;
    font-weight: 700;
  }
  :host ::ng-deep .personel .fc-tooltip-default .iconfont{
    font-size: 18px;
    color: #3889FF;
  }
  .sys-card{
    background-color:#fff;
    padding:0 10px 10px;
    border-radius:4px;
    box-shadow:0 1px 6px rgba(0,0,0,.2);
    position:relative;
  }
  .widget{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .widget-text{
    text-align:right;
    margin-right:20px;
  }
  .widget-text-title{
    font-size:20px;
  }
  .widget-circle{
    width:56px;
    height:56px;
    line-height:56px;
    border-radius:50%;
    text-align:center;
    margin-left:20px;
  }
  .widget-text-number{
    font-size:22px;
    cursor:pointer;
  }
  .widget-circle1{
    background-color:#FF4D55;
  }
  .widget-circle2{
    background-color:#007EFF;
  }
  .widget-circle3{
    background-color:#52CC7A;
  }
  .widget1 .widget-text-number{
    color:#FF4D55;
  }
  .widget2 .widget-text-number{
    color:#007EFF;
  }
  .widget3 .widget-text-number{
    color:#52CC7A;
  }
  .fc-layoutcol{

  }
  :host ::ng-deep .fc-full>.fc-content>fc-layoutcol>.fc-layoutcol, 
  :host ::ng-deep .fc-full>.fc-content>fc-layoutcol>.fc-layoutcol>.fc-content1,  
  :host ::ng-deep .fc-full>.fc-content>fc-layoutcol>.fc-layoutcol>.fc-content2,
  :host ::ng-deep .left>.fc-layoutrow>div>div{
    height: 100%;
  }
  :host ::ng-deep .sysprofile-tab nz-tabset{
    height:100%;
  }
  :host ::ng-deep .sysprofile-tab .ant-tabs-content{
    height: calc(100% - 40px);
  }
  ant-tabs-content{

  }
  :host ::ng-deep .sysprofile-tab .ant-tabs-tabpane,
  :host ::ng-deep .sysprofile-tab .ant-tabs-tabpane>div,
  .sysprofile-list,
  .personelinfo{
    width:100%;
    height:100%;
  }
  :host ::ng-deep .sysprofile-list .fc-list{
    width:100%;
    height:calc(100% - 40px);
    overflow:auto;
  }
  .footer-btn{
    width: 100%;
    text-align: center;
    margin-top:40px;
  }
  .view-personelinfo{
    overflow-y: auto;
    height: 100%;
    overflow-x: hidden;
  }
  `]
})
export class SysprofileComponent extends ParentDetailComponent {
  //选项卡
  tabmain = [
    { name: '待办任务', disabled: false, icon: 'fc-icon-picture' },
    { name: '消息', disabled: false, icon: 'fc-icon-information' },
    { name: '个人信息', disabled: false, icon: 'fc-icon-users' },
    { name: '常用功能', disabled: false, icon: 'fc-icon-repository' },
    { name: '修改密码', disabled: false, icon: 'fc-icon-reset' },
    { name: '日志', disabled: false, icon: 'fc-icon-log' }
  ];
  //密码重置
  _lastPwd: string;
  _newPwd: string;
  mainValid: any = {};
  //快速导航，过滤
  navLinkListCondition: any;
  links: any;
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  //navLink 标签
  navLinks: any;
  //个人信息修改
  personelEdit: boolean = false;
  //用户信息
  userInfo: any;
  //在线用户
  signinTime: string;
  //用户
  sysuserObj: any;
  //人员
  sysemployeeObj: any;
  //部门

  //单位
  syscompanyObj: any;
  //消息分页总数
  msgPageTotal: number;
  //消息分页索引
  msgPageNum: number;
  //消息分页大小
  msgPageSize: number;
  constructor(public mainService: SysprofileService,
    public router: Router,
    private _providers: ProvidersService,
    public activedRouter: ActivatedRoute,
    private modal: NzModalService) {
    super(mainService, router, activedRouter);
  }
  listdataOptions: any;
  init(): void {
    //获取用户信息
    this.userInfo = this.userInfo;
    this.mainService.getSigninTime().subscribe(result => {
      if (result.CODE === '0') {
        this.signinTime = result.DATA.LOGTIME;
      }
    })
    //快速导航
    this.initNavLink();
    //消息分页总条数
    // this.mainService.getSysmsg().subscribe(result => {
    //   if (result.CODE === '0') {
    //     this.msgPageTotal = result.DATA;
    //   }
    // })
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }
  /**
   * 修改个人信息
   */
  editPersonelinfo() {
    this.personelEdit = true;
  }
  /**
   * 保存个人信息
   */
  savePersonelinfo() {
    this.personelEdit = false;
  }
  /**
   * 上传个人头像
   */
  uploadAvatar() {

  }
  /**
   * 修改个人头像
   */
  editAvatar() {

  }
  /**
   * 待办任务事件
   * @param param
   */
  tasklistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'select'://选中一条
        this._providers.commonService.event('selectedMenu', {
          ID: event.param.ID, MENUID: 'SYSASSIGNMENT', ROUTER: 'sysassignmentList',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '待办任务', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
    }
  }
  /**
   * 访问日志事件
   * @param event 
   */
  sysloglistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'select'://选中一条
        this._providers.commonService.event('selectedMenu', {
          ID: event.param.ID, MENUID: 'SYSLOG', ROUTER: 'syslogList',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '访问日志', MENUICON: 'fc-icon-bgefficiency'
        });

        break;
    }
  }
  /**
   * 消息事件
   * @param event 
   */
  msglistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'select'://选中一条
        this._providers.commonService.event('selectedMenu', {
          ID: event.param.ID, MENUID: 'SYSMESSAGE', ROUTER: 'sysmessageDetail',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '消息详情', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
      case 'listOneView':
        this._providers.commonService.event('selectedMenu', {
          ID: event.param.ID, MENUID: 'SYSMESSAGE', ROUTER: 'sysmessageDetail',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '消息详情', MENUICON: 'fc-icon-bgefficiency'
        });
      case 'listOneDelete'://删除
        this.messageService.confirm("确认删除记录吗?", () => {

        }, () => { });
        break;
    }
  }
  /**
   * 消息分页事件
   */
  msgpaginationEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'pageSizeChange'://每页显示多少条

        break;
      case 'jumpPage':
        //跳到第几页,第一次进来时不要触发，否则fcReflesh()会执行两次

        break;
    }
  }
  taskpaginationEvent(event: FCEVENT) {
    switch (event.eventName) {

    }
  }

  /**
   * 跳转到待办
   */
  navToAssignment() {
    this._providers.commonService.event('selectedMenu', {
      MENUID: 'ASSIGNMENT', ROUTER: 'sysassignmentList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '待办任务', MENUICON: 'fc-icon-bgefficiency'
    });
  }
  /**
   * 跳转到消息
   */
  navToMessage() {
    this._providers.commonService.event('selectedMenu', {
      MENUID: 'SYSMESSAGE', ROUTER: 'sysmessageDetail',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '消息详情', MENUICON: 'fc-icon-bgefficiency'
    });
  }
  /**
   * 跳转到系统日志
   */
  navToSyslog() {
    this._providers.commonService.event('selectedMenu', {
      MENUID: 'SYSLOG', ROUTER: 'syslogList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '访问日志', MENUICON: 'fc-icon-bgefficiency'
    });
  }
  /**
  * YM
  *动态加载快速导航标签数据;
  */
  initNavLink() {
    this.mainService.NavLinkFunction(NavLinkFunctionName.getNavLinks).subscribe(res => {
      if (res.CODE === "0") this.navLinks = res.DATA;
      let args: Args_NavLink = { navlinks: this.navLinks }
      this.navLinkListCondition = this.mainService.NavLinkFunction(NavLinkFunctionName.rebuildList_NavLink, args);
      this.mainService.NavLinkFunction(NavLinkFunctionName.refreshNavLink, args);
    });
  }
  /** YM
   * 新增快速导航标签
   */
  addNavLinkTag(contentTpl, footerTpl) {
    let args: Args_NavLink = { navlinks: this.navLinks, contentTpl: contentTpl, footerTpl: footerTpl, listdata: this.navLink_listdata }
    if (this.mainService.NavLinkFunction(NavLinkFunctionName.addNavLinkTag, args)) {
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
      this.mainService.NavLinkFunction(NavLinkFunctionName.handleAddNavLink_ok, args)
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
    this.mainService.NavLinkFunction(NavLinkFunctionName.handleAddNavLink_cancel)
  }
  /** YM
   * 快速导航标签事件
   */
  navLinkEvent(ev: FCEVENT, link: any) {
    switch (ev.eventName) {
      case "close":
        break;
      case "beforeClose":
        event.stopPropagation();
        event.preventDefault();
        this.mainService.NavLinkFunction(NavLinkFunctionName.deleteSubject).subscribe(res => {
          if (res) this.initNavLink();
        });
        this.mainService.NavLinkFunction(NavLinkFunctionName.navLinkBeforeClose, { link: link });
        break;
      case "click":
        event.stopPropagation();
        event.preventDefault();
        this.logService.debug('路由' + ev.param);
        this._providers.commonService.event('selectedMenu', {
          ID: '', MENUID: 'SYSNAVLINK', ROUTER: 'sysassignmentList',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '待办任务', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
      default:
        break;
    }
  }
}


