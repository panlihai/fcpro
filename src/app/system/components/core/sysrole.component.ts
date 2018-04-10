import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysroleService } from '../../services/sysrole.service';
@Component({
  selector: 'sysrole',
  template: `
<fc-layoutpanel fcFull="true">
  <fc-layoutcol fcSpans="2,9" fccontent>
    <fc-layoutrow fccontent1>
      <fc-title fcLabel="所有角色" fcHasLine="false" fccontent1></fc-title>
      <fc-list fccontent2 fcAppid="SYSROLE" fcFieldCode="ROLENAME" [fcCondition]="listCondition"></fc-list>
    </fc-layoutrow>
    <fc-tabmain fccontent2 [fcTabs]="roleTab">
      <div fccontent1>
        <fc-title fcLabel="管理部" fcHasLine="false"></fc-title>
        <fc-tag fcTitle="管理员" fcColor="blue" fcIcon="fc-line"></fc-tag>
        <fc-button fcLabel="+ 添加" [fcSize]="'small'" [fcType]="'dashed'" (click)="addUser()"></fc-button>
      </div>
      <div fccontent2>
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
  .list-search{
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clearfix:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }

  `]
})
export class SysroleComponent extends ParentlistComponent {
  //列表条件
  listCondition:string;
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
    this.listCondition = '{"PID":"'+mainService.moduleId+'","ENABLE":"Y"}';
  }
  init(): void {
  }

  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }

}
