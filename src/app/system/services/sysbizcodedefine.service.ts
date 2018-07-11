/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SysbizcodedefineService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSBIZCODEDEFINE");
  }
   // 字表数据修改保存
   rulemodalObjsave(obj) {
    return this.providers.appService.saveObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
}
