/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { Sysroleuser, SysroleuserService } from './sysroleuser.service';
import { TreeOptions } from 'fccomponent/fcbasic/fctree.component';
import { SysroleauthService } from './sysroleauth.service';
@Injectable()
export class SysroleService extends ParentService {
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
    fcTopWhere: "PARENT is null or PARENT=''",
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
  }
  // 当前用户的排除条件
  userCondition: string = "{}";
  constructor(public providers: ProvidersService,
    public sysroleauthService: SysroleauthService, public sysroleuserService: SysroleuserService) {
    super(providers, "SYSROLE");
  }
  /**
   * 保存或修改角色信息
   * @param obj 保存或修改的对象
   */
  saveOrUpdateRole(obj: any): Observable<any> {
    if (obj.ID === undefined) {
      obj.SENABLE = 'Y';
      obj.SORT = this.commonService.getTimestamp();
      obj.ROLEID = this.commonService.getTimestamp();
      obj.PID = this.moduleId;
      return this.save(obj)
    } else {
      return this.update(obj)
    }
  }

  /**
   * 得到所有的菜单内容并转化成树形结构
   */
  getAllMenu(): any[] {
    return this.menuToTree(this.providers.menuService.menus);
  }
  /**
   * 把菜单结构转成树形结构
   * @param _menus 菜单集合
   * @param authList 权限集合
   */
  private menuToTree(_menus: any): any[] {
    let nodes: any[] = [];
    if (_menus && _menus.length > 0) {
      _menus.forEach(menu => {
        if (menu.PID === this.moduleId) {
          let node: any = {
            id: menu.ID,// 唯一身份
            name: menu.MENUNAME,//默认显示申请，您可以设置displayField的options属性
            checked: false,// 指定是否选中复选框
            disableCheckbox: false,// 禁用复选框
            halfChecked: false,// 实现'全部检查'效果
            hasChildren: false,//对于异步数据加载，所以你需要设置getChildren的options属性
            DATA: menu
          };
          if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
            node.children = this.menuToTree(menu.P_CHILDMENUS);
            node.hasChildren = true;
          }
          nodes.push(node);
        }
      });
    }
    return nodes;
  }
  /**
   * 根据权限在菜单中显示是否选中，有权限则选中或半选中状态
   * @param nodes 菜单树所有节点
   * @param authList 权限集合
   */
  getAuthMenu(nodes: any[], authList: any[]) {
    if (authList && authList.length > 0) this.treeToAuthTree(nodes, authList);
  }
  /**
   * 根据权限在菜单中显示是否选中，有权限则选中或半选中状态，回调实现子节点的权限显示
   * @param nodes 所有节点
   * @param authList 权限集合
   */
  private treeToAuthTree(nodes: any[], authList?: any[]): void {
    if (nodes && nodes.length > 0) {
      nodes.forEach(node => {
        let menu = node.DATA;
        if (authList) {
          let auths = authList.filter(auth => auth.PID === menu.PID && auth.SOURCEID === menu.ID && auth.CONTENT === menu.MENUID);
          if (auths.length > 0) {
            node.checked = true;
          }
        }
        if (node.hasChildren) {
          this.treeToAuthTree(node.children, authList);
        }
      });
    }
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
    this.sysroleuserService.delete({ WHERE: "AND USERID='" + userId + "'" }).subscribe(result => {
      if (result.CODE === '0') {
        this.messageService.message('已删除');
      }
    })
  }
  /**
   * 保存当前选中的用户只角色用户表中
   * @param sysuserList 当前选中的用户
   */
  saveRoleUser(sysuserList: any[], role: Sysrole) {
    let roleUserList: Sysroleuser[] = [];
    sysuserList.forEach(user => {
      roleUserList.push({
        USERID: user.USERCODE,
        ROLEID: role.ROLEID,
        PID: role.PID
      });
    });
    this.sysroleuserService.saveList(roleUserList).subscribe(result => {
      if (result.CODE === '0') {

      } else {

      }
    });
  }
  /**
   * 授权，选中的节点及子节点或孙子节点的授权或取消授权
   * @param 选中的人员
   * @param 选中的角色
   */
  postAuthToRole(roleId: string, param: any, authList: any[]): any {
    let datas: any[] = this.getRoleauthByChildNode(roleId, param.node.data);
    // 增加权限
    if (param.checked) {
      datas = datas.concat(this.getRoleauthByParentNode(roleId, param.node, authList));
      return this.sysroleauthService.saveList(datas);
    } else {
      // 删除权限
      return this.sysroleauthService.delete(datas);
    }
  }
  /**
   * 获取当前节点的上级节点，递归实现上上级节点
   * @param roleId 角色id
   * @param node 当前节点
   */
  getRoleauthByParentNode(roleId: string, node: any, authList: any[]): any[] {
    let datas: any[] = [];
    if (node.parent && node.parent.data.DATA) {
      let data = {
        PID: this.moduleId,
        ROLEID: roleId,
        AUTHNAME: node.parent.data.DATA.MENUNAME,
        REMARK: node.parent.data.DATA.MENUNAME,
        SOURCEID: node.parent.data.id,
        SOURCEAID: 'SYSMENU',
        AUTHTYPE: 'MENU',
        CONTENT: node.parent.data.DATA.MENUID,
        WHERE: "AND SOURCEID='" + node.parent.data.id + "' AND CONTENT='" + node.parent.data.DATA.MENUID + "'"
      };
      let auths = authList.filter(auth => data.CONTENT === auth.CONTENT && data.PID === auth.PID && data.SOURCEID === auth.SOURCEID);
      if (auths.length === 0) {
        datas.push(data);
      }
      let ds = this.getRoleauthByParentNode(roleId, node.parent, authList);
      datas = datas.concat(ds);
    }
    return datas;
  }
  /**
   * 获取子节点的所有数据内容
   * @param roleId 角色id
   * @param data 数据内容
   */
  getRoleauthByChildNode(roleId: string, data: any): any[] {
    let datas: any[] = [];
    datas.push({
      PID: this.moduleId,
      ROLEID: roleId,
      AUTHNAME: data.name,
      REMARK: data.name,
      SOURCEID: data.id,
      SOURCEAID: 'SYSMENU',
      AUTHTYPE: 'MENU',
      CONTENT: data.DATA.MENUID,
      WHERE: "AND SOURCEID='" + data.id + "' AND CONTENT='" + data.DATA.MENUID + "'"
    });
    if (data.hasChildren) {
      data.children.forEach(d => {
        let ds = this.getRoleauthByChildNode(roleId, d);
        datas = datas.concat(ds);
      });
    }
    return datas;
  }
}

export interface Sysrole {
  ID: string;//字符型	40	否	0	是	否	否	否	否	文本框	-	-	-	-
  ROLEID: string;//	权限编码	-	-	字符型	40	否	1	是	否	是	是	是	文本框	-	-	-	-
  PID: string;//	产品Id	SYSPRODUCT	-	字符型	40	是	2	是	否	否	是	是	-	-	-	-	-
  ROLENAME: string;//	权限名称	-	-	字符型	80	否	3	是	否	否	是	是	文本框	-	-	-	-
  REMARK: string;//	备注
}
