/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysintfreqparamService extends ParentService {
  constructor(public providers: ProvidersService,
    public modalService: NzModalService) {
    super(providers, "SYSINTFREQPARAM");
  }
  /**
    *  获取APPLINKS所有数据
    * @param event  
    */ 
  applinksall(){
    return this.providers.appService.findWithQuery('SYSINTFREQPARAM',{})
  } 
   //保存appbuttons表
	childrensave(obj) {
    return this.providers.appService.saveObject('SYSINTFREQPARAM', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
   	//修改子表数据
	childrenupdate(obj) {
    return this.providers.appService.updateObject('SYSINTFREQPARAM', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
}
export interface Sysintfreqparam {
 
}