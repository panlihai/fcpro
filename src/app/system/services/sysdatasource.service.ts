/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
import { SysproductService } from './sysproduct.service';
@Injectable()
export class SysdatasourceService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysproductService: SysproductService,
    public modalService: NzModalService) {
    super(providers, "SYSDATASOURCE");
  }
  /**
  * 获取产品
  */
  getproduct() {
    return this.sysproductService.findWithQuery({});
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
  /**
   *  按钮跳转路由方法封装 查看数据源  查看服务   返回列表 方法
   * @param event  
   */
  producticonmodal(title, content): Observable<any> {
    return this.modalService.open({
      title: title,
      content: content,
      width: "60%",
      zIndex: 999,
      onOk() {
      },
      onCancel() { },
      footer: false,
      componentParams: {
        options: {
        }
      }
    })
  }
  dataall() {
    return this.sysproductService.findWithQuery({})
  }
  /**
    *  获取APPLINKS所有数据
    * @param event  
    */
  datasourcesall() {
    return this.providers.appService.findWithQuery('SYSDATASOURCE', {})
  }
}
