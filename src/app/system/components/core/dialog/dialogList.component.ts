import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { ConfigInterface } from 'ng-zorro-antd/src/modal/nz-modal.service';
import { FclistOption, FclistdataComponent } from 'fccomponent';
import { SysdepartmentService, DialogArgs } from '../../../services/sysdepartment.service';
import { listOption } from 'fccore';
import { GridApi } from 'ag-grid';
import { RowDataTransaction } from 'ag-grid/dist/lib/rowModels/inMemory/inMemoryRowModel';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    template: `
    <div style="height:450px;padding:5px;">
        <fc-listdata #list [fcAppid]="dialogArgs.appId" [fcOption]="dialogArgs.listOption" [fcCondition]="dialogArgs.condition" (fcEvent)="listdataEvent($event)"></fc-listdata>
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
    dialogArgs: DialogArgs;
    @ViewChild("list") list: FclistdataComponent;
    @Input()
    set options(dialogArgs: DialogArgs) {
        delete dialogArgs.listOption.fcFields;
        this.dialogArgs = dialogArgs;
    }
    constructor(private modal: NzModalSubject) {
    }
    ngOnInit() {
        this._init();
    }
    _init() {
        if (this.dialogArgs.preSetRowData) {
            let gridApi: GridApi = this.list._gridApi;
            let toChange: RowDataTransaction = {};
            toChange.add = this.dialogArgs.preSetRowData;
            setTimeout(() => {
                gridApi.updateRowData(toChange)
            }, 700);
        }
    }
    _emitDataOutside() {
        this.modal.next(this.dialogArgs);
        this.modal.destroy();
    }
    _ok(list: FclistdataComponent) {
        this.dialogArgs.dialogList = list;
        let gridApi: GridApi = list._gridApi;
        this.dialogArgs.selectedRowDataInDialog = gridApi.getSelectedRows();
        this.modal.destroy();
        this._emitDataOutside();
    }
    _cancel() {
        this.modal.destroy();
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