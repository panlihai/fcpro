/* 	客户变更审批信息 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysmenuService } from 'fccore';
@Injectable()
export class SystarCustomAuditInfoService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "AR09TARCUSTOMAUDIT");
  }
}
