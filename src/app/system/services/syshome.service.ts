/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService,Sysmenu } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService, NavLinkFunctionName, Args_NavLink } from "./sysnavlink.service";
import { SysannouncementService } from './sysannouncement.service';
import { SysmessageService, Sysmessage } from "./sysmessage.service";
import { SysassignmentService, Sysassignment} from "./sysassignment.service";
import { Fcmenu } from "fccomponent/fcnav/fcnavmenu.component";
import { SysversionService } from "./sysversion.service";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    private navLinkService: SysnavlinkService,
    public sysannouncementService: SysannouncementService,
    public sysmessageService:SysmessageService,
    public sysassignmentService:SysassignmentService,
    public sysversionService:SysversionService
  ) {}
   /**
     * 获取当前消息公告的所有内容
     * */
    getannouncement() {
        return this.providers.appService
        .findWithQuery("SYSNOTIFY", {})
    }
    //回执消息返回的时间睉
    announcementtime(){
        this.providers.commonService.getTimestamp()
    }
    //获取发布人的user
    announcementPOSTUSER(){
        this.providers.userService.getUserInfo().USERCODE
    }
    //   提醒用户是否已读，读取后回执给发布者
    announcementsave(obj){
            this.providers.appService.saveObject('SYSMESSAGE', obj).subscribe(res => {
            if (res.CODE === '0') {
                this.providers.msgService.success('回执成功');
            } else {
                this.providers.msgService.error('回执失败')
            }
        })
    }
    /**
     * 获取当前待办任务的所有内容
     * */
    getassignment() {
        return this.providers.appService
        .findWithQuery("SYSASSIGNMENT", {})
    }
    /**
     * 跳转至消息路由，当SOURCEAID，SOURCEID有匹配的路由时直接跳转，否则跳转至sysmessageDetail路由
     * @param router 路由参数
     * @param msg 消息体
     *  有 Observable<any>需要return
     */
        assignmentMessage(router: Router, msg: Sysassignment):Observable<any> {
        let sourceId = msg.SOURCEID ? msg.SOURCEID : '';
        let menu = this.findMenuByRouter(this.providers.menuService.menus, sourceId.toLowerCase() + 'Detail');
        if (menu) {
            menu['param'] = msg.SOURCEID;
            this.providers.commonService.event("selectedMenu", menu);
        } else {
            menu = {
                APPFILTER: '',
                PARENT: '',
                SORT: '',
                ENABLE: 'Y',
                MENUICON: 'fc-icon-information',
                PID: this.sysassignmentService.moduleId,
                HASCHILD: 'N',
                MENUTYPE: 'APP',
                ID: msg.ID,
                REMARK: '',
                MENUID: 'sysassignmentDetail',
                ROUTER: 'syassignmentDetail',
                WXMENU: '',
                APPID: msg.SOURCEID,
                MENUNAME: '待办任务',
                DESCRIPTION: ''
            };
            menu['param'] = msg.SOURCEID;
            console.log(menu);
            this.providers.commonService.event("selectedMenu", menu);
        }
        return this.sysmessageService.update(msg);
    }
    /**
     * 查找当前路由
     * @param menus 
     * @param menuId 
     */
        findMenuByRouter(menus: any[], router: string): Fcmenu {
        // 当menu不存在是  返回空
        if (menus.length == 0) {
            return null;
        }
        // Sysmenu对象赋值给menu
        let menu: Sysmenu;
        let i = 0;
        do {
            // menus[i]数组里面的[i]对象赋值给item
            let item = menus[i];
            // 有路由并且路由相等
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
    // sysannouncementrouter跳转到消息公告路由并生成tag标签
    sysannouncementrouter(router: Router, msg: any){
        let menu = this.layoutService.findMenuByRouter(this.providers.menuService.menus, 'sysannouncementDetail');
        if (menu) {
          menu["param"] = msg;
          this.providers.commonService.event("selectedMenu", menu);
        } else {
          this.providers.msgService.error(
            "sysannouncementDetail" + "不存在..."
          );
        }
    }
       // sysannouncementrouter跳转到消息公告路由并生成tag标签
       sysassignmentrouter(router: Router, msg: any){
        let menu = this.layoutService.findMenuByRouter(this.providers.menuService.menus, 'sysassignmentDetail');
        if (menu) {
          menu["param"] = msg;
          this.providers.commonService.event("selectedMenu", menu);
        } else {
          this.providers.msgService.error(
            "sysassignmentDetail" + "不存在..."
          );
        }
    }
    //历史待办功能模块
    assignmenthistory(router: Router, msg: Sysassignment):Observable<any> {
        let sourceId = msg.SOURCEID ? msg.SOURCEID : '';
        let menu = this.findMenuByRouter(this.providers.menuService.menus, sourceId.toLowerCase() + 'Detail');
        if (menu) {
            menu['param'] = msg.SOURCEID;
            this.providers.commonService.event("selectedMenu", menu);
        } else {
            menu = {
                APPFILTER: '',
                PARENT: '',
                SORT: '',
                ENABLE: 'Y',
                MENUICON: 'fc-icon-information',
                PID: this.sysassignmentService.moduleId,
                HASCHILD: 'N',
                MENUTYPE: 'APP',
                ID: msg.ID,
                REMARK: '',
                MENUID: 'sysassignmentDetail',
                ROUTER: 'syassignmentDetail',
                WXMENU: '',
                APPID: msg.SOURCEID,
                MENUNAME: '待办任务',
                DESCRIPTION: ''
            };
            menu['param'] = msg.SOURCEID;
            console.log(menu);
            this.providers.commonService.event("selectedMenu", menu);
        }
        return this.sysmessageService.update(msg);
    }
  /**
   * 获取版本信息
   */
  getSysversion() {
    this.sysversionService.getSysversion();
  }
  /**
   * YM
   * 快速导航/自定义链接功能
   * @param fucName 
   * @param args 
   */
  NavLinkFunction(fucName: NavLinkFunctionName, args?: Args_NavLink): any {
    switch (fucName) {
      case NavLinkFunctionName.deleteSubject:
        return this.navLinkService.deleteSubject;
      case NavLinkFunctionName.getNavLinks:
        return this.navLinkService.getNavLinks();
      case NavLinkFunctionName.rebuildList_NavLink:
        return this.navLinkService.rebuildList_NavLink(args.navlinks);
      case NavLinkFunctionName.refreshNavLink:
        return this.navLinkService.refreshNavLink(args.navlinks);
      case NavLinkFunctionName.addNavLinkTag:
        return this.navLinkService.addNavLinkTag(args.navlinks, args.contentTpl, args.footerTpl, args.listdata);
      case NavLinkFunctionName.handleAddNavLink_ok:
        return this.navLinkService.handleAddNavLink_ok(args.listdata, args.navlinks, args.condition)
      case NavLinkFunctionName.handleAddNavLink_cancel:
        return this.navLinkService.handleAddNavLink_cancel();
      case NavLinkFunctionName.navLinkBeforeClose:
        return this.navLinkService.navLinkBeforeClose(args.link);
    }
  }
  navToByMenuId(router: Router, url: any) {
    return this.layoutService.navToByMenuId(router, url)
  }
}
