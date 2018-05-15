import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProvidersService, MessageService } from 'fccore';
import { FcmodalconfirmComponent } from 'fccomponent/fcmodal/fcmodalconfirm.component';
import { FCEVENT } from 'fccomponent/fc';
import { NavsideOptions } from 'fccomponent/fcnav/fcnavside.component';
import { MenuOptions } from 'fccomponent/fcnav/fcnavmenu.component';
import { FcTaboptions } from 'fccomponent/fcnav/fcnavtab.component';
import { LayoutService } from '../system/services/layout.service';
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
    background: #e7e9eb;
    position: relative;
  }
  :host ::ng-deep .content-main{
    width: 100%;
    height: 100%;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #EEF7FC;
    border-top: 5px solid #ececec;
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
    width:calc(100% - 5px);
    position:absolute;
    top:5px;
    left:5px;
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
  `]
})
export class LayoutComponent implements OnInit {
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
  //当前用户信息
  user: any;
  menus = [];
  allmenus = [];
  _menus: any = [];
  _tabs: FcTaboptions[];
  _navTabSelectedIndex: string = "0";
  constructor(private _router: Router,
    private _providers: ProvidersService,
    private mainService: LayoutService
  ) {
    this.mainService.init();
    //订阅消息
    this.msgHandler();
    //初始化消息配置
    this._navSideOption = this.mainService.initNavSideOptions();
    this._tabs = this.mainService._tabs;
    this._router.navigate(["/" + environment.pid.toLocaleLowerCase() + "/home"]);
  }
  ngOnInit() {
    this.mainService.getMessage().subscribe(res => {
      if (res[0].CODE === '0') {
        this._navSideOption.fcValues1 = res[0].DATA;
      }
      if (res[1].CODE === '0') {
        this._navSideOption.fcValues2 = res[1].DATA;
      }
    });
    this._navTabSelectedIndex = this.mainService._selectedIndex;
    //把弹出确认框变量存入到服务里
    MessageService.confirmModal = this.confirmmodal;
  }
  /**
   * 导航栏事件
   * @param event 
   */
  navbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navbarStatus = event.param;
        break;
      case 'selectDropdown':
      case 'selectMenu':
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
          this._router.navigate(['/signin']);
        })
        break;
    }
  }

  //布局比例
  _layoutSpans: string = "2,9";
  /**
   *  菜单事件
   * @param event 
   */
  navmenuEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navmenuStatus = event.param;
        if (this._navmenuStatus === "closed") {
          this._layoutSpans = "3,85";
        } else if (this._navmenuStatus === "opened") {
          this._layoutSpans = "2,9";
        }
        break;
      case 'select':
        //导航并存储列表
        this.mainService.storeMenu(this._router, event.param,{});
        this._navTabSelectedIndex = this.mainService._selectedIndex;
        this._navmenuSelected = this.mainService._navmenuSelected;
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
        this.mainService.navRemoveMenu(this._router, event.param);
        break;
      case 'selected':
        this.mainService.navMenu(this._router, event.param);
        break;
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
