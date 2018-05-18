import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysroleService } from '../../services/sysrole.service';
import { Sysroleuser } from '../../services/sysroleuser.service';
import { Sysroleauth } from '../../services/sysroleauth.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'sysrole',
  templateUrl: 'sysrole.component.html',
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  .path{

  }
  .path-every {
    position:relative;
    margin-right:10px;
  }
  .path-every:after {
    content:'/';
    position:absolute;
    right: -10px;
    top: -3px;
  }
  .path .path-every:last-child:after {
    content:'';
  }
  .path-every-active {
    color:#108ee9;
  }
  .left{
    height:100%;
    border-right:1px solid #8C8C8C;
    position:relative;
  }
  .role-add{
    position:absolute;
    right:10px;
    bottom:20px;
  }
  :host ::ng-deep .role-tab .ant-tabs-nav-wrap {
    text-align: center;
  }
  :host ::ng-deep .role-tab .ant-tabs-bar {
    border-bottom: 1px solid #8C8C8C;
  }
  :host ::ng-deep .fc-layoutcol{
    height:100%;
  }
  :host ::ng-deep .fc-content1{
    height:100%;
  }
  .adduser-window{
    margin: auto;  
    position: absolute;  
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; 
    width: 500px;
    height: 150px;
    background-color: white;
    border-radius: 8px;
    padding:25px;
    box-shadow: 0 0 15px;
  }
  .adduser-button{
    text-align:right;
    margin-top:15px;
  }
  `]
})
export class SysroleComponent extends ParentlistComponent {
  selectedObject: any;
  // 选中的角色权限
  roleauthList: Sysroleauth[];
  // 选中的角色用户
  roleuserList: Sysroleuser[];
  //列表条件
  listCondition: string;
  //用户权限
  roleTab: any[];
  constructor(public mainService: SysroleService, public router: Router, public activedRouter: ActivatedRoute) {
    super(mainService, router, activedRouter);
  }
  /**
   * 初始化当前组件需要的数据
   * 初始状态默认选中第一个角色
   */
  init(): void {
    // 默认取到当前产品的所有角色
    this.listCondition = '{"PID":"' + this.mainService.moduleId + '","ENABLE":"Y"}';
    this.roleTab = [
      { name: '该角色的用户', disabled: false },
      { name: '该角色的权限', disabled: false },
    ];
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {

  }

  /**
   * 获取选中的角色信息
   * @param event 列表fclist事件句柄
   */
  listEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'select':
        this.selectedObject = event.param;
        this.mainService.createUserConditionByRoleid(this.selectedObject.ROLEID);
        this.getRoleAuth();
        this.getRoleUser();
        break;
    }
  }

  /**
   * @description 当前选中的角色获取此角色的所有权限
   */
  getRoleAuth() {
    let roleId = this.selectedObject.ROLEID;
    this.mainService.getAuthByRoleid(roleId).subscribe(result => {
      if (result.CODE === '0') {
        this.roleauthList = result.DATA as Sysroleauth[];
      }
      console.log(this.roleauthList);
    })
  }
  /**
   * @description 当前选中的角色获取此角色的所有用户
   * 
   */
  getRoleUser() {
    let roleId = this.selectedObject.ROLEID;
    this.mainService.getUserByRoleid(roleId).subscribe(result => {
      if (result.CODE === '0') {
        this.roleuserList = result.DATA;
        this.mainService.logService.info(this.roleuserList);
      }
    })
  }
  /**
  * 选中用户追加到当前选中的角色中，并保存到服务器
  * @param event 模态框列表事件句柄
  */
  modallistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'success':
        this.roleuserList = this.roleuserList.concat(event.param);
        this.mainService.saveRoleUser(event.param, this.selectedObject);
        break;
    }
  }
  /**
   * @description 获取关闭事件，并删除当前角色的用户
   * @param event tag事件句柄
   * @author sundanhua
   */
  tagEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'close':
        this.mainService.deleteRoleUser(event.param.USERID);
        break;
    }
  }

  treeEvent(event: FCEVENT) {
    switch (event.eventName) {
      case '':
        break;
    }
  }
}
