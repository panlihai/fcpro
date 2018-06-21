/* 	个人信息维护服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService, Sysmenu } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysuserService } from './sysuser.service';
import { SysnavlinkService } from './sysnavlink.service';
import { Router } from '@angular/router';
import { Fcmenu } from 'fccomponent';
@Injectable()
export class SysprofileService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysuserService: SysuserService,
    public navLinkService: SysnavlinkService, ) {
    super(providers, "SYSAPP");
  }
  /**
     * 
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
  /**
 * 关闭路由并删除路由表
 * @param router 路由
 * @param menu 关闭的路由菜单
 */
  navToByMenuId(router: Router, menuId: string) {
    let menu = this.findMenuByRouter(this.providers.menuService.menus, menuId);
    if (menu) {
      this.providers.commonService.event("selectedMenu", menu);
    } else {
      this.providers.msgService.error(menuId + '不存在...');
    }
  }
  /** YM
  *  获取快速导航标签数据流
  */
  getNavLinks() {
    return this.navLinkService.findWithQuery({});
  }
  /** YM
   *  初始化NavLink OBJ
   */
  getNavDefaultObj() {
    return this.providers.appService.initObjDefaultValue(
      this.navLinkService.app
    );
  }
  /** YM
   *  获取当前时间戳
   */
  getNowTimeStamp() {
    return this.providers.commonService.getTimestamp();
  }
  /** YM
   *  获取当前用户ID
   */
  getNowUserId() {
    return this.providers.userService.getUserInfo().ID;
  }
  /** YM
   *  保存快速导航标签
   */
  saveNavLinks(saveObjs) {
    saveObjs.forEach(el => {
      this.navLinkService.save(el).subscribe(res => {
        if (res.CODE === "0") {
          this.providers.msgService.success("快速导航标签更新成功");
        } else {
          this.providers.msgService.warm("快速导航标签更新失败");
        }
      });
    });
  }
  /** YM
   *  获取快速导航标签名
   */
  getNavLabel(obj) {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ROUTER ='${obj.ROUTER}'`
    });
  }
  /** YM
   *  删除快速导航标签
   */
  deleteNavLink(link) {
    return this.navLinkService.delete(link);
  }
  /** YM
   *  获取系统子菜单数据用于快速导航标签
   */
  getSysChildMenu() {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ENABLE='Y' AND USERID='${
        this.providers.userService.getUserInfo().ID
        }'`
    });
  }
}
