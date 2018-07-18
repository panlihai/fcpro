/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from '../../../../node_modules/rxjs';
@Injectable()
export class SysserviceService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSSERVICE");
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.providers.appService.initObjDefaultValue(this.app);
    }
}
