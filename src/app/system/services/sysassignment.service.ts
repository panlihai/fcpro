/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, Sysmenu } from 'fccore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SysmessageService } from './sysmessage.service';
import { Router } from '@angular/router';
import { Fcmenu } from 'fccomponent/fcnav/fcnavmenu.component';
@Injectable()
export class SysassignmentService extends ParentService {
  sysassignmentService: any;
  constructor(public providers: ProvidersService, public sysmessageService:SysmessageService,) {
    super(providers, "SYSASSIGNMENT");
  }
     /** YM
     *  获取快速导航标签数据流
     */
    getNavLinks() {
        return this.findWithQuery({});
    }
    /**
     * 跳转至消息路由，当SOURCEAID，SOURCEID有匹配的路由时直接跳转，否则跳转至sysmessageDetail路由
     * @param router 路由参数
     * @param msg 消息体
     *  有 Observable<any>需要return
     */
    assignmentsearchMessage(router: Router, msg: Sysassignment):Observable<any> {
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
            PID: this.moduleId,
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
}
export interface Sysassignment {
  ID: string ;
  USERID: string;
  PID: string;
  TASKNAME: string;
  LEVELS: string;
  SOURCEID: string;
  SOURCEAID: string;
  CATAGORY: string;
  STATUS: string;
  ISLATER: string;
  RECEIVETIME: string;
  CREATETIME: string;
  PROCESSTIME: string;
  PROCESSUSERID: string;
  REMARK: string;
}