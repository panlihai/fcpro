import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, FclistdataComponent } from 'fccomponent';
import { ProvidersService } from 'fccore';
import { SysproductService } from '../../services/sysproduct.service';
import { SyswizardService } from '../../services/syswizard.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { Args_NavLink, NavLinkFunctionName } from '../../services/sysnavlink.service';
import { ColumnApi } from 'ag-grid';
@Component({
  selector: 'syswizard',
  templateUrl: './syswizard.component.html',
  styles: [`
  .sys-wizard-card{
    position:relative;
    margin-bottom:10px;
  }
  .sys-card-footer{
    padding:5px 20px;
  }
  .sys-title-right{
    position:absolute;
    right:10px;
    top:5px;
  }
  .sys-basic-info{
    display:flex;
    justify-content:space-between;
    padding:15px;
    box-sizing:border-box;
  }
  .sys-info-user{
    display:flex;
    justify-content:flex-start;
  }
  .sys-info-user img{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-rgiht:20px;
  }
  .sys-info-text .sys-info-title{
    font-size:20px;
    font-weight:700;
  }
  .sys-info-text .sys-info-smarks{

  }
  .sys-info-count{
    display:flex;
    justify-content:flex-end;
  }
  .sys-info-count .sys-info-count-every{
    text-align:center;
    padding:0 20px;
  }
  .sys-info-count .sys-info-count-every .sys-count-text{
    display:block;
  }
  .sys-info-count .sys-info-count-every .sys-count-number{
    display:block;
    font-size:20px;
    font-weight:700;
  }
  .sys-team{
    display:flex;
    flex-wrap:wrap;
    padding-left:10px;
  }
  .sys-team>li{
    width:50%;
    height:40px;
    display:flex;
    justify-content:flex-start;
  }
  .sys-team img{
    width:30px;
    height:30px;
    border-radius:50%;
    margin-right:10px;
  }
  :host ::ng-deep .sys-wizard .fc-title{
    border-color: #ebedf0;
    margin-top: 0;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  :host ::ng-deep .fc-content2>.sys-wizard-content2 {
    padding-left:10px;
  }
  :host ::ng-deep  .sys-wizard-card>.ant-card>.ant-card-body{
    padding:0;
  }
  .ant-card-bordered{

  }
  `]
})
export class SyswizardComponent extends ParentlistComponent {
  //快速导航，过滤 
  navLinkListCondition: any;
  links: any;
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  currentModal_navLink: any;
  //navLink 标签
  navLinks: any;
  //产品数据
  sysServices: any[];
  constructor(public mainService: SyswizardService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private _providers: ProvidersService,
  ) {
    super(mainService, router, activeRoute);
  }
  init() {
    this.initServices();
    //快速导航
    this.initNavLink();
  }
  getDefaultQuery() {

  }
  event(eventName: string, context: any): void {

  }
  /**
  * 初始化产品
  */
 initServices() {
    this.mainService.findService({}).subscribe(result => {
      if(result.CODE==='0'){
        this.sysServices = result.DATA;
      }
    });
  }
  // 访问指数
  public radarChartLabels: string[] = ['口碑', '引用', '产量', '贡献', '热度'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56], label: '个人' },
    { data: [28, 48, 40, 19, 96], label: '团队' },
    { data: [28, 48, 40, 19, 96], label: '部门' }
  ];
  public radarChartType: string = 'radar';
  // 访问指数
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
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
  /**
   * 访问指数
   */
  visitlistEvent() {

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