import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, TreeOptions } from 'fccomponent';
import { SysroleauthService } from '../../services/sysroleauth.service';
import { SysroleService } from '../../services/sysrole.service';
@Component({
  selector: 'sysrole',
  template: `
  <fc-layoutpanel fcFull="true">
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
  getDefaultQuery():any {
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
