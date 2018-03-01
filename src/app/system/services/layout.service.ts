/* 	元数据 */
import { Injectable } from '@angular/core';
import { ProvidersService, SysmessageService } from 'fccore';
import { NavsideOptions } from 'fccomponent';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class LayoutService {
    constructor(private providers: ProvidersService, private sysmessageService: SysmessageService) { }
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
     * 
     * @param menu 
     */
    navStoreMenu(router:Router,menu:any){
        router.navigate(["/"+menu.PID.toLowerCase()+"/"+menu.ROUTER],{queryParams:menu});
    }
}
