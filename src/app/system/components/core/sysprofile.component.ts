import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, FclistdataComponent, ParentDetailComponent } from 'fccomponent';
import { SysprofileService } from '../../services/sysprofile.service';
import { ResetpwddialogComponent } from '../../../layout/resetpwddialog.component';
import { NzModalService } from 'ng-zorro-antd';
import { BasicpersoneldialogComponent } from './basicpersoneldialog.component';
import { FCEVENT } from 'fccomponent/fc';
import { GridApi, ColumnApi } from 'ag-grid';
@Component({
  selector: 'sysprofile',
  templateUrl: 'sysprofile.component.html',
  styles: [`
  .personel{

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
  .label{
    color:#000000;
  }
  .label-detail{
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
  .edit-basicinfo{
    cursor: pointer;
    position:absolute;
    right:10px;
    top:5px;
  }
  :host ::ng-deep .fc-title[_ngcontent-c23] {
    padding-top: 5px;
    padding-bottom: 5px;
}
  `]
})
export class SysprofileComponent extends ParentDetailComponent {
  //快速导航
  navLinkListCondition: {};
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  //navLink 标签
  navLinks: any;
  constructor(public mainService: SysprofileService,
    public router: Router,
    public activedRouter: ActivatedRoute,
    private modal: NzModalService) {
    super(mainService, router, activedRouter);
  }
  init(): void {
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
  initNavLink() {
    this.mainService.navLinkService.getNavLinks().subscribe(res => {
      if (res.CODE === "0") this.navLinks = res.DATA;
      this.navLinkListCondition = this.mainService.navLinkService.rebuildList_NavLink(this.navLinks);
      this.mainService.navLinkService.refreshNavLink(this.navLinks);
    });
  }
  /** YM
   * 新增快速导航标签
   */
  addNavLinkTag(contentTpl, footerTpl) {
    if (this.mainService.navLinkService.addNavLinkTag(this.navLinks, contentTpl, footerTpl, this.navLink_listdata)) {
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
    if (
      this.mainService.navLinkService.handleAddNavLink_ok(this.navLink_listdata, this.navLinks, this.navLinkListCondition)
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
    this.mainService.navLinkService.handleAddNavLink_cancel();
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
        this.mainService.navLinkService.deleteSubject.subscribe(res => {
          if (res) this.initNavLink();
        });
        this.mainService.navLinkService.navLinkBeforeClose(link);
        break;
      case "click":
        event.stopPropagation();
        event.preventDefault();
        this.mainService.navToByMenuId(this.router, link.ROUTER);
        break;
      default:
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
}
