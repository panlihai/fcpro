/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SysproductService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSPRODUCT");
  }
  doAction():Observable<any>{
    return this.providers.daoService.getFromApi(this.getResourceUrl('doAction'),{USERID:this.userInfo.USERCODE});
  }
}
