/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SystbvorgcurorgService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSTBVORGCURORG");
  }
}
