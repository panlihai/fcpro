/* 	单位维度服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SyscompanydimService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPANYDIM");
  }
}
