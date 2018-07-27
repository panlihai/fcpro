/* 	项目属性 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, Sysmenu } from 'fccore';
@Injectable()
export class BgprojectattributeService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "");
    }

}