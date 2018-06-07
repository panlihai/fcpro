/* 	元数据 */
import { Injectable } from '@angular/core';
import { ProvidersService, SysmessageService, Sysmenu, FCCONFIG, Sysmessage } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { FcTaboptions } from 'fccomponent/fcnav/fcnavtab.component';
import { FcRouteReuseStrategy } from './routereusestrategy.service';
@Injectable()
export class LayoutService {
    //点击的所有tab页面。
    _tabs: FcTaboptions[];
    //选中索引
    _selectedIndex: string;
    //是否被选中
    _navmenuSelected: boolean;
    constructor(public providers: ProvidersService, private sysmessageService: SysmessageService) {

    }
    init() {
        this._tabs = [{
            id: '0', index: 0, enabled: true, name: '首页', close: false, icon: 'fc-icon-home', content:
                { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: FCCONFIG.pid, MENUTYPE: 'INURL' }
        }];
        this._selectedIndex = "0";
    }
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
     * 
     * @param router 
     * @param menu 
     */
    navStoreMenu(router: Router, menu: Sysmenu) {
        // 开启加载条
        this.providers.msgService.startAntLoading();
        this.storeMenu(router, menu);
        router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
            queryParams: { ID: menu.ID, MENUID: menu.MENUID, ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID }
        }).then(() => {
            this.providers.msgService.endAntLoading();
        }).catch((error) => {
            console.error(error);
            // this.providers.cacheService.setS('error',error);
            this.providers.msgService.endAntLoading();
            router.navigate(['/system/error']);
        });;
    }
    /**
     * 存储菜单并跳转
     * @param router 
     * @param menu 
     * @param param 
     */
    storeMenu(router: Router, menu: any, param = {}) {
        if (menu.MENUTYPE === 'OUTURL') {
            return;
        }
        if (param) {
            menu.PARAM = param;
        }
        //判断是否存在路由
        let existTabs = this._tabs.filter(element => element.id === menu.ID);
        if (existTabs.length === 0) {
            this._tabs.push({
                id: menu.ID,
                enabled: true,
                index: this._tabs.length,
                name: menu.MENUNAME,
                close: true,
                icon: menu.MENUICON,
                content: menu
            });
            this._selectedIndex = this._tabs.length - 1 + "";
        } else {
            this._selectedIndex = existTabs[0].index + "";
        }
        this._tabs.forEach(item => {
            if (item.name === menu.MENUNAME) {
                this._navmenuSelected = true;
            }
        });
    }

    /**
     * 跳转路由
     * @param menu 
     */
    navMenu(router: Router, menu: any, refresh?: string) {
        if (refresh === undefined) {
            refresh = 'N';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            this.providers.msgService.startAntLoading();
            router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
                queryParams: { refresh: refresh, ID: menu.ID, MENUID: menu.MENUID, ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID, PARAM: menu.param }
            }).then(() => {
                this.providers.msgService.endAntLoading();
            }).catch((error) => {
                console.log(error);
                // this.providers.cacheService.setS('error',error);
                this.providers.msgService.endAntLoading();
                router.navigate(['/system/error']);
            });
        } else if (menu.MENUTYPE === 'INURL') {
            // 开启加载条
            this.providers.msgService.startAntLoading();
            router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
                queryParams: { refresh: refresh, ID: menu.ID, MENUID: menu.MENUID, ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID, PARAM: menu.param }
            }).then(() => {
                this.providers.msgService.endAntLoading();
            }).catch((error) => {
                console.log(error);
                this.providers.msgService.endAntLoading();
                // this.providers.cacheService.setS('error',error);
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
    navMessage(router: Router, msg: Sysmessage) {
        let sourceAid = msg.SOURCEAID ? msg.SOURCEAID : '';
        let menu = this.findMenuByRouter(this.providers.menuService.menus, sourceAid.toLowerCase() + 'Detail');
        if (menu) {
            menu['param'] = msg.ID;
            this.storeMenu(router, menu);
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
                ID: 'sysmessageDetail',
                REMARK: '',
                MENUID: 'sysmessageDetail',
                ROUTER: 'sysmessageDetail',
                WXMENU: '',
                APPID: msg.SOURCEAID,
                MENUNAME: '消息详情',
                DESCRIPTION: ''
            };
            menu['param'] = msg.ID;
            this.storeMenu(router, menu, { ID: msg.ID });
            this.providers.commonService.event("selectedMenu", menu);

        }
    }
    /**
     * 存储路由
     * @param menu 
     */
    /**
     * 关闭路由并删除路由表
     * @param router 路由
     * @param menu 关闭的路由菜单
     */
    navRemoveMenu(router: Router, menu: Sysmenu) {
        let tempIndex = 0;
        this._tabs.forEach(item => {
            item.index = tempIndex++;
        });
        this._selectedIndex = Number(this._selectedIndex) - 1 + "";
        this.providers.cacheService.setS('removeRouter',menu);
        this.storeMenu(router, this._tabs[this._selectedIndex].content);
        
    }
    /**
     * 关闭路由并删除路由表
     * @param router 路由
     * @param menu 关闭的路由菜单
     */
    navToByMenuId(router: Router, menuId: string) {
        let menu = this.findMenuByRouter(this.providers.menuService.menus, menuId);
        if (menu) {
            this.storeMenu(router, menu);
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
    findMenuByRouter(menus: any[], router: string): Sysmenu {
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
