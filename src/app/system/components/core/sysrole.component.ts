import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysroleService } from '../../services/sysrole.service';
@Component({
  selector: 'sysrole',
  template: `
<fc-layoutpanel fcFull="true">
  <fc-layoutcol fcSpans="2,9" style="height:100%;" fccontent>
    <div class="left" style="100%;" fccontent1>
      <fc-title fcLabel="所有角色" fcHasLine="false" [fcBorder]="'bottom'"></fc-title>
      <fc-list [fcAppid]="'SYSROLE'" [fcFieldCode]="'ROLENAME'" [fcCondition]="listCondition"></fc-list>
      <fc-icon class="role-add" [fcIcon]="'fc-icon-keep'" [fcSize]="'large'" [fcColor]="'#108ee9'"></fc-icon>
    </div>
    <fc-tabmain fccontent2 [fcTabs]="roleTab" class="role-tab">
      <div style="border-top:1px solid #e9e9e9;" fccontent1>
        <fc-title fcLabel="管理部" fcHasLine="false"></fc-title>
        <fc-tag fcTitle="管理员" fcColor="blue" [fcIcon]="'fc-icon-users'" [fcClose]="true"></fc-tag>
        <fc-button fcLabel="+ 添加" [fcSize]="'small'" [fcType]="'dashed'" (click)="addUser()"></fc-button>
      </div>
      <div style="border-top:1px solid #e9e9e9;" fccontent2>
        <div class="path">
          <span class="path-every">元数据</span>
          <span class="path-every path-every-active">元数据属性</span>
        </div>
        <div class="app-check">
          <fc-check [(ngModel)]="checkValue" [fcOption]="checkAppOptions"></fc-check>
        </div>
        <div class="app-check">
          <fc-check [(ngModel)]="checkappValue" [fcOption]="checkOptions"></fc-check>
        </div>
        </div>
    </fc-tabmain>
  </fc-layoutcol>
</fc-layoutpanel>
  `,
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
  `]
})
export class SysroleComponent extends ParentlistComponent {
  //列表条件
  listCondition: string;
  //用户权限
  roleTab = [
    { name: '该角色的用户', disabled: false },
    { name: '该角色的权限', disabled: false },
  ];
  //元数据选中
  checkValue: string = '新增';
  checkappValue: string = '元数据';
  checkOptions: any[] = [{ icon: '', label: '新增', value: 'a' }, { icon: '', label: '删除', value: 'b' }, { icon: '', label: '发布', value: 'c' }];
  checkAppOptions: any[] = [{ icon: '', label: '元数据', value: 'a' }];

  constructor(public mainService: SysroleService, public router: Router, public activedRouter: ActivatedRoute) {
    super(mainService, router, activedRouter);
    this.listCondition = '{"PID":"' + mainService.moduleId + '","ENABLE":"Y"}';
  }
  init(): void {
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
    
  }

}
