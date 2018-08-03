import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProvidersService, MessageService } from 'fccore';
import { LayoutService } from '../system/services/layout.service';
import { FcmodalconfirmComponent } from 'fccomponent/fcmodal/fcmodalconfirm.component';
import { FCEVENT } from 'fccomponent/fc';
import { NavsideOptions } from 'fccomponent/fcnav/fcnavside.component';
import { MenuOptions, FcnavmenuComponent, Fcmenu } from 'fccomponent/fcnav/fcnavmenu.component';
import { FcTaboptions, FcnavtabComponent } from 'fccomponent/fcnav/fcnavtab.component';
import 'rxjs/add/operator/filter';
import { NzModalService } from 'ng-zorro-antd';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`
  :host ::ng-deep .content-wrap>div>.fc-content1{
    height: 100%;
  }
  :host ::ng-deep .content-wrap>div>.fc-content2{
    padding: 41px 5px 5px;
    height: 100%;
    box-sizing: border-box;
    background: #F0F2F5;
    position: relative;
  }
  :host ::ng-deep .content-main{
    width: 100%;
    height:96%;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    border-top: 5px solid #F0F2F5;
    background-color:#fff;
  }
  :host ::ng-deep router-outlet + * {
    width: 100%;
    height: 100%;
  }
  .footer {
    width: 100%;
    height:40px;
    line-height:40px;
    text-align: center;
    position: absolute;
  }
  .nav-tab{
    width:100%;
    position:absolute;
    top:0px;
    left:0px;
    background-color:#ffffff;
    height:42px;
  }
  .nav-breadcrub {
    width:calc(100% - 5px);
    position:absolute;
    left:5px;
    top:35px;
  }
  :host ::ng-deep .nav-breadcrub .ant-breadcrumb{
    background-color:#ffffff;
    padding-left:10px;
    box-sizing:border-box;
  }
  .body-mask {
    width:100%;
    height:100%;
    background-color:#108ee9;
    opacity:0.4;
    position:fixed;
    left:0;
    top:0;
    z-index:9;
  }
  :host ::ng-deep .logo .icon-logo{
    font-size:22px!important;
  }
  :host ::ng-deep .sys-navbar .fc-navbar{
    background-color:#001529!important;
  }
  :host ::ng-deep .sys-content-wrap>div>.fc-content2 {
    padding: 0px;
  }
  :host ::ng-deep .sys-content-wrap .content-main{
    padding: 0px 5px 20px;
    border-top: 0;
    height:calc(100% - 65px);
    background-color:#F0F2F5;
  }
  :host ::ng-deep .sys-nav-tabmain .ant-tabs-bar {
      background-color: #ffffff;
      margin-bottom:0;
      border-bottom:0;
  }
  :host ::ng-deep .sys-nav-tabsub .ant-tabs-bar {
      border-bottom:0;
      margin-bottom: 0px;
  }
  :host ::ng-deep .sys-nav-tabsub .ant-tabs-ink-bar{
    height:0;
  }
  :host ::ng-deep .sys-content-wrap .fc-navtab{
    border-bottom:0;
  }
  :host ::ng-deep .sys-content-wrap .sys-nav-tabmain .ant-tabs-nav-scroll,
  :host ::ng-deep .sys-content-wrap .sys-nav-tabsub .ant-tabs-nav-scroll{
    text-align:center;
  }
  :host ::ng-deep .sys-content-wrap .sys-nav-tabmain .ant-tabs-tab,
  :host ::ng-deep .sys-content-wrap .sys-nav-tabsub .ant-tabs-tab{
    padding-left:5px;
    padding-right:5px;
    margin-right:15px;
  }
  `]
})
export class LayoutComponent implements OnInit {
  @ViewChild('fcnavmenu')
  fcnavmenu: FcnavmenuComponent;
  @ViewChild('fcnavtab')
  fcnavtab: FcnavtabComponent;
  @ViewChild('confirmmodal')
  confirmmodal: FcmodalconfirmComponent;
  //系统名称
  _projectName = environment.projectName;
  //导航栏状态
  _navbarStatus = "closed";
  //菜单栏状态
  _navmenuStatus = "opened";
  //是否被选中
  _navmenuSelected: boolean;
  //侧边栏配置
  _navSideOption: NavsideOptions;
  //按钮配置
  _menuOptions: MenuOptions = {
    //所在产品优先级最高，当有产品时其它条件忽略
    fcPid: environment.pid
  };
  //路由打开记录
  selectMenu = {};
  // 当前所有菜单
  _menus: any = [];
  //子菜单
  _childMenus: any = [];
  //布局比例
  _layoutSpans: string = "2,9";
  //显示模式
  displayMode: string;
  _displayMode: string;
  constructor(private _router: Router,
    private _providers: ProvidersService,
    private mainService: LayoutService,
    private activatedRoute: ActivatedRoute,
    private modalService: NzModalService
  ) {
    //订阅消息
    this.msgHandler();
    //初始化消息配置
    this._navSideOption = this.mainService.initNavSideOptions();
    this._providers.commonService.event('selectedMenu', {
      ID: '0', MENUID: 'HOME', ROUTER: 'home',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '首页', MENUICON: 'fc-icon-home'
    });
    this._providers.commonService.subscribe('tabClicked', (result) => {
      if (result) {
        let menu = this.mainService.findMenuByRouter(this.fcnavmenu.fcMenus, result.param.ROUTER);
        if (menu && !menu.select) {
          menu.select = true;
        }
      }
    });
    this._router.navigate(["/" + environment.pid.toLocaleLowerCase() + "/home"]);
    // 路由事件
    this._router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          let menu: any = this.activatedRoute.snapshot.queryParams;
          if (menu && menu.ID) {
            let tabs = this.fcnavtab.fcTabs.filter(t => t.content.MENUID === menu.MENUID);
            if (tabs.length !== 0) {
              this.fcnavtab.fcTabs[tabs[0].index].content = menu;
            } else if (!menu['MENUID']) {
              let selectedIndex = this.fcnavtab.fcSelectedIndex;
              let cMenu = this.fcnavtab.fcTabs[selectedIndex].content as Fcmenu;
              let content: any = {
                ROUTER: event.routeConfig.path,
                MENUICON: cMenu.MENUICON,
                MENUTYPE: 'APP',
                MENUNAME: cMenu.MENUNAME,
                MENUID: cMenu.MENUID,
                PID: cMenu.PID,
                APPID: cMenu.APPID,
                ID: menu.ID,
                refresh: menu.refresh
              }
              this.fcnavtab.fcTabs[selectedIndex].content = content;
            }
          } else if (event.routeConfig.path.toLowerCase() !== 'home') {
            menu = this.mainService.findMenuByRouter(this._menus, event.routeConfig.path);
            if (menu) {
              let tabs = this.fcnavtab.fcTabs.filter(t => t.content.MENUID === menu.MENUID);
              if (tabs.length !== 0) {
                this.fcnavtab.fcTabs[tabs[0].index].content = menu;
              }
            }
          }
        }

      });
  }
  ngOnInit() {
    //如果是产品是tab的显示模式,默认选中第一个导航
    let productObj = this._providers.productService.mainObj;
    if (undefined !== productObj && null !== productObj && '' !== productObj) {
      if (productObj.DISPLAYMODE === 'TAB') {
        if (this._menus && this._menus.length !== 0) {
          this.selectedtabmain(this._menus[0]);
        }
      }
    }
    this.getMessage();
    if (this.fcnavtab) {
      this.fcnavtab.fcTabs = [];
      this.fcnavtab.fcSelectedIndex = 0;
      //把弹出确认框变量存入到服务里
      MessageService.confirmModal = this.confirmmodal;
      if (this.fcnavtab.fcTabs.length === 0) {
        this.fcnavtab.fcTabs.push({
          id: '0', index: 0, enabled: true, name: '首页', close: false, icon: 'fc-icon-home', refresh: 'Y', content:
            { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: environment.pid, MENUTYPE: 'INURL' }
        });
      }
    }
  }
  getMessage() {
    this.mainService.getMessage().subscribe(res => {
      if (res[0].CODE === '0') {
        this._navSideOption.fcValues1 = res[1].DATA;
        this._navSideOption.fcValues1.forEach(element => {
          if (element.TS !== null && element.TS !== '') {
            element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
          }
        })
      }
      if (res[1].CODE === '0') {
        this._navSideOption.fcValues2 = res[0].DATA;
        this._navSideOption.fcValues2.forEach(element => {
          if (element.TS !== null && element.TS !== '') {
            element.TS = this.mainService.providers.commonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
          }
        })
      }
    });
  }


  /**
   * 导航栏事件
   * @param event
   */
  navbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle'://展开收起消息
        this._navbarStatus = event.param;
        break;
      case 'selectDropdown'://下拉菜单
      case 'selectMenu'://下拉菜单
        let obj: any = this._providers.productService.mainObj;
        if (undefined !== obj && '' !== obj && null !== obj) {
          this._displayMode = obj.DISPLAYMODE;
          // 切换布局 有选项卡模式和左侧菜单模式
          if (this._displayMode === 'TAB') {
            this.displayMode = 'TAB';
            this._layoutSpans = "0,1";
          } else if (this._displayMode === 'MENU') {
            this.displayMode = 'MENU';
            this._layoutSpans = "2,9";
          }
        }
        this._menus = event.param.P_CHILDMENUS;
        let menu = this._menus[0];
        if (menu.HASCHILD === 'Y') {
          menu.opened = true;
          let childMenu = menu.P_CHILDMENUS[0];
          if (childMenu.HASCHILD === 'Y') {
            childMenu.opened = true;
            let gChildMenu = childMenu.P_CHILDMENUS[0];
            gChildMenu.select = true;
          } else {
            childMenu.select = true;
          }
          break;
        } else {
          menu.select = true;
        }
        break;
      case 'logout'://登出
        this._providers.userService.logout().subscribe(result => {
          //清除用户缓存
          this._providers.userService.clearUserinfo();
          // 清除菜单缓存
          this._providers.menuService.removeMenus();
          // 清除tab页面
          if (this._displayMode === 'MENU') {
            this.fcnavtab.fcTabs = [];
            this.fcnavtab.fcSelectedIndex = undefined;
          }
          this._router.navigate(['/signin']);
        })
        break;
      case 'editUser'://修改密码
        this._router.navigate(["/" + environment.pid.toLocaleLowerCase() + "/sysprofileList"]);
        break;
    }
  }
  /**
   * 导航父级选项卡跳转路由
   * @param menu 
   */
  selectedtabmain(menu: any) {
    this._router.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER]);
    if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
      this._childMenus = menu.P_CHILDMENUS;
      this.selectedtabsub(this._childMenus[0]);
    } else {
      this._childMenus.length = 0;
    }
  }
  /**
   * 导航子级选项卡跳转路由
   * @param menu 
   */
  selectedtabsub(menu: any) {
    this._router.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER], { queryParams: { refresh: 'Y' } });
  }


  /**
   *  菜单事件
   * @param event
   */
  navmenuEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle'://展开收起左侧导航
        this._navmenuStatus = event.param;
        if (this._navmenuStatus === "closed") {
          this._layoutSpans = "3,85";
        } else if (this._navmenuStatus === "opened") {
          this._layoutSpans = "2,9";
        }
        break;
      case 'select':
        //导航并存储列表
        event.param.refresh = 'Y';
        this._providers.commonService.event('selectedMenu', event.param);
        break;
    }
  }
  /**
   * 多tab页面事件
   * @param event tab页面事件
   */
  navtabEvent(event: FCEVENT): void {
    switch (event.eventName) {
      case 'closed':
        this.selectMenu[event.param.MENUID] = "";
        break;
      case 'selected':
        if (!this.selectMenu[event.param.MENUID]) {
          //将该路由存放在路由打开记录中
          this.selectMenu[event.param.MENUID] = event.param.MENUID;
        }
        this._providers.commonService.event('tabClicked', event.param);
        this.mainService.navMenu(this._router, event.param);
        break;
    }
  }
  /**
    * 侧边栏页面事件
    * @param event tab页面事件
    */
  navsideEvent(event: FCEVENT): void {
    switch (event.eventName) {
      case 'closed':
        // 删除缓存
        break;
      case 'click':
        //点击一项
        debugger;
        this.mainService.navMessage(this._router, event.param).subscribe(res => {
          this.getMessage();
        });
        break;
      case 'toggle':
        this._navbarStatus = event.param;
    }
  }

  /**
   * 消息处理
   * @param message 消息对象
   */
  msgHandler(): void {
    //远程消息接收
    this._providers.daoService.connectionWs(this._providers.userService.getUserInfo().USERCODE).subscribe(data => {
      if (data.length !== 0) {
        this._navSideOption.fcValues1.unshift(JSON.parse(data));
        this._navSideOption.fcValues1.unshift(JSON.parse(data));
      }
    });
  }
  /**
   *
   */
  ngOnDestroy(): void {
    this._providers.daoService.ws.close();
  }
}
