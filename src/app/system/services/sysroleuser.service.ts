/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SysroleauthService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSROLEAUTH");
  }
}

export interface Sysroleuser {
  ID?: string;//主键ID	-	-	字符型	40	是	1	是	否	否	否	否	文本框	-	-	-
  PID?: string; //产品ID	-	-	字符型	40	是	2	是	否	否	是	是	文本框	-	-	-
  ROLEID?: string; //角色ID	-	-	字符型	40	是	3	是	否	否	是	是	文本框	-	-	-
  USERID?:string;
  REMARK?: string;
}