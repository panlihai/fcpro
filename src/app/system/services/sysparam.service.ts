/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
@Injectable()
export class SysparamService extends ParentService {
  currentModal: NzModalSubject;
  constructor(public providers: ProvidersService, private modalService: NzModalService) {
    super(providers, "SYSPARAM");
  }
  dialogOpen(args: Args_Param) {
    this.currentModal = this.modalService.open({
      title: args.titleTpl ? args.titleTpl : null,
      content: args.contentTpl ? args.contentTpl : null,
      footer: args.footerTpl ? args.footerTpl : null,
      style: { width: "90%" }
    })
  }
  close_modal() {
    this.currentModal.destroy();
    this.currentModal = null
  }
  dicListOptions = {
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
export interface Args_Param {
  titleTpl?: any;
  contentTpl?: any;
  footerTpl?: any;
}

