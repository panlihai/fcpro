/* 	债权单位审批 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SystarCustomService } from './systarcustom.service';
import { SystarCustomRegistService } from './systarcustomregist.service';
import { SystarCustomAuditInfoService } from './systarcustomauditinfo.service';
@Injectable()
export class SysCompanyAuditService extends ParentService {
  constructor(public providers: ProvidersService, 
    private ar09tarCustomService: SystarCustomService,
    private ar09tarCustomRegistService: SystarCustomRegistService,
    private ar09tarCustomAuditInfoService: SystarCustomAuditInfoService
  ) {
    // super(providers, "AR01VARCOMPANYBGSP");
    super(providers, "SYSAPP");
  }
  //#region 点击修改带过多个元数据
  /**
  * 获取客户基本信息
  * @param obj 
  */
  getTarcustom(id: string): Observable<any> {
    return this.ar09tarCustomService.initMainObj(id);
  }

  /**
   * 获取客户注册信息
   * @param obj 
   */
  getRegist(param: any): Observable<any> {
    return this.ar09tarCustomRegistService.findWithQuery(param);
  }

  /**
   * 获取客户变更审批信息
   * @param param obj
   */
  getAudit(param: any): Observable<any> {
    return this.ar09tarCustomAuditInfoService.findWithQuery(param);
  }

  /**
    * 获取客户变更审批信息
    * @param obj 
    */
  arGetAuditData(param: any): Observable<any> {
    return this.providers.daoService.postFromApi(this.getResourceUrl("arGetAuditData"), param);
  }

  //#endregion

  //#region 表单编辑框保存或修改
  /**
   * 保存或修改
   * @param 要修改或保存的多个元数据 
   */
  arFromSave(params: any): boolean {
    this.providers.daoService.postFromApi(this.getResourceUrl("arFromSave"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0") {
          //this.providers.msgService.success("处理成功！")
          return true;
        } else {
          //this.providers.msgService.message("处理失败");
        }
      } else {
        //this.providers.msgService.error("请求失败");
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
    return false;
  }
  //#endregion 

  //#region 列表数据变更审批通过
  /**
   * 列表数据变更审批通过
   * @param  
   */
  arReview(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arReview"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0")
          this.providers.msgService.success("处理成功！")
        else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.msgService.error("请求失败");
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion 

  //#region 列表数据撤销变更申请
  /**
   * 列表数据撤销变更神器
   * @param  
   */
  arUndoReview(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arUndoReview"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0")
          this.providers.msgService.success("处理成功！")
        else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.msgService.error("请求失败");
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion 

  //#region 列表数据退回变更
  /**
   * 列表数据退回变更
   * @param  
   */
  arReturn(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arReturn"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0")
          this.providers.msgService.success("处理成功！")
        else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.msgService.error("请求失败");
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion 

  //#region 编辑框列表数据操作
  /**
   * 删除
   * @param params tableName:表名，deleteID：唯一值-ID
   */
  arFromListDataDelete(params: any) {
    this.providers.daoService.postFromApi(this.getResourceUrl("arFromListDataDelete"), params).subscribe(result => {
      if (result.CODE === "0") {
        this.providers.logService.info("请求成功！");
        if (result.DATA !== null && result.DATA !== undefined && result.DATA[0] === "0")
          this.providers.msgService.success("处理成功！")
        else
          this.providers.msgService.message("处理失败");
      } else {
        this.providers.msgService.error("请求失败");
        this.providers.logService.error("请求失败！" + result.MSG);
      }
    })
  }
  //#endregion 

}

