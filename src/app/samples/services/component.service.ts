/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore/index';
@Injectable()
export class ComponentService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPONENT");
  }
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
    fcShowToolPanel: true,
    //是否分页
    fcPagination: false,
    //是否显示分组
    fcRowGroupPanelShow: 'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false
  };
}
