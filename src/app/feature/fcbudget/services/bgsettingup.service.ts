/* 	编制设置 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, Sysmenu } from 'fccore';
@Injectable()
export class BgsettingupService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "");
    }

}