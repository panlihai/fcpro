import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, FclistdataComponent, ParentDetailComponent } from 'fccomponent';
import { SysprofileService } from '../../services/sysprofile.service';
import { ResetpwddialogComponent } from '../../../layout/resetpwddialog.component';
import { NzModalService } from 'ng-zorro-antd';
import { BasicpersoneldialogComponent } from './basicpersoneldialog.component';
import { FCEVENT } from 'fccomponent/fc';
import { GridApi, ColumnApi } from 'ag-grid';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
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
  .detail-item{
    height:32px;
    line-height:32px;
  }
  .detail-item .label{
    color:#000000;
  }
  .detail-item .label-detail{
    color:#a3afb7;
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
  .sysprofile-list{
    width:100%;
    height:100%;
  }
  :host ::ng-deep .sysprofile-list .fc-list{
    width:100%;
    height:calc(100% - 40px);
    overflow:auto;
  }
  `]
})
export class SysprofileComponent extends ParentDetailComponent {
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
  //快速导航
  navLinkListCondition: {};
  //个人信息工具栏
  personelinfotlb: any = [{ BTNTYPE: 'default', BTNICON: 'fc-icon-amend', BTNNAME: '修改', ACTCODE: 'edit' }];
  //个人信息修改
  personelEdit: boolean = false;
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  //navLink 标签
  navLinks: any;
  //用户信息
  userInfo: any;
  //在线用户
  signinTime: string;
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
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }

  /**
   * 跳转
   * @param url 
   */
  navTo(url: string) {
    // this.mainService.appService.navToByMenuId(this.router, url);
  }
  /** YM
   * 新增快速导航标签
   */
  addNavLinkTag(contentTpl, footerTpl) {

  }
  /** YM
   * 处理新增快速导航标签——确定
   */
  handleAddNavLink_ok(ev: any) {

  }
  /** YM
   * 处理新增快速导航标签——取消
   */
  handleAddNavLink_cancel(ev: any) {

  }
  /** YM
   * 快速导航标签事件
   */
  navLinkEvent(ev: FCEVENT, link: any) {

  }
  /**
   * 个人信息事件
   * @param event 
   */
  tlblistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'edit':
        this.personelinfotlb = [{ BTNTYPE: 'default', BTNICON: 'fc-icon-save', BTNNAME: '保存', ACTCODE: 'save' }];
        this.personelEdit = true;
        break;
      case 'save':
        this.personelinfotlb = [{ BTNTYPE: 'default', BTNICON: 'fc-icon-amend', BTNNAME: '修改', ACTCODE: 'edit' }];
        this.personelEdit = false;
        break;
    }
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
 * 修改密码
 */
  resetPassword(): any {
    const modal = this.modal.open({
      title: '修改密码',
      content: ResetpwddialogComponent,
      onOk() {

      },
      onCancel() {

      },
      footer: false,
      componentParams: {
        options: {}
      }
    });
    modal.subscribe(result => {
      this.mainService.sysuserService.doReset(result);
    })
  };
  /**
   * 修改基本信息
   */
  editBasicPersonel() {
    this.modal.open({
      title: '修改个人基本信息',
      content: BasicpersoneldialogComponent,
      onOk() {

      },
      onCancel() {

      },
      footer: false,
      componentParams: {
        options: {}
      }
    }).subscribe(result => {
    })
  }
  /**
   * 待办任务事件
   * @param param
   */
  tasklistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case '':
        break;
    }
  }
  sysloglistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case '':
        break;
    }
  }
  taskpaginationEvent(event: FCEVENT) {
    switch (event.eventName) {

    }
  }
  msgpaginationEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'pageSizeChange'://每页显示多少条

        break;
      case 'jumpPage':
        //跳到第几页,第一次进来时不要触发，否则fcReflesh()会执行两次

        break;
    }
  }
  /**
   * 跳转到待办
   */
  navToAssignment() {
    this._providers.commonService.event('selectedMenu', {
      ID: '', MENUID: 'ASSIGNMENT', ROUTER: 'sysassignmentList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '待办任务', MENUICON: 'fc-icon-bgefficiency'
    });
  }
  /**
   * 跳转到消息
   */
  navToMessage() {
    this._providers.commonService.event('selectedMenu', {
      ID: '', MENUID: 'SYSMESSAGE', ROUTER: 'sysmessageDetail',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '消息详情', MENUICON: 'fc-icon-bgefficiency'
    });
  }
  /**
   * 跳转到系统日志
   */
  navToSyslog() {
    this._providers.commonService.event('selectedMenu', {
      ID: '', MENUID: 'SYSLOG', ROUTER: 'syslogList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '访问日志', MENUICON: 'fc-icon-bgefficiency'
    });
  }
}
