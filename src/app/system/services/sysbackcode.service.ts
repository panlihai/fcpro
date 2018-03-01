/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SysbackcodeService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSBACKCODE");
  }
}
