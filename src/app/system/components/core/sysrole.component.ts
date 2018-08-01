import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysroleService } from '../../services/sysrole.service';
import { Sysroleuser } from '../../services/sysroleuser.service';
import { Sysroleauth } from '../../services/sysroleauth.service';
import { FctreeComponent } from 'fccomponent/fcbasic/fctree.component';
import { ParentlistComponent } from 'fccomponent/parentlist.component';
import { NzModalService } from 'ng-zorro-antd';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { FCEVENT } from 'fccomponent/fc';
import { SysroleeditdialogComponent } from './dialog/sysroleeditdialog.component';
@Component({
  selector: 'sysrole',
  templateUrl: 'sysrole.component.html',
  styles: [`
  :host ::ng-deep .sysrole-hidden .fc-layoutrow{
    overflow:hidden;
  }
  :host ::ng-deep .sysrole-auth .fc-layoutcol{
    height:100%;
  }
  :host ::ng-deep  .sysrole-auth .fc-layoutcol .fc-content1, :host ::ng-deep .sysrole-auth .fc-layoutcol .fc-content2{
    height:100%;
    overflow:auto;
  }
  .sysrole-auth-tree{

  }
  .sysrole-auth-content{

  }
  :host ::ng-deep  .fc-content2>.template-tab-full>nz-tabset>.ant-tabs>.ant-tabs-content{
    overflow:hidden;
  }
  :host ::ng-deep .ant-tag .anticon-cross {
    color: red;
 }
  `]
})
export class SysroleComponent extends ParentlistComponent {
  @ViewChild('tree')
  tree: FctreeComponent;
  selectedRoleId: string;
  selectedObject: any;
  // 选中的角色权限
  roleauthList: Sysroleauth[];
  // 选中的角色用户
  roleuserList: Sysroleuser[];
  //列表条件
  listCondition: string;
  //下拉单选
  comboValue: string;
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //用户权限
  roleTab: any[];
  // 所有节点数据
  fcNodes: any[] = [{ id: '0', name: '正在加载中...' }];
  // 工具栏按钮条件
  toolbarBtnCdc: string = '{"ALLOWTYPE":"AUTH"}';
  // 列表按钮条件
  listBtnCdc: string = '{"ALLOWTYPE":"AUTH"}';
  // 表单按钮条件
  formBtnCdc: string = '{"ALLOWTYPE":"AUTH"}';

  constructor(public mainService: SysroleService,
    private modalService: NzModalService,
    public router: Router,
    public activedRouter: ActivatedRoute) {
    super(mainService, router, activedRouter);
  }
  ngOnInit() {
    this.fcNodes = this.mainService.getAllMenu();
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
   * 点击工具栏新增事件
   * @param event 事件
   */
  listAdd(event: FCEVENT) {
    this.modalService.open({
      title: '编辑角色信息',
      content: SysroleeditdialogComponent,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        options: {}
      }
    }).subscribe(obj => {
      if (obj.hasOwnProperty('ROLENAME')) {
        this.mainService.saveOrUpdateRole(obj).subscribe(result => {
          this.messageService.message('操作成功！');
          //重新初始化list组件
          if (this.listCondition) {
            this.listCondition = this.listCondition.replace(/(\s*$)/g, "") + " ";
          }
        });
      }
    });
  }
  /**
   * 获取选中的角色信息
   * @param event 列表fclist事件句柄
   */
  listEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'loaded':
        if (event.param && event.param.length > 0) {
          this.selectedObject = event.param[0];
          this.selectedRoleId = this.selectedObject.ID;
          this.mainService.createUserConditionByRoleid(this.selectedObject.ROLEID);
          this.getRoleAuth(true);
          this.getRoleUser();
        }
        break;
      case 'select':
        this.selectedObject = event.param;
        this.mainService.createUserConditionByRoleid(this.selectedObject.ROLEID);
        this.getRoleAuth(true);
        this.getRoleUser();
        break;
      case 'listOneDelete':
        this.messageService.confirm("确认删除记录吗?", () => {
          let mainObj = event.param;
          if (this.beforeDelete(mainObj)) {
            this.mainService.delete({ ID: mainObj.ID }).subscribe(result => {
              if (result.CODE === '0') {
                this.afterDelete();
                this.messageService.message('删除成功！');
                //重新初始化list组件
                if (this.listCondition) {
                  if (this.listCondition.substring(this.listCondition.length - 1) === ' ') {
                    this.listCondition = this.listCondition.replace(/(\s*$)/g, "");
                  } else {
                    this.listCondition = this.listCondition + " ";
                  }
                }
              } else {
                this.messageService.message('删除失败！');
              }
            });
          }
        }, () => { });
        break;
      case 'listOneEdit':
        this.modalService.open({
          title: '编辑角色信息',
          content: SysroleeditdialogComponent,
          onOk() { },
          onCancel() {},
          footer: false,
          componentParams: {
            options: { ID: event.param.ID, REMARK: event.param.REMARK, ROLENAME: event.param.ROLENAME, ROLEID: event.param.ROLEID }
          }
        }).subscribe(obj => {
          if (obj.hasOwnProperty('ROLENAME')) {
            this.mainService.saveOrUpdateRole(obj).subscribe(result => {
              this.messageService.message('操作成功！');
              //重新初始化list组件
              if (this.listCondition) {
                if (this.listCondition.substring(this.listCondition.length - 1) === ' ') {
                  this.listCondition = this.listCondition.replace(/(\s*$)/g, "");
                } else {
                  this.listCondition = this.listCondition + " ";
                }
              }
            });
          }
        });
        break;
    }
  }

  /**
   * @description 当前选中的角色获取此角色的所有权限
   * @param {是否点击后调用事件} isFirstLoad
   */
  getRoleAuth(isSelect?: boolean) {
    let roleId = this.selectedObject.ROLEID;
    this.mainService.getAuthByRoleid(roleId).subscribe(result => {
      if (result.CODE === '0') {
        this.roleauthList = result.DATA as Sysroleauth[];
        if (isSelect) {
          this.mainService.getAuthMenu(this.tree.fcTree.nzNodes, this.roleauthList);
        }
      }
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
  /**
   * 事件句柄处理
   * @param event 树发生的事件
   */
  treeEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'check':
        let roleId = this.selectedObject.ROLEID;
        this.mainService.postAuthToRole(roleId, event.param, this.roleauthList)
          .subscribe(result => {
            this.mainService.messageService.message('操作成功');
            this.getRoleAuth(true);
          });
        break;
      case 'select':
        let data = event.param.data.DATA;
        if (data.MENUTYPE === 'APP') {
          this.toolbarBtnCdc = '{"APPID":"' + data.APPID + '","BTNTYPE":"LIST","ALLOWTYPE":"AUTH"}';
          this.listBtnCdc = '{"APPID":"' + data.APPID + '","BTNTYPE":"LISTONE","ALLOWTYPE":"AUTH"}';
          this.formBtnCdc = '{"APPID":"' + data.APPID + '","BTNTYPE":"CARD","ALLOWTYPE":"AUTH"}';
        }
        break;
    }
  }
}
