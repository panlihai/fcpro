/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ProvidersService, ParentService } from 'fccore';
@Injectable()
export class SysversionService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSVERSION");
    }
    findAllVersion(): Observable<any> {
        return this.findWithQuery({});
    }
    //获取默认的消息对象
    initTimelineOption(): any {
        return {
            fcAppid: '',
            fcLabelCode: 'TS',
            fcTitleCode: 'VERSION',
            fcSmarkCode: 'DESCRIPTION',
            fcId: 'ID',
            fcColorCode: 'color'
        }
    }
}
export interface Sysversion {
    ID: string;//ID
    VERSION: string;//版本
    LASTVERSION: string;//上次发布版本	
    DESCRIPTION: string;//描述
    PUBLISHTIME: number;//发布时间 
    PID: string;//产品id
    TS: string;	//时间戳 
}