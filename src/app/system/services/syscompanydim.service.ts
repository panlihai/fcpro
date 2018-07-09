/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SyscompanydimService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPANYDIM");
  }
   /**
     * 获取当前编码规则的所有内容
     * */
  getassignment() {
      return this.providers.appService.findWithQuery("SYSCOMPANYDIM", {})
  }
    // 字表数据修改保存
    childrensave(obj) {
      return this.providers.appService.updateObject('SYSCOMPANYDIM', obj).subscribe(res => {
        if (res.CODE = '0') {
          this.providers.msgService.success('保存成功');
        } else if (res.CODE = '1') {
          this.providers.msgService.error('保存失败')
        }
      })
    }
}
// export interface Sysnotify {
// }
