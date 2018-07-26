/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SysdatasourceService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSDATASOURCE");
  }
  /**
   * @param {page:1,size:20,...}
   * @description 查詢
   */
  findWithQuery(param: any): Observable<any> {
    if (!param.hasOwnProperty('P_COUNT')) {
      param.P_COUNT = 1;
    }
    if (!param.hasOwnProperty('MAINAPP')) {
      param.MAINAPP = '';
    }
    if (!param.hasOwnProperty('MAINAPPID')) {
      param.MAINAPPID = '';
    }
    if (!param.hasOwnProperty('P_LISTFILTER')) {
      param.P_LISTFILTER = '';
    }
    return this.providers.daoService.getFromSystem("ajax/SYSTEM/SYSDATASOURCE/SYSDATASOURCE/listView", param);
  }
}
