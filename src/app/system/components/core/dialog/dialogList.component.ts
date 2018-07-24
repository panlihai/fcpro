import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { ConfigInterface } from 'ng-zorro-antd/src/modal/nz-modal.service';
import { FclistdataComponent, FctextComponent } from 'fccomponent';
import { listOption } from 'fccore';
import { GridApi } from 'ag-grid';
import { RowDataTransaction } from 'ag-grid/dist/lib/rowModels/inMemory/inMemoryRowModel';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    template: `
    <div style="height:450px;padding:5px;">
        <fc-listdata #list [fcAppid]="dialogListArgs.appId" [fcOption]="dialogListArgs.listOption" [fcCondition]="dialogListArgs.condition" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </div>
    <div class="customize-footer">
        <fc-button (click)="_cancel()" fcLabel="取消"></fc-button>
        <fc-button fcType="primary" (click)="_ok(list)" fcLabel="确定"></fc-button>
    </div>
    `,
    styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class DialogListComponent implements OnInit {
    dialogListArgs: DialogListArgs;
    @ViewChild("list") list: FclistdataComponent;
    @Input()
    set options(dialogListArgs: DialogListArgs) {
        delete dialogListArgs.listOption.fcFields;
        this.dialogListArgs = dialogListArgs;
    }
    constructor(private modal: NzModalSubject) {
    }
    ngOnInit() {
        this._init();
    }
    _init() {
        if (this.dialogListArgs.preSetRowData) {
            let gridApi: GridApi = this.list._gridApi;
            let toChange: RowDataTransaction = {};
            toChange.add = this.dialogListArgs.preSetRowData;
            setTimeout(() => {
                gridApi.updateRowData(toChange)
            }, 700);
        }
    }
    _emitDataOutside() {
        this.modal.next(this.dialogListArgs);
        this.modal.destroy();
    }
    _ok(list: FclistdataComponent) {
        this.dialogListArgs.dialogList = list;
        let gridApi: GridApi = list._gridApi;
        this.dialogListArgs.selectedRowDataInDialog = gridApi.getSelectedRows();
        this.modal.destroy();
        this._emitDataOutside();
    }
    _cancel() {
        this.modal.destroy();
    }
    _clear() {
        delete this.dialogListArgs.listOption['fcFields'];
    }
    /**
     * 列表组件事件收集及函数处理派发
     * @param ev 
     */
    listdataEvent(ev: FCEVENT) {
        switch (ev.eventName) {
            case 'rowDoubleClick':
                this._ok(this.list);
                break;
        }
    }
}
export interface DialogListArgs {
    [key: string]: any;
    configInterface?: ConfigInterface,
    appId?: string,
    methodIndex?: string,
    listOption?: listOption,
    condition?: object,
    textComponent?: FctextComponent,
    preSetRowData?: any,
    selectedRowDataInDialog?: any;
    dialogList?: FclistdataComponent;
    targetList?: FclistdataComponent;
}
export const DialogListOptions = {
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 20,
    fcHeight: 500,
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
    fcPagination: true,
    //是否显示分组
    fcRowGroupPanelShow: 'none',//'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: false,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false,
    fcAutoSize: false
};