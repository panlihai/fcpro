import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, FclistdataComponent } from 'fccomponent';
import { ProvidersService } from 'fccore';
import { SyswizardService } from '../../services/syswizard.service';
import { FCEVENT } from 'fccomponent/fc';
import { Args_NavLink } from '../../services/sysnavlink.service';
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
    padding:20px;
    box-sizing:border-box;
    height:152px;
  }
  .sys-info-user{
    display:flex;
    justify-content:flex-start;
  }
  .sys-info-user img{
    width:60px;
    height:60px;
    border-radius:50%;
    margin-right: 20px;
  }
  .sys-info-text .sys-info-title{
    font-size:22px;
    color:#333333;
  }
  .sys-info-text .sys-info-smarks{
    color:#999999;
    font-size:16px;
    margin-top:15px;
  }
  .sys-info-count{
    display:flex;
    justify-content:flex-end;
    margin-right:40px;
    align-items: center;
  }
  .sys-info-count .sys-info-count-every{
    text-align:center;
    padding:0 20px;
  }
  .sys-info-count .sys-info-count-every .sys-count-text{
    display:block;
    font-size:16px;
    color:#999999;
  }
  .sys-info-count .sys-info-count-every .sys-count-number{
    display:block;
    font-size:30px;
    color:#333333;
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
    margin-bottom:0;
  }
  :host ::ng-deep .sys-wizard .sys-wizard-navlink .fc-subtitle{
   display:none;
  }
  :host ::ng-deep .fc-content2>.sys-wizard-content2 {
    padding-left:10px;
  }
  :host ::ng-deep  .sys-wizard-card>.ant-card>.ant-card-body{
    padding:0;
  }
  .ant-card-bordered{

  }
  :host ::ng-deep .fastnav-add .ant-btn-dashed {
    color: #1890ff;
    background-color: #fff;
    border-color: #1890ff;
    border-style: dashed;
  }
  :host ::ng-deep .sys-wizard .ant-card:not(.ant-card-no-hovering) {
    border-color: #e9e9e9;
    border-radius: 6px;
  }
  
  :host ::ng-deep .sys-wizard .ant-card:not(.ant-card-no-hovering):hover {
    box-shadow: 0px 4px 24px rgba(22, 24, 51, 0.4);
    border-color: #e9e9e9;
    border-radius: 6px;
  }
  
  `]
})
export class SyswizardComponent extends ParentlistComponent {
  //链接
  links: any;
  //快速导航列表
  @ViewChild("navLink_listdata") navLink_listdata: FclistdataComponent;
  //模态框快速导航
  currentModal_navLink: any;
  //navLink 标签
  navLinks: any;
  //产品数据
  sysServices: any[];
  //快速
  navLinkListCondition: any;
  constructor(public mainService: SyswizardService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private _providers: ProvidersService,
  ) {
    super(mainService, router, activeRoute);
  }
  init() {
    //初始化服务
    this.initServices();
  }
  ngOnInit(): void {
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
      if (result.CODE === '0') {
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
  }
  public chartHovered(e: any): void {
  }

  /**
   * 访问指数
   */
  visitlistEvent() {

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
}