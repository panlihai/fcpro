/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
@Injectable()
export class SysroleauthService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSROLEAUTH");
  } 
}

export interface Sysroleauth {
  ID?: string;//主键ID	-	-	字符型	40	是	1	是	否	否	否	否	文本框	-	-	-
  PID?: string; //产品ID	-	-	字符型	40	是	2	是	否	否	是	是	文本框	-	-	-
  ROLEID?: string; //角色ID	-	-	字符型	40	是	3	是	否	否	是	是	文本框	-	-	-
  AUTHNAME?: string; //权限名称	-	-	字符型	100	否	4	是	否	否	是	是	文本框	-	-	-
  AUTHTYPE?: string; //权限类型	-	-	字符型	10	否	5	是	否	否	是	是	文本框	-	-	-
  SOURCEID?: string; //资源ID	-	-	字符型	40	否	6	是	否	否	是	是	文本框	-	-	-
  SOURCEAID?: string; //资源元数据ID	-	-	字符型	40	否	7	是	否	否	是	是	文本框	-	-	-
  CONTENT?: string; //角色权限内容	-	-	字符型	4000	否	8	是	否	否	是	是	文本框	-	-	-
  REMARK?: string;
}