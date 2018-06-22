/* 	个人信息维护服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService, Sysmenu } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysuserService } from './sysuser.service';
import { Router } from '@angular/router';
import { Fcmenu } from 'fccomponent';
import { SyssessionService } from './syssession.service';
import { SysnavlinkService } from './sysnavlink.service';
@Injectable()
export class SysprofileService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysuserService: SysuserService,
    public sysnavLinkService: SysnavlinkService,
    public syssessionService: SyssessionService) {
    super(providers, "SYSAPP");
  }
  //获取在线用户登录时间
  getSigninTime(): Observable<any> {
    return this.syssessionService.getSyssession();
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
    return this.sysnavLinkService.findWithQuery({});
  }
  /** YM
   *  初始化NavLink OBJ
   */
  getNavDefaultObj() {
    return this.providers.appService.initObjDefaultValue(
      this.sysnavLinkService.app
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
      this.sysnavLinkService.save(el).subscribe(res => {
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
    return this.sysnavLinkService.delete(link);
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
  listdataOption = {
    //皮肤默认为bootstrap风格
    fcClass: "ag-material",
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否显示工具栏
    fcShowToolPanel: true,
    //是否分页
    fcPagination: true,
    //是否显示分组
    fcRowGroupPanelShow: "onlyWhenGrouping",
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: "multiple",
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: false,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false
  };
}
