/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { NzModalService } from 'ng-zorro-antd';
import { GridApi, ColumnApi } from 'ag-grid';
import { FclistdataComponent } from 'fccomponent';
import { RowDataTransaction } from 'ag-grid/dist/lib/rowModels/inMemory/inMemoryRowModel';
@Injectable()
export class SysquotavalueService extends ParentService {
    currentModal: any;
    constructor(public providers: ProvidersService, private modalService: NzModalService) {
        super(providers, "SYSQUOTAVALUE");
    }
    /**YM
         * 获取当前时间戳
         */
    getTimeStamp() {
        return this.providers.commonService.getTimestamp().toString();
    }
    /**YM
         * 打开指定模板弹窗
         * @param args 
         */
    dialogOpen(args: Args_QuotaValue) {
        this.currentModal = this.modalService.open({
            title: args.titleTpl ? args.titleTpl : null,
            content: args.contentTpl ? args.contentTpl : null,
            footer: args.footerTpl ? args.footerTpl : null,
            style: { width: "90%" }
        })
    }
    /**YM
         * 关闭弹窗
         */
    close_modal() {
        this.currentModal.destroy();
        this.currentModal = null
    }
    /**YM
         * 处理更新
         * @param saveObjs 
         */
    handle_update(saveObjs) {
        let count: number = 0;
        saveObjs.forEach(el => {
            this.save(el).subscribe(res => {
                if (res.CODE === "0") {
                    if (count === 0) {
                        this.providers.msgService.success("更新成功");
                        count++;
                    }
                } else {
                    this.providers.msgService.warm("更新失败");
                }
            });
        });
    }
    /**YM
         * 处理保存
         * @param saveObjs 
         */
    handle_save(saveObjs) {
        let count: number = 0;
        saveObjs.forEach(el => {
            this.save(el).subscribe(res => {
                if (res.CODE === "0") {
                    if (count === 0) {
                        this.providers.msgService.success("保存成功");
                        count++;
                    }
                } else {
                    this.providers.msgService.warm("保存失败");
                }
            });
        });
    }
    /**YM
         * 处理取消
         */
    handle_cancel() {

    }
    /**YM
         * 成功的消息
         * @param msg 
         */
    successMsg(msg) {
        this.messageService.success(msg);
    }
    /**YM
         * 警告的消息
         */
    warnMsg(msg) {
        this.messageService.warm(msg);
    }
    /**YM
         * 错误的消息
         * @param msg 
         */
    errMsg(msg) {
        this.messageService.error(msg);
    }
    /**YM
         * 确认处理操作信息
         * @param msg 
         * @param ok 
         * @param cancel 
         */
    confirmMsg(msg, ok, cancel) {
        this.messageService.confirm(msg, ok, cancel);
    }
    /**YM
         * 删除方法
         * @param obj 
         */
    deleteObj(obj) {
        let success: boolean;
        this.messageService.confirm('是否确认删除?', () => {
            this.delete(obj).subscribe(res => {
                if (res.CODE === '0') {
                    this.messageService.success('删除成功');
                    success = true
                }
                else {
                    this.messageService.warm('删除失败');
                    success = false
                }
            })
        }, () => { });
        return success;
    }
    /**YM
         * 批量删除（未测试）
         * @param objs 
         */
    deleteObjs(objs) {
        let count = 0;
        objs.forEach(obj => {
            this.delete(obj).subscribe(res => {
                if (res.CODE === '0' && count < 1) {
                    count++;
                    this.messageService.success('删除成功');
                }
                else this.messageService.warm('删除失败');
            })
        })
    }
    handle_ok(saveObj, editlist: FclistdataComponent) {
        let gridApi: GridApi = editlist._gridApi;
        let ColumnApi: ColumnApi = editlist._gridColumnApi;
        if (saveObj.CATAGORY === 'static') {
            let saveObjs = gridApi.getRenderedNodes();
            saveObjs.forEach(obj => {
                for (let attr in obj.data)
                    if (attr === 'DOACTION')
                        delete obj.data[attr]
            })
            let array: any = [];
            saveObjs.forEach(el => {
                array.push(el.data);
            });
            let count = 0;
            //抽取要保存的数据进行保存
            array.forEach(el => {
                if (!el.ID) {
                    this.save(el).subscribe(res => {
                        if (count < 1) {
                            if (res.CODE === '0') {
                                count++;
                                this.successMsg('保存成功');
                            } else {
                                this.errMsg('保存失败');
                            }
                        }
                    });
                }
                // 抽取要删除的数据进行删除
                // else {
                //   let exist: boolean = false;
                //   this.indexObj_edit.forEach(obj => {
                //     if (el.ID === obj.ID) exist = true;
                //   });
                //   if (!exist)
                //     this.delete(el);
                // }
            });
        } else {
            this.save(saveObj).subscribe(res => {
                if (res.CODE === '0') this.successMsg('保存成功');
                else this.errMsg('保存失败');
            });
        }
    }
    add_ok(saveObj, editlist: FclistdataComponent) {
        this.close_modal();
        let gridApi: GridApi = editlist._gridApi;
        let ColumnApi: ColumnApi = editlist._gridColumnApi;
        let newData: RowDataTransaction = {};
        let obj: any = {};
        let index = gridApi.getLastDisplayedRow();
        let emArr: any = [];
        obj.LABEL = saveObj.LABEL
        obj.VALUE = saveObj.VALUE
        obj.SERIES = saveObj.SERIES
        obj.CHARTID = saveObj.CHARTID;
        obj.TS = this.getTimeStamp();
        obj.CATAGORY_DICDESC = saveObj.CATAGORY;
        obj.CATAGORY = saveObj.CATAGORY;
        obj.ROWNUM = index + 2;
        emArr.push(obj);
        newData.add = emArr;
        gridApi.updateRowData(newData)
    }
    listOptions = {
        fcHeight: 500,
        fcPaginationPageSize: this.app.PAGESIZE,
        //皮肤默认为bootstrap风格
        fcClass: "ag-blue",
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
        fcPagination: true,
        //是否显示分组
        fcRowGroupPanelShow: "onlyWhenGrouping",
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: false,
        //选中方式
        fcRowSelection: "single",
        //是否启用操作列
        fcEnableAction: true,
        //选中有checkbox
        fcCheckboxSelection: false,
        //是否启用编辑
        fcEnableEdit: false,
        //是否自动保存
        fcAutoSave: false
    };
    editOptions = {
        fcHeight: 500,
        fcPaginationPageSize: this.app.PAGESIZE,
        //皮肤默认为bootstrap风格
        fcClass: "ag-blue",
        //是否启用查询
        fcEnableSearch: false,
        //是否启用排序
        fcEnableSorting: true,
        //是否启用过滤
        fcEnableFilter: false,
        //是否自动设置表头大小
        fcEnableColResize: true,
        //是否显示工具栏
        fcShowToolPanel: false,
        //是否分页
        fcPagination: false,
        //是否显示分组
        fcRowGroupPanelShow: "onlyWhenGrouping",
        //是否启用状态栏
        fcEnableStatusBar: false,
        //是否启用区域选中
        fcEnableRangeSelection: false,
        //选中方式
        fcRowSelection: "single",
        //是否启用操作列
        fcEnableAction: false,
        //选中有checkbox
        fcCheckboxSelection: false,
        //是否启用编辑
        fcEnableEdit: false,
        //是否自动保存
        fcAutoSave: false
    };
    SQLlistOptions = {
        fcHeight: 500,
        fcPaginationPageSize: this.app.PAGESIZE,
        //皮肤默认为bootstrap风格
        fcClass: "ag-blue",
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
        fcPagination: true,
        //是否显示分组
        fcRowGroupPanelShow: "onlyWhenGrouping",
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: false,
        //选中方式
        fcRowSelection: "single",
        //是否启用操作列
        fcEnableAction: false,
        //选中有checkbox
        fcCheckboxSelection: false,
        //是否启用编辑
        fcEnableEdit: false,
        //是否自动保存
        fcAutoSave: false
    };
    interfaceListOptions = {
        fcHeight: 500,
        fcPaginationPageSize: this.app.PAGESIZE,
        //皮肤默认为bootstrap风格
        fcClass: "ag-blue",
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
        fcPagination: true,
        //是否显示分组
        fcRowGroupPanelShow: "onlyWhenGrouping",
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: false,
        //选中方式
        fcRowSelection: "single",
        //是否启用操作列
        fcEnableAction: false,
        //选中有checkbox
        fcCheckboxSelection: false,
        //是否启用编辑
        fcEnableEdit: false,
        //是否自动保存
        fcAutoSave: false
    };
}
export interface Args_QuotaValue {
    titleTpl?: any;
    contentTpl?: any;
    footerTpl?: any;
}
export const AccessToData = {
    static: { name: '固定值', code: 'static' },
    SQL: { name: 'SQL', code: 'SQL' },
    custom: { name: '自定义接口', code: 'custom' }
}
export const enum ObjectState {
    Add,
    Update
}
export const PageStateConfig = {
    list: 'list',
    edit: 'edit',
    add: 'add'
}