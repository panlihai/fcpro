/* 	人员信息 员工基本信息服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SysemployService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSEMPLOYEE");
  }
  
}
