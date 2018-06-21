/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ProvidersService, ParentService } from 'fccore';
import { environment } from '../../../environments/environment';
import { TimelineOptions } from 'fccomponent';
@Injectable()
export class SysversionService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSVERSION");
    }
    //时间轴
    versionTimeline: TimelineOptions = {
        fcAppid: "",
        fcLabelCode: "label",
        fcTitleCode: "title",
        fcColorCode: "color",
        fcId: "ID"
    };
    /**
     *  获取版本
     */
    findAllVersion():Observable<any>{
        return this.findWithQueryAll({});
    }
    /**
     * 获取版本数据
     */
    getSysversion() {
        this.appService
            .findWithQuery("SYSVERSION", { PAGENUM: 1, PAGESIZE: 6, ODER: "TS DESC" })
            .subscribe(result => {
                if (result.CODE === "0") {
                    let version = (this.versionTimeline.fcValues = []);
                    result.DATA.forEach(item => {
                        let t = this.commonService.timestampFormat(
                            Number.parseInt(item.PUBLISHTIME) * 1000,
                            "MM-dd"
                        );
                        version.push({
                            label: t,
                            title: environment.projectName + "发布" + item.LASTVERSION + "版",
                            ID: item.ID,
                            color: "normal"
                        });
                    });
                }
            });
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