/* 	元数据 */
import { Injectable } from '@angular/core';
import { ProvidersService, SysmessageService, Sysmenu, FCCONFIG, Sysmessage } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { FcTaboptions } from 'fccomponent/fcnav/fcnavtab.component';
import { FcRouteReuseStrategy } from './routereusestrategy.service';
import { Fcmenu } from 'fccomponent/fcnav/fcnavmenu.component';
import { SysuserService } from './sysuser.service';
@Injectable()
export class LayoutService {
    //选中索引
    _selectedIndex: string;
    //是否被选中
    _navmenuSelected: boolean;
    constructor(public providers: ProvidersService,
        private sysmessageService: SysmessageService,
        public sysuserService: SysuserService) { }
    /**
     * 获取默认的消息对象。
     */
    initNavSideOptions(): any {
        return {
            fcAppid: '',
            fcLabelCode1: '未读消息',
            fcLabelCode2: '全部消息',
            fcTitleCode: 'TITLE',
            fcSmarkCode: 'CONTENT',
            fcColorCode: 'TYPE',//消息等级分为一般(normal)、紧急(waring)、危险(danger)
            fcReadCode: 'ISREAD',
            fcTimeCode: 'TS'
        };
    }
    /**
     * 获取后端已读未读消息
     * */
    getMessage(): Observable<any> {
        let user = this.providers.userService.getUserInfo();
        return this.providers.commonService.createObservableJoin([
            this.sysmessageService.findWithQuery({ NOTIFICATIONUSERID: user.USERCODE, PAGESIZE: 1000, ORDER: "TS desc" }),
            this.sysmessageService.findWithQuery({ NOTIFICATIONUSERID: user.USERCODE, PAGESIZE: 1000, ISREAD: 'N', ORDER: "TS desc" })
        ]);
    }

    /**
     * 跳转路由
     * @param menu 
     */
    navMenu(router: Router, menu: any, refresh?: string) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            this.providers.msgService.startAntLoading();
            let params = {
                queryParams: {
                    refresh: refresh, ID: menu.ID, MENUID: menu.MENUID, MENUNAME: menu.MENUNAME, MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID, PARAM: menu.param
                }
            };
            this.providers.logService.info(params);
            router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER],params ).then(() => {
                this.providers.msgService.endAntLoading();
            }).catch((error) => {
                console.log(error);
                this.providers.msgService.endAntLoading();
                router.navigate(['/system/error']);
            });
        } else if (menu.MENUTYPE === 'INURL') {
            // 开启加载条
            this.providers.msgService.startAntLoading();
            router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
                queryParams: {
                    refresh: refresh, ID: menu.ID, MENUID: menu.MENUID, MENUNAME: menu.MENUNAME, MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID, PARAM: menu.param
                }
            }).then(() => {
                this.providers.msgService.endAntLoading();
            }).catch((error) => {
                console.log(error);
                this.providers.msgService.endAntLoading();
            });
        } else {
            window.open(menu.MENUURL);
        }
    }
    /**
     * 跳转至消息路由，当SOURCEAID，SOURCEID有匹配的路由时直接跳转，否则跳转至sysmessageDetail路由
     * @param router 路由参数
     * @param msg 消息体
     *  
     */
    navMessage(router: Router, msg: Sysmessage):Observable<any> {
        msg.ISREAD='Y';
        let sourceAid = msg.SOURCEAID ? msg.SOURCEAID : '';
        let menu = this.findMenuByRouter(this.providers.menuService.menus, sourceAid.toLowerCase() + 'Detail');
        if (menu) {
            menu['param'] = msg.ID;
            this.providers.commonService.event("selectedMenu", menu);
        } else {
            menu = {
                APPFILTER: '',
                PARENT: '',
                SORT: '',
                ENABLE: 'Y',
                MENUICON: 'fc-icon-information',
                PID: this.sysmessageService.moduleId,
                HASCHILD: 'N',
                MENUTYPE: 'APP',
                ID: msg.ID,
                REMARK: '',
                MENUID: 'sysmessageDetail',
                ROUTER: 'sysmessageDetail',
                WXMENU: '',
                APPID: msg.SOURCEAID,
                MENUNAME: '消息详情',
                DESCRIPTION: ''
            };
            menu['param'] = msg.ID;
            console.log(menu);
            this.providers.commonService.event("selectedMenu", menu);
        }
        return this.sysmessageService.update(msg);
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
    * 
    * @param menus 
    * @param menuId 
    */
    setSelectMenu(menus: any[], router: string): Fcmenu {
        let menu: Fcmenu;
        let i = 0;
        do {
            let item = menus[i];
            item.open = false;
            item.select = false;
            if (item.ROUTER && item.ROUTER === router) {
                item.select = false;
                menu = item;
                break;
            } else if (item.P_CHILDMENUS && item.P_CHILDMENUS.length !== 0) {
                menu = this.findMenuByRouter(item.P_CHILDMENUS, router);
                if (menu) {
                    item.open = true;
                    menu.select = true;
                    break;
                }
            }
            i++;
        } while (i < menus.length);
        return menu;
    }
}
