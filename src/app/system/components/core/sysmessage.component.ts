import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FcadformOption } from 'fccomponent';
import { SysmessageService } from 'fccore';
@Component({
  selector: 'sysmessage',
  template: `
  <fc-layoutpanel fcFull="true">
      <fc-layoutrow fcSpan="30" style="height:100%;" fccontent>
          <fc-tlblist  fccontent1 [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="fcListdataOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
      </fc-layoutrow>
    </fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clear:both;
  }
  .list-search-every{
    width:25%;
    float:left;
    margin-top:5px;
  }
  `]
})
export class SysmessageComponent extends ParentComponent {
  formConfig: FcadformOption = { fcTitle: '' };
  tabShow: boolean = true;
  panelShow: boolean = true;
  tabIndex: number = 0;
  tabmain = [
    { name: '计提坏账' },
    { name: '坏账记录' }
  ]
  _subtitle = [{ label: '单位', content: '上海' }, { label: '部门', content: '财务科' }, { label: '登记人', content: '王五' }, { label: '登记日期', content: '2017年12月25日' }];
  fcOption = {
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否显示工具栏
    fcShowToolPanel: false,
    //是否分页
    fcPagination: false,
    //是否显示分组
    fcRowGroupPanelShow: 'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: false,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: false,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false
  };
  constructor(public mainService: SysmessageService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  addNew(mainObj: any):boolean {
    return true;
<<<<<<< HEAD
  }
=======
}
>>>>>>> 508156e883cc606a3b1da8a41e0ca2cf9eadf7a3
  getDefaultQuery() {
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
    switch (eventName) {
      case 'selected':
        console.log("被选中了");
        break;
      case 'rowClick':
        break;
      case 'listEdit'://修改
        this.panelShow = false;
        break;
      case 'cardBack':
        this.panelShow = true;
        break;
    }
  }
}
