/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysdicService } from './sysdic.service';
@Injectable()
export class SysappService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysappFielsService:SysappfieldsService,public sysdicService:SysdicService) {
    super(providers, "SYSAPP");
  }
  findDic():Observable<any>{
    
    return this.sysdicService.findWithQuery({ID:''});

  }
  modifyAppFieldsName() {
    let ob = this.providers.daoService.getFromApi(this.getResourceUrl("modifyFieldsName"), {});
    ob.subscribe(result => {
      if (result.CODE === '0') {
        this.providers.logService.debug(result);
      } else {
        this.providers.logService.error(result.MSG);
      }
    });
  }
}
