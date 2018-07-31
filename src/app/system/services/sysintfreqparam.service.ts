/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysintfreqparamService extends ParentService {
  constructor(public providers: ProvidersService,
    public modalService: NzModalService) {
    super(providers, "SYSINTFREQPARAM");
  }
  /**
    *  获取APPLINKS所有数据
    * @param event  
    */ 
  applinksall(){
    return this.providers.appService.findWithQuery('SYSINTFREQPARAM',{})
  } 
}
export interface Sysintfreqparam {
 
}