/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { TreeOptions } from 'fccomponent';
@Injectable()
export class SyscompanyService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPANYTEST");
  }
  treeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSMENU",//元数据id
    //树结构节点显示内容
    fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 叶子节点字段名称
    fcLeafCode: 'HASCHILD',
    // 根节点条件
    fcTopWhere: "PARENT is null or PARENT=''",
    // 展开条件
    fcExpWhere: "PARENT=':{MENUID}'",
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

//列表分页
fclistdataOption = {
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 20,
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
    fcAutoSave: false
};
}

export interface Syscompany {
  ID: string;	//
  PID: string;	//
  CODE: string;	//
  NAME: string;	//
  TYPECODE: string;	//
  SHORTNAME: string;	//
  SPELLINGCODE: string;	//
  PARENTCODE: string;	//
  ALLPARENTCODE: string;	//
  ISLASTLEVEL: string;	//
  ADDRESS: string;	//
  ZIPCODE: string;	//
  CONTACTPERSON: string;	//
  TELEPHONE: string;	//
  AVAILABLEDATE: string;	//
  DISABLEDATE: string;	//
  SORT: number;	//
  STOPFLAG: string;	//
  CW_CODE: string;	//
  CW_NAME: string;	//
  GROUP_CODE: string;	//
  GROUP_NAME: string;	//
  ILEVEL: number;	//
}
