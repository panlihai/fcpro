/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Subject } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { SysserviceService } from './sysservice.service';
import { SysintfreqparamService } from './sysintfreqparam.service';
import { SysintfresparamService } from './sysintfresparam.service';
import { SysappService } from './sysapp.service';
@Injectable()
export class SysinterfaceService extends ParentService {
    dialogArgsSubject = new Subject();
    constructor(public providers: ProvidersService,
        private nzModal: NzModalService,
        private sysbizcoderuleService: SysbizcoderuleService,
        private sysproductService: SysproductService,
        private sysserviceService: SysserviceService,
        private sysappService: SysappService,
        private sysintfreqparamService: SysintfreqparamService,
        private sysintfresparamService: SysintfresparamService,
        private modal: NzModalService, ) {
        super(providers, "SYSINTERFACE");
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.providers.appService.initObjDefaultValue(this.app);
    }
    getBizCodeByAid(resId: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(this.moduleId, resId);
    }
    getAllProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /** 
    *  获取参数配置数据
    */
    getParameters() {
        return this.findWithQuery('SYSINTERFACEPARAM')
    }
    /** 
    *  通过ID获取服务数据
    * @param id
    */
    getServiceById(id) {
        return this.sysserviceService.findWithQuery({ ID: id });
    }
    /** 
    *  通过ID获取元数据接口数据
    * @param id
    */
    getAppById(id) {
        return this.sysappService.findWithQuery({ ID: id });
    }
    /** 
   *  通过ID获取编辑页面元数据接口数据
   * @param id
   */
    getById(id) {
        return this.findWithQuery({ ID: id });
    }
    /** 
    * 获取参数配置数据
    * @param implid
    * @param pid
    */
    getInterfaceReqParams(implid, pid) {
        return this.sysintfreqparamService.findWithQuery({ IMPLID: implid, PID: pid })
    }
    /** 
    * 获取返回值数据
    * @param implid
    * @param pid
    */
    getInterfaceResParams(implid, pid) {
        return this.sysintfresparamService.findWithQuery({ IMPLID: implid, PID: pid })
    }
    /** YM
    * 获取路由导航
    * @param exp List：列表；Edit:编辑:Detail：详情
    */
    getRouteUrl(moduleId: string, appId: string, exp: string) {
        return `/${moduleId.toLocaleLowerCase()}/${appId.toLocaleLowerCase()}${exp}`;
    };
    deleteInterfaceReqParams() {

    }

    /** 
   *新增弹窗事件
   *@param title 
   *@param content
   */
    openWindow(title, content, param?) {
        return this.modal.open({
            title: title,
            content: content,
            width: '60%',
            onOk() { },
            onCancel() { },
            footer: false,
            componentParams: {
                param
            }
        })
    }
}
export interface Sysinterface {

}