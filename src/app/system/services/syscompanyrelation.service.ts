/* 	单位隶属关系服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SyscompanyrelationService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPANYRELATION");
  }
}

export interface Syscompanyrelation {
  ID: string;//	主键	
  SBEGIN_DATE: string;//生效日期	
  SEND_DATE: string;//失效日期
  SDIM_CODE: string;	//维度代码
  SORG_CODE: string;//	组织机构代码
  SPARENT_CODE: string;//	上级组织机构代码
  NDISPLAYNO: number;//	显示序号	
  SPARENT_PATH: string;//	上级组织机构路径
  SCRATOR: string;//	创建人
  SCREATE_TIME: string;//	创建时间
  SMODIFIER: string;//	修改人	
  SMODIFY_TIME: string;//	修改时间
}
