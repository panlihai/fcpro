/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
import { SysproductService } from './sysproduct.service';
@Injectable()
export class SysappbuttonsService extends ParentService {
  constructor(public providers: ProvidersService,
    public modalService: NzModalService) {
    super(providers, "SYSAPPBUTTONS");
  }
  /**
  *  按钮跳转路由方法封装 查看数据源  查看服务   返回列表 方法
  * @param event  
  */
  producticonmodal(title, content): Observable<any> {
    return this.modalService.open({
      title: title,
      content: content,
      width: "50%",
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
  /**
  * 保存
  * @param event  
  */
  saveEvent(mainObj) {
    return this.update(mainObj);
  }
}
export interface Sysappbuttons {
  APPPID: string;
  BTNCODE: string;
  BTNNAME: string;
  ACTCODE: string;
  ENABLE: string;
  SORT: string;
  BTNICON: string;
  BTNTYPE: string;
  ALLOWTYPE: string;
}