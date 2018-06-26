/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService, ResponseResult, Sysmenu } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService, NavLinkFunctionName, Args_NavLink } from "./sysnavlink.service";
import { GridApi, Column, ColumnApi } from "ag-grid";
import { SysannouncementService } from './sysannouncement.service';
import { Subject } from "rxjs";
import { FclistdataComponent, Fcmenu } from "fccomponent";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    private navLinkService: SysnavlinkService,
    public sysannouncementService: SysannouncementService
  ) { }
  /** YM
   *  获取快速导航标签数据流
   */
  getNavLinks() {
    return this.navLinkService.getNavLinks();
  }
  /** YM
 * 重构查询条件并返回
 * @param args
 */
  rebuildList_NavLink(args?: Args_NavLink) {
    return this.navLinkService.rebuildList_NavLink(args.navlinks);
  }
  /** YM
 * 刷新快速导航标签
 */
  refreshNavLink(args?: Args_NavLink) {
    return this.navLinkService.refreshNavLink(args.navlinks);
  }
  /**YM
 * 处理新增快速导航标签事件
 * @param args 
 */
  addNavLinkTag(args?: Args_NavLink) {
    return this.navLinkService.addNavLinkTag(args.navlinks, args.contentTpl, args.footerTpl, args.listdata);
  }
  /**YM
 * 处理弹窗确认事件
 * @param args 
 */
  handleAddNavLink_ok(args?: Args_NavLink) {
    return this.navLinkService.handleAddNavLink_ok(args.listdata, args.navlinks, args.condition)
  }
  /**YM
 * 处理弹出取消事件
 */
  handleAddNavLink_cancel() {
    return this.navLinkService.handleAddNavLink_cancel();
  }
  /**YM
 * 处理链接删除
 * @param args 
 */
  navLinkBeforeClose(args?: Args_NavLink) {
    return this.navLinkService.navLinkBeforeClose(args.link);
  }
  /**YM
   * 返回删除数据的流
   */
  deleteSubject = () => {
    return this.navLinkService.deleteSubject;
  }
  /**
   * 路由跳转事件
   * @param router 
   * @param url 
   */
  navToByMenuId(router: Router, menuId: any) {
    let menu = this.findMenuByRouter(this.providers.menuService.menus, menuId);
    if (menu) {
      this.providers.commonService.event("selectedMenu", menu);
    } else {
      this.providers.msgService.error(menuId + '不存在...');
    }
  }
  /**
    * @param menus 
    * @param menuId 
    */
  findMenuByRouter(menus: any[], router: string): Fcmenu {
    if (menus.length == 0) {
      return null;
    }
    let menu: Sysmenu;
    let i = 0;
    do {
      let item = menus[i];
      if (item.ROUTER && item.ROUTER === router) {
        menu = item;
        break;
      } else if (item.P_CHILDMENUS && item.P_CHILDMENUS.length !== 0) {
        menu = this.findMenuByRouter(item.P_CHILDMENUS, router);
        if (menu) {
          break;
        }
      }
      i++;
    } while (i < menus.length);
    return menu;
  }
}
