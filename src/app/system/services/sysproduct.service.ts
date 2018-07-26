/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, ResponseResult } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysproductService extends ParentService {
  constructor(public providers: ProvidersService,
    public modalService: NzModalService) {
    super(providers, "SYSPRODUCT");
  }
  doAction(): Observable<any> {
    return this.providers.daoService.getFromApi(this.getResourceUrl('doAction'), { USERID: this.userInfo.USERCODE });
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
    if (!param.hasOwnProperty('TOKEN')) {
      param.TOKEN = this.userInfo.TOKEN;
    }
    if (!param.hasOwnProperty('LAT')) {
      param.LAT = 0;
    }
    if (!param.hasOwnProperty('LNG')) {
      param.LNG = 0;
    }
    if (!param.hasOwnProperty('TIMESTAMP')) {
      param.TIMESTAMP = this.commonService.getTimestamp();
    }
    return this.providers.daoService.getFromSystem("ajax/SYSTEM/SYSPRODUCT/SYSPRODUCT/listView", param);
  }
  /**
  *  按钮跳转路由方法封装 查看数据源  查看服务   返回列表 方法
  * @param event  
  */
  producticonmodal(content): Observable<any> {
    return this.modalService.open({
      title: '字体图标',
      content: content,
      width: "60%",
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
  /**
   * 
   * @param id 
   */
  deleteProduct(id: string) {
    this.messageService.confirm('是否确认删除本产品？', () => {

    }, () => { });
  }
}