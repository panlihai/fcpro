import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOptions, NavsideOptions, NAVSIDECOLOR, FcnavsideComponent, FcTaboptions } from 'fccomponent/fcnav';
import { environment } from '../../environments/environment';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService, SysmessageService } from 'fccore';
import { LayoutService } from '../system/services/layout.service';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`
  :host ::ng-deep .fc-layout{
    height: calc(100% - 36px);
    padding:5px;
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
  `]
})
export class LayoutComponent implements OnInit {
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
  _navTabSelectedIndex: number = 0;
  constructor(private _router: Router,
    private _providers: ProvidersService,
    private sysmessageService: SysmessageService,
    private mainService: LayoutService
  ) {
    //订阅消息
    this.msgHandler();
    //初始化消息配置
    this._navSideOption = this.mainService.initNavSideOptions();
    this._tabs = this.mainService._tabs;
    //选中索引
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
            gChildMenu[0].select = true;
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
          this._providers.userService.clearUserinfo();
          this._router.navigate(['/signin']);
        })
        break;
    }
  }

  /**
   *  菜单事件
   * @param event 
   */
  navmenuEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navmenuStatus = event.param;
        break;
      case 'select':
        //导航并存储列表
        this.mainService.navStoreMenu(this._router, event.param);
        this._navTabSelectedIndex = this.mainService._selectedIndex;
        this._navmenuSelected = this.mainService._navmenuSelected;
        console.log(this._navmenuSelected);
        break;
    }
  }
  navtabEvent(event: FCEVENT): void {
    switch (event.eventName) {
      case 'closed':
        this.mainService.navRemoveMenu(this._router, event.param);
        break;
      case 'selected':
        this.mainService.navStoreMenu(this._router, event.param);
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
