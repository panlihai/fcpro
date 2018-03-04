/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { FclistdataComponent } from 'fccomponent';
@Injectable()
export class SysapptestService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSAPPTEST");
  }
  /**
   * 从数据库的字段注释中更新元数据字段的中文名称
   **/
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
  /**
   *
   * */
  doRefresh(listdata:FclistdataComponent){
    listdata.fcCondition="";
    listdata.fcReflesh();
  }
}
