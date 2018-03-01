/* 	元数据 */
import { Injectable } from '@angular/core';
import { ProvidersService, SysmessageService } from 'fccore';
import { NavsideOptions, FcTaboptions } from 'fccomponent';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class LayoutService {
    //点击的所有tab页面。
    _tabs: FcTaboptions[];
    constructor(private providers: ProvidersService, private sysmessageService: SysmessageService) {
        this._tabs = [{ name: '首页', close: false, content: { MENUID: 'HOME', ROUTER: 'home', PID: 'SYSTEM' } }];
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
    navStoreMenu(router: Router, menu: any) {
        let existTabs = this._tabs.filter(element => element.name === menu.MENUNAME);
        if (existTabs.length === 0) {
            this._tabs.push({
                name: menu.MENUNAME,
                close: true,
                content: menu
            });
        }
        router.navigate(["/" + menu.PID.toLowerCase() + "/" + menu.ROUTER], { queryParams: menu });
    }
    /**
     * 关闭路由并删除路由表
     * @param router 路由
     * @param menu 关闭的路由菜单
     */
    navRemoveMenu(router: Router, menu: any) {
        let index = -1;
        let count = 0;
        this._tabs.forEach(tab => {
            count++;
            if (tab.name === menu.MENUNAME) {
                index = count;
            }
        });
        if (index !== -1) {
            this._tabs.splice(index, 1);
            this.navStoreMenu(router, this._tabs[index - 1].content);
        }
    }
}
