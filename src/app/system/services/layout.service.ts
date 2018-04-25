/* 	元数据 */
import { Injectable } from '@angular/core';
import { ProvidersService, SysmessageService, Sysmenu, FCCONFIG } from 'fccore';
import { NavsideOptions, FcTaboptions } from 'fccomponent';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Injectable()
export class LayoutService {
    //点击的所有tab页面。
    _tabs: FcTaboptions[];
    //选中索引
    _selectedIndex: number;
    //是否被选中
    _navmenuSelected: boolean;
    constructor(private providers: ProvidersService, private sysmessageService: SysmessageService) {
    }
    init() {
        this._tabs = [{
            id: '0', index: 0, enabled: true, name: '首页', close: false, content:
                { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: FCCONFIG.pid, MENUTYPE: 'INURL' }
        }];
        this._selectedIndex = 0;
    }
    /**
     * 获取默认的消息对象。
     */
    initNavSideOptions(): any {
        return {
            fcAppid: '',
            fcLabelCode1: '全部消息',
            fcLabelCode2: '未读消息',
            fcTitleCode: 'TITLE',
            fcSmarkCode: 'CONTENT',
            fcColorCode: 'TYPE',
            fcReadCode: 'ISREAD'
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
     * 跳转路由并存储路由
     * @param menu 
     */
    navStoreMenu(router: Router, menu: Sysmenu) {
        // 开启加载条
        this.providers.msgService.startAntLoading(); 
        //判断是否存在路由
        let existTabs = this._tabs.filter(element => element.id === menu.ID);
        if (existTabs.length === 0) {
            this._tabs.push({
                id: menu.ID,
                enabled: true,
                index: this._tabs.length,
                name: menu.MENUNAME,
                close: true,
                content: menu
            });
            this._selectedIndex = this._tabs.length - 1;
        } else {
            this._selectedIndex = existTabs[0].index;
        }
        this._tabs.forEach(item => {
            if (item.name === menu.MENUNAME) {
                this._navmenuSelected = true;
            }
        });
        router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
            queryParams: { ID: menu.ID, MENUID: menu.MENUID, ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID }
        }).then(() => {
            this.providers.msgService.endAntLoading();
        }).catch(() => {
            this.providers.msgService.endAntLoading();
        });;
    }
    /**
     * 跳转路由并存储路由
     * @param menu 
     */
    navMenu(router: Router, menu: Sysmenu) {
        // 开启加载条
        this.providers.msgService.startAntLoading();
        router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], {
            queryParams: { ID: menu.ID, MENUID: menu.MENUID, ROUTER: menu.ROUTER, PID: menu.PID, APPID: menu.APPID }
        }).then(() => {
            this.providers.msgService.endAntLoading();
        }).catch(() => {
            this.providers.msgService.endAntLoading();
        });
    }
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
        this._selectedIndex = this._selectedIndex - 1;
        this.navStoreMenu(router, this._tabs[this._selectedIndex].content);
    }
    /**
     * 关闭路由并删除路由表
     * @param router 路由
     * @param menu 关闭的路由菜单
     */
    navToByMenuId(router: Router, menuId: string) {
        this.navStoreMenu(router, this.findMenuByMenuId(this.providers.menuService.menus, menuId));
    }
    /**
     * 
     * @param menus 
     * @param menuId 
     */
    findMenuByMenuId(menus: any[], menuId: string): Sysmenu {
        let menu: Sysmenu;
        let i = 0;
        do {
            let item = menus[i];
            if (item.ROUTER && item.ROUTER === menuId) {
                menu = item;
                break;
            } else if (item.P_CHILDMENUS && item.P_CHILDMENUS.length !== 0) {
                menu = this.findMenuByMenuId(item.P_CHILDMENUS, menuId);
                if (menu) {
                    break;
                }
            }
            i++;
        } while (i < menus.length);
        return menu;
    }
}
