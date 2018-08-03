/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysintfresparamService extends ParentService {
  constructor(public providers: ProvidersService,
    public modalService: NzModalService) {
    super(providers, "SYSINTFRESPARAM");
  }
  /**  YM
  * 根据参数类型值获取对应参数类型名称
  */
  getParamTypeNameByCode(appId, code) {
    return this.appService.getDicByFieldcode(appId, code)
  }
  /**YM
 * 初始化mainObj
 * @param app 
 */
  initObjDefaultValue(app) {
    return this.appService.initObjDefaultValue(app)
  }
  /**
    *  获取APPLINKS所有数据
    * @param event  
    */
  applinksall() {
    return this.providers.appService.findWithQuery('SYSINTFRESPARAM', {})
  }
  //保存appbuttons表
  childrensave(obj) {
    return this.providers.appService.saveObject('SYSINTFRESPARAM', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
  //修改子表数据
  childrenupdate(obj) {
    return this.providers.appService.updateObject('SYSINTFRESPARAM', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
}
export interface SYSINTFRESPARAM {

}