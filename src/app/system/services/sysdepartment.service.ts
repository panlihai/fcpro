/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysdepartmentrelationService } from './sysdepartmentrelation.service';
import { SystbvdeptcurorgService } from './systbvdeptcurorg.service';
import { Observable } from 'rxjs';
import { TreeOptions } from 'fccomponent/fcbasic';
@Injectable()
export class SysdepartmentService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysdeptrelationService: SysdepartmentrelationService,
    public systbvdeptcurorgService: SystbvdeptcurorgService) {
    super(providers, "SYSDEPARTMENT");
  }
  /**
   * 根据id获取主对象的编辑数据
   * @param id 
   */
  getDefaultDataById(param: any): Observable<any> {
    return this.initMainObj(param);
  }
  /**
   * 根据id获取单位隶属关系对象的编辑数据
   * @param id 
   */
  getModifyDepartmentRelationData(param: any): Observable<any> {
    return this.sysdeptrelationService.initMainObj(param);
  }
  /**
   * 获取单位隶属关系的字段
   */
  getSysdepartmentrelationField() {
    this.sysdeptrelationService.getFormFields().forEach(item => {
      return item;
    });
  }
  departmentTreeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSTBVDEPTCURORG",//元数据id
    //树结构节点显示内容
    fcLabel: ':{SDEPT_NAME}::{SDIM_CODE}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'SPARENT_CODE',
    // 当前节点字段名称
    fcChildCode: 'SDEPT_CODE',
    // 叶子节点字段名称
    fcLeafCode: 'ISLAST',
    // 根节点条件
    fcTopWhere: "(SPARENT_CODE is null or SPARENT_CODE = '')  and SDIM_CODE = 'ysdw' and SEND_DATE <= 2018072619 AND SEND_DATE >= 2018072619",
    // 展开条件
    fcExpWhere: "SPARENT_CODE=':{SDEPT_CODE}' and SDIM_CODE = 'ysdw' and SEND_DATE <= 2018072619 AND SEND_DATE >= 2018072619",
    // 排序字段
    fcOrderby: "",
    // 模式 false为单选，true为多选
    fcMode: true,
    // 展开子节点
    fcOpenChild: false,
    // 是否显示线条
    fcShowLine: true,
    //是否可拖拽
    fcAllowDrag: true,
    fcLeafValue: 'N'
  }
  /**
   * 克隆树对象
   * @param dim 单位维度
   * @param sendDate 失效日期
   */
  cloneTreeObj(dim: string, sendDate: string) {
    //改变值
    let cloneObj: any = {};
    cloneObj = this.commonService.cloneObj(this.departmentTreeOptions);
    //根节点条件
    cloneObj.fcTopWhere = "(SPARENT_CODE is null or SPARENT_CODE = '')  and SDIM_CODE=" + "'" + dim + "'" + ' ' + " and SBEGIN_DATE <= " + sendDate + ' ' + "AND SEND_DATE >=" + sendDate;
    //展开条件
    cloneObj.fcExpWhere = "SPARENT_CODE=':{SDEPT_CODE}' and SDIM_CODE=" + "'" + dim + "'" + ' ' + "and SBEGIN_DATE <=" + sendDate + ' ' + "AND SEND_DATE >=" + sendDate;
    this.departmentTreeOptions = cloneObj;
  }
  /**
   * 获取组织机构视图数据
   */
  getDeptData(): Observable<any> {
    return this.systbvdeptcurorgService.findWithQueryAll({
    });
  }
  /**
   * 根据单位隶属关系(SYS_DEARTMENT_RELATION)的组织机构代码(SDEPT_CODE)
   * 和上级组织机构代码(SPARENT_CODE)
   * 和单位基本信息表(SYS_DEARTMENT)关联显示中文名
   * 
   */
  createDepartment(mainObj: any, relationObj: any): Observable<any> {
    return this.commonService.createObservableConcat(
      this.save(mainObj),
      this.sysdeptrelationService.save(relationObj)
    );
  }
  //列表
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
    fcAutoSave: false,
    fcAutoSize: false
  };
  //
  sysdepartmentrelationOption = {
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

export interface Sysdepartment {
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
