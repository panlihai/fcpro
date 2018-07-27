/* 	预算公式 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, Sysmenu } from 'fccore';
@Injectable()
export class BgformulaService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "");
    }

}