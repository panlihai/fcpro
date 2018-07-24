/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
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
    return this.providers.daoService.getFromSystem("ajax/SYSTEM/SYSTEMPRODUCT/SYSPRODUCT/listView", param);
  }
  /**
   * 字母快速查询
   */
  fastLookUp() {
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
}