import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore/index';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SyscompanydialogService extends ParentService {
  constructor(public providers: ProvidersService) {
    // super(providers, 'AR01VARCOMPANYXXGL');
    super(providers, 'SYSAPP');
  }

  /**
   * 编辑页列表数据保存或修改
   * @param params Obj
   */
  arFromListDataSave(params: any): Observable<any> {
    return this.providers.daoService.postFromApi(this.getResourceUrl("arFromListDataSave"), params);
  }
}
