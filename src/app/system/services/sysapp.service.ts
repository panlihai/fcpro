/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysproductService } from './sysproduct.service';
import { SysdatasourceService } from './sysdatasource.service';
@Injectable()
export class SysappService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysappFielsService: SysappfieldsService,
    public sysproductService: SysproductService,
    public sysdatasourceService:SysdatasourceService) {
    super(providers, "SYSAPP");
    this.listOptions.fcAutoSave = true;
    this.listOptions.fcEnableEdit = true;
    this.listOptions.fcShowToolPanel = false;
    this.listOptions.fcPagination = false;
  }
  modifyAppFieldsName() {
    let ob = this.providers.daoService.getFromApi(this.getResourceUrl("modifyFieldsName"), {});
    ob.subscribe(result => {
      if (result.CODE === '0') {
        this.logService.debug(result);
      } else {
        this.logService.error(result.MSG);
      }
    });
  }
    /**
   * 字母快速查询
   */
  fastSearch() {
    let str =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let list = [];
    str.forEach(item=>{
      list.push({'BUSTYPE': 'fastsearch',
      'ACTCODE': item,
      'BTNNAME': item});
    });
    return list;
  }
  /**
   * 获取产品
   */
  getproduct(){
    return this.sysproductService.findWithQuery({});
  }
  /**
   * 获取数据源
   */
  getdatasource(){
    return this.sysdatasourceService.findWithQuery({});
  }
  getappAttribute(){
    return this.providers.appService.findWithQuery('SYSAPPFIELDS',{APPID:'SYSAPP'})
  }
}
