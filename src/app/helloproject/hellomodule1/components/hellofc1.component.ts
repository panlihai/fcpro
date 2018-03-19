import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FcadformOption } from 'fccomponent';
import { HellofcService } from '../../services/hellofc.service';
@Component({
  selector: 'app-hellofc1',
  template: `
  <fc-layoutpanel fcFull="true" [hidden]="!panelShow">
  <fc-layoutrow fcSpan="100" style="height:100%;" fccontent>
  <div fccontent1>
    <fc-tlblist  [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
      <div class="list-search">
        <div class="list-search-every"><fc-text fcLabel="标题" [fcAppid]="appId" fcFieldCode='TITLE' [(ngModel)]="mainObj.TITLE" name="TITLE"></fc-text></div>
        <div class="list-search-every"><fc-combo [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-combo></div>
        <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
        <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
        <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
        <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
        <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
        <div class="list-search-button">
          <fc-button fcLabel="查询" fcType="primary"></fc-button>
          <fc-button fcLabel="重置" fcType="primary"></fc-button>
        </div>
      </div>
    </div>
    <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="fcListdataOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
  </fc-layoutrow>
</fc-layoutpanel>
<fc-layoutpanel [hidden]="panelShow">
<fc-tlbform  fcheader [fcAppid]="appId" fcLayout="left" (fcEvent)="tlbformEvent($event)"></fc-tlbform>
<fc-title fcLabel="计提坏账登记" [fcSubtitle]="_subtitle" fcLayout="center" fcWidth="25%" fcheader></fc-title>
<fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex" fccontent>
  <form fccontent1>
    <fc-layoutcol fcSpans="1">
      <div fccontent1>
        <form>
          <fc-layoutcol fcSpans="1,1">
            <div fccontent1>
              <fc-text fcLabel="标题" [fcAppid]="appId" fcFieldCode='TITLE' [(ngModel)]="mainObj.TITLE" name="TITLE"></fc-text>
              <fc-radio [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-radio>
              <fc-combo [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-combo>
              <fc-check [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-check>
            </div>
            <div fccontent2>
              <fc-text fcLabel="标题" [(fcAppid)]="appId" fcFieldCode='TITLE' [(ngModel)]="mainObj.TITLE" name="TITLE"></fc-text>
              <fc-radio [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-radio>
              <fc-combo [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-combo>
              <fc-check [fcAppid]="appId" fcFieldCode='ISREAD' [(ngModel)]="mainObj.ISREAD" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="ISREAD"></fc-check>
              </div>
          </fc-layoutcol>
        </form>
      </div>
    </fc-layoutcol>
  </form>
  <div style="height:450px;" fccontent2><fc-listdata  [fcAppid]="appId" [fcOption]="fcOption"></fc-listdata></div>
</fc-tabmain>
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
  }
  list-search-button {
    width:25%;
    float:left;
  }
  `]
})
export class Hellofc1Component extends ParentComponent {
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
  constructor(public mainService: HellofcService, public router: Router, public activedRoute: ActivatedRoute) {
    super(mainService, router, activedRoute);
  }
  init(): void {
  }
  addNew(mainObj: any) {
  }
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
