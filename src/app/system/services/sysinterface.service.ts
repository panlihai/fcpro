/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Subject } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
@Injectable()
export class SysinterfaceService extends ParentService {
    dialogArgsSubject = new Subject();
    constructor(public providers: ProvidersService,
        private nzModal: NzModalService,
        private sysbizcoderuleService: SysbizcoderuleService,
        private sysproductService: SysproductService,
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
   *新增弹窗事件
   *@param title 
   *@param content
   */
    addWindow(title, content) {
        return this.modal.open({
            title: title,
            content: content,
            width: '60%',
            onOk() { },
            onCancel() { },
            footer: false,
            componentParams: {
            }
        })
    }
}
export interface Sysinterface {

}