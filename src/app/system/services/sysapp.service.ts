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
  fastLookUp(){
    let lookUpList: any[];
    lookUpList = [{
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpA',
      'BTNNAME': 'A'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpB',
      'BTNNAME': 'B'
    } , {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpC',
      'BTNNAME': 'C'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpD',
      'BTNNAME': 'D'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpE',
      'BTNNAME': 'E'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpF',
      'BTNNAME': 'F'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpG',
      'BTNNAME': 'G'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpH',
      'BTNNAME': 'H'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpI',
      'BTNNAME': 'I'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpJ',
      'BTNNAME': 'J'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpK',
      'BTNNAME': 'K'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpL',
      'BTNNAME': 'L'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpM',
      'BTNNAME': 'M'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpN',
      'BTNNAME': 'N'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpO',
      'BTNNAME': 'O'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpP',
      'BTNNAME': 'P'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpQ',
      'BTNNAME': 'Q'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpR',
      'BTNNAME': 'R'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpS',
      'BTNNAME': 'S'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpT',
      'BTNNAME': 'T'
    }, {
      'BTNTYPE': 'default',

      'ACTCODE': 'lookUpA',
      'BTNNAME': 'U'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpV',
      'BTNNAME': 'V'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpW',
      'BTNNAME': 'W'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpX',
      'BTNNAME': 'X'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpY',
      'BTNNAME': 'Y'
    }, {
      'BTNTYPE': 'default',
      'ACTCODE': 'lookUpZ',
      'BTNNAME': 'Z'
    }];
    return lookUpList;
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
