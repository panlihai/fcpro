import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOptions, NavsideOptions, NAVSIDECOLOR, FcnavsideComponent } from 'fccomponent/fcnav';
import { environment } from '../../environments/environment';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService, SysmessageService } from 'fccore';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`

  `]
})
export class LayoutComponent implements OnInit {
  //系统名称
  _projectName = environment.projectName;
  //导航栏状态
  _navbarStatus = "closed";
  //菜单栏状态
  _navmenuStatus = "opened";
  //侧边栏配置
  navSide: NavsideOptions = {
    fcAppid: '',
    fcLabelCode1: '全部消息',
    fcLabelCode2: '未读消息',
    fcTitleCode: 'TITLE',
    fcSmarkCode: 'CONTENT',
    fcColorCode: 'TYPE',
    fcReadCode: 'ISREAD'
  };
  //按钮配置
  menuOptions: MenuOptions = {
    //所在产品优先级最高，当有产品时其它条件忽略
    fcPid: environment.pid
  };
  //当前用户信息
  user: any;
  menus = [];
  allmenus = [];

  constructor(private _router: Router, private _providers: ProvidersService, private sysmessageService: SysmessageService, ) {
    //订阅消息
    this.msgHandler();
  }
  ngOnInit() {
    //获取消息内容
    this.user = this._providers.userService.getUserInfo();
    this.sysmessageService.findWithQuery({ NOTIFICATIONUSERID: this.user.USERCODE, PAGESIZE: 1000, ORDER: "TS desc" }).subscribe(result => {
      if (result.CODE === '0' && result.DATA.length !== 0) {
        this.navSide.fcValues2 = result.DATA;
      }
    });
    this.sysmessageService.findWithQuery({ NOTIFICATIONUSERID: this.user.USERCODE, PAGESIZE: 1000, ISREAD: 'N', ORDER: "TS desc" }).subscribe(result => {
      if (result.CODE === '0' && result.DATA.length !== 0) {
        this.navSide.fcValues1 = result.DATA;
      }
    });
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
        break;
      case 'logout'://登出
        this._providers.userService.logout().subscribe(result => {
          this._providers.userService.clearUserinfo();
          this._router.navigate(['/signin']);
        })
        break;
    }
  }
  _menus: any = [];
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
        this.navSide.fcValues1.unshift(JSON.parse(data));
        this.navSide.fcValues1.unshift(JSON.parse(data));
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
