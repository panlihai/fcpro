import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysroleService } from '../../services/sysrole.service';
import { Sysroleuser } from '../../services/sysroleuser.service';
import { Sysroleauth } from '../../services/sysroleauth.service';
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
  authList: Sysroleauth[];
  userList: any[];
  //列表条件
  listCondition: string;
  //下拉单选
  comboValue: string;
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //用户权限
  roleTab = [
    { name: '该角色的用户', disabled: false },
    { name: '该角色的权限', disabled: false },
  ];
  //显示增加人员的弹窗
  showadduserwindow:boolean=false;
  //元数据选中
  checkValue: string = '新增';
  checkappValue: string = '元数据';
  checkOptions: any[] = [{ icon: '', label: '新增', value: 'a' }, { icon: '', label: '删除', value: 'b' }, { icon: '', label: '发布', value: 'c' }];
  checkAppOptions: any[] = [{ icon: '', label: '元数据', value: 'a' }];
  //点击添加按钮的弹窗
  windowhidden :boolean;
  constructor(public mainService: SysroleService, public router: Router, public activedRouter: ActivatedRoute) {
    super(mainService, router, activedRouter);
    this.listCondition = '{"PID":"' + mainService.moduleId + '","ENABLE":"Y"}';
  }
  init(): void {
    this.selectedObject = { ROLEID: 'MANAGER' }
    this.getUser();
    if(this.windowhidden===undefined){
        this.windowhidden=true;
    }
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {

  }

  getAuth() {
    let roleId = this.selectedObject.ROLEID;
    this.mainService.getAuthByRoleid(roleId).subscribe(result => {
      if (result.CODE === '0') {
        this.authList = result.DATA as Sysroleauth[];

      }
      console.log(this.authList);
    })
  }
  getUser() {
    let roleId = this.selectedObject.ROLEID;
    this.mainService.getUserByRoleid(roleId).subscribe(result => {
      if (result.CODE === '0') {
        this.userList = result.DATA;
      }
      console.log(this.userList);
    })

  }
  //点击添加人员按钮，弹窗出现
  addUser() {
    this.windowhidden=false;
  }
  //取消添加人员按钮，弹窗消失
  canceladduser(){
    this.windowhidden=true;
  }
  //确认添加用户
  createUser(){

  }

}
