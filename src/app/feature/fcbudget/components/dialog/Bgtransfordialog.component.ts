// 穿梭框
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
import { FclistdataComponent } from 'fccomponent';
@Component({
  selector: 'bgtransfordialog',
  template: `
  <fc-layoutpanel>
    <fc-layoutcol fccontent fcSpans="6,4">
    <fc-layoutcol fccontent1 fcSpans="9,1">
      <div fccontent1 style="height:400px">
        <fc-listdata #listdata1 [fcAppid]="componentParam.appId1" [fcOption]="fcOption1" (fcEvent)="listdataEvent($event,listdata1)"></fc-listdata>
      </div>   
      <div fccontent2 style="height:400px;display:flex;justify-content:center;flex-direction:column;">
        <fc-button fcLabel=">" (click)="event('<')" style="margin:0 0 50% 0;"></fc-button>
        <fc-button fcLabel="<" (click)="event('>')"></fc-button>
      </div>
    </fc-layoutcol>
    <div fccontent2 style="height:400px">
      <fc-listdata #listdata2  [fcAppid]="componentParam.appId2" [fcOption]="fcOption2" (fcEvent)="listdataEvent($event,listdata2)"></fc-listdata>
    </div>
  </fc-layoutcol>
  <div fccontent style="display: flex;justify-content: center;">
    <fc-button fcType="primary" fcLabel="确定" (click)="event('confirm')"></fc-button>
    <fc-button  fcLabel="取消" (click)="event('cancel')"></fc-button>
  </div>
</fc-layoutpanel>
    `,
  styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class BgtransfordialogComponent {
  fcOption1 = {
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
    fcShowToolPanel: true,
    //是否分页
    fcPagination: false,
    //是否显示分组
    fcRowGroupPanelShow: 'onlyWhenGrouping',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: true,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  };
  fcOption2 = {
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
    fcShowToolPanel: true,
    //是否分页
    fcPagination: false,
    //是否显示分组
    fcRowGroupPanelShow: 'onlyWhenGrouping',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: true,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  };
  componentParam: any = {};
  @Input()
  set options(param: any) {
    this.componentParam = param;
    this.componentParam = param;
  }
  // 表单验证对象
  mainValid: any = {};
  constructor(private modal: NzModalSubject) {
  }
  emitDataOutside() {
    let params = {};
    this.modal.next(params);
    this.modal.destroy();
  }
  handleCancel() {
    this.modal.destroy();
  }
  event(eventName: string, param?: any) {
    switch (eventName) {
      case '>':

        break;
      case '<':
        break;
      case 'confirm':
        this.emitDataOutside();
        break;
      case 'cancel':
        this.handleCancel();
        break;
    }
  }
  listdataEvent(ev: any, param?: FclistdataComponent) {
    switch (ev.eventName) {
      case 'click':

        break;
    }
  }
}