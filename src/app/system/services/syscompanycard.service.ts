/* 	债权单位维护 */
import { SystarCustomRegistService } from './systarcustomregist.service';
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SystarCustomService } from './systarcustom.service';
@Injectable()
export class SysCompanyCardService extends ParentService {
  constructor(public providers: ProvidersService,
    private ar09tarCustomRegistService: SystarCustomRegistService,
    private ar09tarCustomService: SystarCustomService) {
    // super(providers, "AR01VARCOMPANYXXGL");
    super(providers, "SYSAPP");
  }

  //#region 点击修改带过多个元数据
  /**
   * 获取客户基本信息
   * @param obj 
   */
  //getTarcustom(id: string): Observable<any> {
  getTarcustom(param: any): Observable<any> {
    return this.ar09tarCustomService.findWithQuery(param);
    //return this.ar09tarCustomService.initMainObj(id);
  }
  /**
   * 获取客户注册信息
   * @param obj 
   */
  getRegist(param: any): Observable<any> {
    return this.ar09tarCustomRegistService.findWithQuery(param);
  }
  /**
  * 获取客户变更信息
  * @param obj 
  */
  arGetAuditData(param: any): Observable<any> {
    return this.providers.daoService.postFromApi(this.getResourceUrl("arGetAuditData"), param);
  }

  //#endregion

  //#region 表单操作
  /**
  * 提交变更
  * @param params Obj
  */
  arSubmit(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arSubmit"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0") {
          this.providers.msgService.success("处理成功！")
        } else {
          this.providers.msgService.message("处理失败");
        }
      } else {
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  /**
   * 撤销变更
   * @param params Obj
   */
  arUndoSubmit(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arUndoSubmit"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0")
          this.providers.msgService.success("处理成功！")
        else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion

  //#region 表单编辑框保存或修改
  /**
   * 保存或修改
   * @param 要修改或保存的多个元数据 
   */
  arFromSave(params: any): Observable<any> {
    return this.providers.daoService.postFromApi(this.getResourceUrl("arFromSave"), params);
  }
  //#endregion 

  //#region 编辑框列表数据操作
  /**
   * 删除
   * @param params tableName:表名，deleteID：唯一值-ID
   */
  arFromListDataDelete(params: any) {
    return this.providers.daoService.postFromApi(this.getResourceUrl("arFromListDataDelete"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0") {
          this.providers.msgService.success("处理成功！")
        } else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion 

}

