/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysroleuserService } from './sysroleauth.service';
import { Observable } from 'rxjs';
import { SysroleauthService, Sysroleuser } from './sysroleuser.service';
@Injectable()
export class SysroleService extends ParentService {
  // 当前用户的排除条件
  userCondition: string = "{}";
  constructor(public providers: ProvidersService,
    public sysroleauthService: SysroleauthService, public sysroleuserService: SysroleuserService) {
    super(providers, "SYSROLE");
  }
  /**
   * 根据角色id生成获取用户的条件
   * @param roleId 角色id
   */
  createUserConditionByRoleid(roleId: string) {
    let where = {
      WHERE: "AND USERCODE not in (select USERID from Sys_roleuser t where t.ROLEID='" + roleId + "')"
    }
    this.userCondition = JSON.stringify(where);
  }

  /**
   * 根据角色id获取用户的权限信息
   * @param roleId 角色id
   */
  getAuthByRoleid(roleId: string): Observable<any> {
    return this.sysroleauthService.findWithQueryAll({ ROLEID: roleId })
  }

  /**
  * 根据角色id获取用户信息
  * @param roleId 角色id
  */
  getUserByRoleid(roleId: string): Observable<any> {
    let where = "AND usercode in (select userid from sys_roleuser where roleid='" + roleId + "')";
    return this.appService.findWithQuery('SYSUSER', { WHERE: where });
  }

  /**
   * 删除当前角色下的用户
   * @param userId 用户id
   */
  deleteRoleUser(userId: string) {
    this.sysroleuserService.delete({ USERID: userId }).subscribe(result => {
      if (result.CODE === '0') {
        this.messageService.message('已删除');
      }
    })
  }
 /**
  * 保存当前选中的用户只角色用户表中
  * @param sysuserList 当前选中的用户
  */
  saveRoleUser(sysuserList: any[],role:Sysrole) {
    let roleUserList:Sysroleuser[] =[];
    sysuserList.forEach(user=>{
      roleUserList.push({
        USERID:user.USERCODE,
        ROLEID:role.ROLEID,
        PID:role.PID
      });
    });
    this.sysroleuserService.saveList(roleUserList).subscribe(result=>{
      if(result.CODE==='0'){
        
      }else{
        
      }
    });
  }


}

export interface Sysrole{
  ID:string;//字符型	40	否	0	是	否	否	否	否	文本框	-	-	-	-
	ROLEID:string;//	权限编码	-	-	字符型	40	否	1	是	否	是	是	是	文本框	-	-	-	-
	PID:string;//	产品Id	SYSPRODUCT	-	字符型	40	是	2	是	否	否	是	是	-	-	-	-	-
	ROLENAME:string;//	权限名称	-	-	字符型	80	否	3	是	否	否	是	是	文本框	-	-	-	-
		REMARK:string;//	备注
}
