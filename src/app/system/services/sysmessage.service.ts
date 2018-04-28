/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
@Injectable()
export class SysmessageService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSMESSAGE");
  }
  findAllMessage():Observable<any>{
    return this.findWithQuery({});
  }
}
