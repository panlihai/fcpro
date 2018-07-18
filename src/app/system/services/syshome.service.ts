/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService, ResponseResult, Sysmenu } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService, Args_NavLink } from "./sysnavlink.service";
import { SysannouncementService } from './sysannouncement.service';
import {  Fcmenu } from "fccomponent";
import { SysmessageService} from "./sysmessage.service";
import { SysassignmentService, Sysassignment} from "./sysassignment.service";
import { SysversionService } from "./sysversion.service";
@Injectable()
export class SyshomeService {
    constructor(
        public providers: ProvidersService,
        public layoutService: LayoutService,
        private navLinkService: SysnavlinkService,
        public sysannouncementService: SysannouncementService,
        public sysmessageService: SysmessageService,
        public sysassignmentService: SysassignmentService,
        public sysversionService: SysversionService
    ) { }
    /**
      * 获取当前消息公告的所有内容
      * */
    getannouncement() {
        return this.providers.appService
            .findWithQuery("SYSNOTIFY", {})
    }
    //回执消息返回的时间睉
    announcementtime() {
        this.providers.commonService.getTimestamp()
    }
    //获取发布人的user
    announcementPOSTUSER() {
        this.providers.userService.getUserInfo().USERCODE
    }
    //   提醒用户是否已读，读取后回执给发布者
    announcementsave(obj) {
        this.providers.appService.saveObject('SYSMESSAGE', obj).subscribe(res => {
            if (res.CODE === '0') {
                this.providers.msgService.success('回执成功');
            } else {
                this.providers.msgService.error('回执失败')
            }
        })
    }
    // 公告消息回执处理
    backannouncement(id,catagory,publishuser){
        if(publishuser!== this.announcementPOSTUSER()){
            let obj: any = {
              TS: this.announcementtime(),
              SORT: this.announcementtime(),
              POSTTIME: this.announcementtime(),
              CONTENT: "消息公告"+id+"进行回执",
              ISREAD: "N",
              ID: id,
              TYPE: "",
              NOTIFICATIONUSERID: publishuser,
              TITLE: "回执信息",
              POSTUSERID: this.announcementPOSTUSER()
            };
            if(catagory==="error"){
              obj.TYPE = "danger";
            }
            if(catagory==="processing"){
              obj.TYPE = "normal"
            }
            if(catagory==="warning"){
              obj.TYPE = "waring"
            }  
            this.announcementsave(obj)
          } 
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
    assignmentMessage(router: Router, msg: Sysassignment): Observable<any> {
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
   
    // sysannouncementrouter跳转到消息公告路由并生成tag标签
    sysannouncementrouter(router: Router, msg: any) {
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
    sysassignmentrouter(router: Router, msg: any) {
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
    assignmenthistory(router: Router, msg: Sysassignment): Observable<any> {
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
  /**
    * 获取当前用户
    * */
   getUserinfo(): any {
    return this.providers.userService.getUserInfo();
  }
  /**
   * 获取当前用户和指定联系人的所有聊天内容
   * */
  getChatcontent(userid,pagesize,pagenum) {
    return this.providers.appService
      .findWithQuery("SYSMESSAGE", {
        "WHERE": " (NOTIFICATIONUSERID = '" + userid + "' and POSTUSERID = '" +
          this.providers.userService.getUserInfo().USERCODE + "') OR (NOTIFICATIONUSERID='" +
          this.providers.userService.getUserInfo().USERCODE + "' and POSTUSERID='" + userid + "')",
          "ORDER":"TS desc",
          "PAGESIZE": pagesize,
          "PAGENUM": pagenum,
      })
  }
  //将发送的消息保存到数据库里面
  saveMessage_chat(obj){
    this.sysmessageService.save(obj).subscribe(res=>{
      debugger;
      if(res.CODE==='0'){
        this.providers.msgService.success("保存成功");
      }else if(res.CODE==='1'){
        this.providers.msgService.error("保存失败");
      }
    });
  }
}
