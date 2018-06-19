/* 	客户注册信息 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysmenuService } from 'fccore';
@Injectable()
export class SystarCustomRegistService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "AR09TARCUSTOMREGIST");
  }
}
