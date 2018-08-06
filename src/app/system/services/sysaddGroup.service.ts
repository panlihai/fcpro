/* 添加分组 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SysaddGroupService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSAPPFLDGROUP");
  }
}
