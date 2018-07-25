/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysviewelementService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService) {
        super(providers, "SYSVIEWELEMENT");
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
}
export interface Sysviewelement {

}