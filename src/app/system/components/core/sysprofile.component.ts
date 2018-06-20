import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, FclistdataComponent } from 'fccomponent';
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
    width: 120px;
    height: 120px;
    margin:20px auto 10px;
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
    display:flex;
    justify-content:space-between;
    border-top: 1px solid #e4eaec;
    margin-top: 10px;
    padding-top: 5px;
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
    background-color:#ffffff;
    padding-left :10px;
    padding-right:10px;
  }
  `]
})
export class SysprofileComponent extends ParentlistComponent {
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  navLinkListCondition: {};
  //快速导航
  navLinks: any;
  constructor(public mainService: SysprofileService,
    public router: Router,
    public activedRouter: ActivatedRoute,
    private modal: NzModalService) {
    super(mainService, router, activedRouter);
  }
  init(): void {
    this.initNavLink();
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }
  /**
  * YM
  *动态加载快速导航标签数据;
  */
  initNavLink() {
    this.mainService.getNavLinks().subscribe(res => {
      if (res.CODE === "0") this.navLinks = res.DATA;
      this.rebuildList_NavLink();
      this.refreshNavLink();
    });
  }
  /** YM
   * 重查询NavLink_listdata数据
   */
  rebuildList_NavLink() {
    let exitsRouters: any = [];
    this.navLinks.forEach(el => {
      exitsRouters.push(el.ROUTER);
    });
    let s = this.arrayToSqlString(exitsRouters);
    if (s) {
      this.navLinkListCondition = {
        WHERE: `ENABLE='Y' AND APPID!='null' AND APPID!='SYSCOMPONENT' AND MENUTYPE='APP' AND ROUTER!='null' AND ROUTER NOT IN (${s})`
      };
    } else {
      this.navLinkListCondition = {
        WHERE: `ENABLE='Y' AND APPID!='null' AND APPID!='SYSCOMPONENT' AND MENUTYPE='APP' AND ROUTER!='null'`
      };
    }
  }
  /** YM
   * 数组转sql批查询条件
   * @param array
   */
  arrayToSqlString(array: Array<any>) {
    let str: string = "";
    for (let i = 0; i < array.length; i++) {
      str += `'${array[i]}'`;
      if (i !== array.length - 1) {
        str += ",";
      }
    }
    return str.toString();
  }
  /** YM
   * 刷新快速导航标签
   */
  refreshNavLink() {
    this.navLinks.forEach(link => {
      this.mainService.getNavLabel(link).subscribe(res => {
        if (res.CODE === "0") link["LABEL"] = res.DATA[0].MENUNAME;
      });
    });
  }
  /** YM
   * 新增快速导航标签
   */
  addNavLinkTag(contentTpl, footerTpl) {
    if (this.navLinks.length < 8) {
      this.currentModal_navLink = this.modal.open({
        title: "新增快速导航标签",
        content: contentTpl,
        footer: footerTpl,
        style: { width: "50%" },
        wrapClassName: "vertical-top-modal",
        maskClosable: false,
        zIndex: 998,
        onOk: function () { },
        onCancel: function () { }
      });
      setTimeout(() => {
        let gridApi: GridApi = this.navLink_listdata._gridApi;
        let column: ColumnApi = this.navLink_listdata._gridColumnApi;
        if (column) column.autoSizeAllColumns();
      });
    } else {
      this.modal.info({
        title: "操作提示",
        content: "快速导航标签不能超过8个",
        zIndex: 999
      });
    }
  }
  /** YM
   * 处理新增快速导航标签——确定
   */
  handleAddNavLink_ok(ev: any, listdata: FclistdataComponent) {
    let gridApi: GridApi = this.navLink_listdata._gridApi;
    let column: ColumnApi = this.navLink_listdata._gridColumnApi;
    let selected = gridApi.getSelectedRows();
    if (selected.length === 0) {
      this.currentModal_navLink.destroy("onOk");
      this.currentModal_navLink = null;
    }
    let count = this.navLinks.length + selected.length;
    if (count <= 8) {
      let saveObjs: any = [];
      selected.forEach(el => {
        let saveObj = this.mainService.getNavDefaultObj();
        for (let key in el) {
          if (key === "PID") saveObj[key] = el[key];
          if (key === "ROUTER") saveObj[key] = el[key];
        }
        saveObj["CREATETIME"] = this.mainService.getNowTimeStamp() + "";
        saveObj["LASTMODIFY"] = this.mainService.getNowTimeStamp() + "";
        saveObj["USERID"] = this.mainService.getNowUserId();
        saveObj["CATAGORY"] = "private";
        delete saveObj["ID"];
        saveObjs.push(saveObj);
      });
      this.mainService.saveNavLinks(saveObjs);
      setTimeout(() => {
        this.initNavLink();
      });
      this.currentModal_navLink.destroy("onOk");
      this.currentModal_navLink = null;
    } else {
      this.modal.info({
        title: "操作提示",
        content: "快速导航标签不能超过8个",
        zIndex: 999
      });
    }
  }
  /** YM
   * 处理新增快速导航标签——取消
   */
  handleAddNavLink_cancel(ev: any) {
    this.currentModal_navLink.destroy("onCancel");
    this.currentModal_navLink = null;
  }
  /** YM
   * 快速导航标签事件
   */
  navLinkEvent(ev: FCEVENT, link) {
    switch (ev.eventName) {
      case "close":
        break;
      case "beforeClose":
        event.stopPropagation();
        event.preventDefault();
        this.modal.confirm({
          title: "操作提示",
          content: "是否确认删除该快速导航标签？",
          onOk: () => {
            this.mainService.deleteNavLink(link).subscribe(res => {
              if (res.CODE === "0")
                this.mainService.providers.msgService.success("删除成功");
              else this.mainService.providers.msgService.warm("删除失败");
            });
            setTimeout(() => {
              this.initNavLink();
            });
          },
          onCancel: () => { }
        });
        break;
      case "click":
        event.stopPropagation();
        event.preventDefault();
        this.navTo(link.ROUTER);
        break;
      default:
        break;
    }
  }
  /**
   * 跳转
   * @param url 
   */
  navTo(url: string) {
    // this.mainService.appService.navToByMenuId(this.router, url);
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
