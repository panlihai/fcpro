/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SysiconService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSICON");
  }
   /**
   * 获取图标
   */
  getIcon() {
    return this.providers.appService.findWithQuery("SYSICON", {})
  }
}

export interface Sysbizcodefine {
  
}
