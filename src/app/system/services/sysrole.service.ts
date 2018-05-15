/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysroleuserService } from './sysroleauth.service';
import { Observable } from 'rxjs';
import { SysroleauthService } from './sysroleuser.service';
@Injectable()
export class SysroleService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysroleauthService: SysroleauthService) {
    super(providers, "SYSROLE");
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
}
