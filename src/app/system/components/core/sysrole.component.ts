import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, TreeOptions } from 'fccomponent';
import { SysroleauthService } from '../../services/sysroleauth.service';
import { SysroleService } from '../../services/sysrole.service';
@Component({
  selector: 'sysrole',
  template: `
<fc-layoutpanel fcFull="true">
  <fc-layoutcol fcSpans="3,10" fccontent>
    <div fccontent1>
      <fc-title fcLabel="所有角色" fcHasLine="false"></fc-title>
      <fc-list fcAppid="SYSAPP" [fcOption]="{field:{FIELDCODE:'APPNAME'}}"></fc-list>
    </div>
    <div fccontent2>
      <fc-tabmain [fcTabs]="roleTab">
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
      <div *ngIf="false">
        <div>下拉树测试：</div>
        <fc-drowdowntree [items]="items" [(value)]="value" (valueChange)="onValueChange($event)"></fc-drowdowntree>
      </div>
    </div>
  </fc-layoutcol>
</fc-layoutpanel>  

<fc-layoutpanel fcFull="true" *ngIf="false">
  <fc-layoutcol fcSpan="2,5" style="height:100%;" fccontent>
    <fc-layoutpanel fccontent1>
        <fc-title fcheader fcLabel="所有角色"></fc-title>
        <fc-list fccontent [fcAppid]="appId" [fcOption]="{field:{FIELDCODE:'ROLENAME'}}"></fc-list>
        <fc-tlbform fcfooter [fcAppid]="appId"></fc-tlbform>
    </fc-layoutpanel>
    <fc-layoutpanel fccontent2>
        <fc-tlblist fccontent1 [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="fcListdataOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutpanel>
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
export class SysroleComponent extends ParentComponent {
  //增加人员
  addUser() {

  }
  //用户权限
  roleTab = [
    { name: '用户', disabled: false },
    { name: '权限', disabled: false },
  ]
  //元数据选中
  checkValue: string = '新增';
  checkappValue: string = '元数据';
  checkOptions: any[] = [{ icon: '', label: '新增', value: 'a' }, { icon: '', label: '删除', value: 'b' }, { icon: '', label: '发布', value: 'c' }];
  checkAppOptions: any[] = [{ icon: '', label: '元数据', value: 'a' }];
  constructor(public mainService: SysroleService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  treeOptions: TreeOptions = {
    //元数据id
    fcAppid: this.appId,//元数据id
    //树结构节点显示内容
    fcLabel: ':{MENUNAME}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 叶子节点字段名称
    fcLeafCode: 'ROLEID',
    // 根节点条件
    fcTopWhere: "1=1",
    // 展开条件
    fcExpWhere: "ROLEID='PID'",
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
  init(): void {
  }
  addNew(mainObj: any):boolean {
    return true;
}
  getDefaultQuery(): any {
    return {};
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {

  }
  event(eventName: string, context: any): void {
  }

}
