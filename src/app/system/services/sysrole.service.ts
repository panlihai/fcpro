/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysroleuserService } from './sysroleauth.service';
import { Observable } from 'rxjs';
import { SysroleauthService } from './sysroleuser.service';
import { TreeOptions } from 'fccomponent/fcbasic';
import { environment } from '../../../environments/environment';
@Injectable()
export class SysroleService extends ParentService {
  //菜单树配置
  menuTreeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSMENU",//元数据id
    //树结构节点显示内容
    fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 叶子节点字段名称
    fcLeafCode: 'HASCHILD',
    // 根节点条件
    fcTopWhere: "(PARENT is null or PARENT='') AND PID='"+environment.pid+"'",
    // 展开条件
    fcExpWhere: "PARENT=':{MENUID}'",
    // 排序字段
    fcOrderby: "",
    // 模式 false为单选，true为多选
    fcMode: true,
    // 展开子节点
    fcOpenChild: false,
    // 是否显示线条
    fcShowLine: true,
    //是否可拖拽
    fcAllowDrag: true
  };
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
