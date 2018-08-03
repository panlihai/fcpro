/* 	访问日志 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SysappfieldgroupService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSAPPFLDGROUP");
    }
}
