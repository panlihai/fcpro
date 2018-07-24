/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, listOption } from 'fccore';
import { SysdepartmentrelationService } from './sysdepartmentrelation.service';
import { SystbvdeptcurorgService } from './systbvdeptcurorg.service';
import { Observable, Subject } from 'rxjs';
import { TreeOptions, FctextComponent } from 'fccomponent/fcbasic';
import { NzModalService } from 'ng-zorro-antd';
import { FclistdataComponent } from 'fccomponent';
import { GridApi } from 'ag-grid';
import { RowDataTransaction } from 'ag-grid/dist/lib/rowModels/inMemory/inMemoryRowModel';
import { ConfigInterface } from 'ng-zorro-antd/src/modal/nz-modal.service';
import { DialogListComponent, DialogListArgs } from '../components/core/dialog/dialogList.component';
@Injectable()
export class SysdepartmentService extends ParentService {
  updateEmployeeSubject = new Subject();
  constructor(public providers: ProvidersService,
    public sysdeptrelationService: SysdepartmentrelationService,
    public systbvdeptcurorgService: SystbvdeptcurorgService,
    private nzModal: NzModalService,
  ) {
    super(providers, 'SYSDEPARTMENT');
  }
  /** YM
    * 根据单位编码获取失效日期
    * @param companyCode 
    */
  getCompanyEndDate(companyCode) {
    return this.appService.findWithQuery('SYSCOMPANY', { where: `SCOMPANY_CODE = '${companyCode}'` })
  }
  /** YM
    * 保存前进行的部门员工信息处理
    * @param listdata 
    * @param mainObj 
    */
  updateEmployeeDept(listdata: FclistdataComponent, mainObj: any) {
    let gridApi: GridApi = listdata._gridApi;
    let saveArr: any = [];
    let msgCountOne: boolean = false;
    let success: boolean;
    gridApi.forEachNode(node => {
      saveArr.push(node.data);
    })
    saveArr.forEach(el => {
      delete el['DOACTION'];
      delete el['RN'];
      delete el['ROWNUM'];
      el['SBIRTH_DATE'] = this.commonService.dateFormat(this.commonService.getDateByTimetamp(el['SBIRTH_DATE']), 'YYYY/MM/DD')
      el['SFIRST_WORK_DATE'] = this.commonService.dateFormat(this.commonService.getDateByTimetamp(el['SFIRST_WORK_DATE']), 'YYYY/MM/DD')
      el['SMODIFIER'] = this.getUserInfo().USERCODE;
      el['SMODIFI_TIME'] = this.commonService.getDate('');
      el['SCOMPANY_CODE'] = mainObj['SCOMPANY_CODE']
      this.appService.updateObject("SYSEMPLOYEE", el).subscribe(res => {
        if (res.CODE === '0') {
          if (!msgCountOne) {
            this.messageService.success("职员信息更新成功");
            msgCountOne = true;
            success = true;
            this.updateEmployeeSubject.next(success);
          }
        } else {
          if (!msgCountOne) {
            this.messageService.error("职员信息更新失败");
            msgCountOne = true;
          }
        }
      });
    });
    return true;
  }
  /** YM
    * 过滤列表
    * @param listdata 
    */
  IdNotInList_conditon(listdata: FclistdataComponent) {
    let gridApi: GridApi = listdata._gridApi;
    let ids: any = [];
    let rowData = gridApi.getRenderedNodes()
    if (rowData) {
      rowData.forEach(el => {
        ids.push(el.data.ID);
      })
    }
    if (ids && ids.length !== 0) {
      let s = this.arrayToSqlString(ids)
      return { WHERE: `ID NOT IN (${s})` }
    }
  }
  /** YM YM
    * 数组转sql批查询条件
    * @param array
    */
  arrayToSqlString(array: Array<any>) {
    let str: string = "";
    for (let i = 0; i < array.length; i++) {
      str += `'${array[i]}'`;
      if (i !== array.length - 1) {
        str += ",";
      }
    }
    return str.toString();
  }
  /** YM
    * 从列表获取相关信息
    * @param listComp 
    */
  getInfoFromList(listComp: FclistdataComponent) {
    let gridApi: GridApi = listComp._gridApi;
    let state: string = DialogListState.noValue;
    let data: any = [];
    gridApi.forEachNode(el => {
      state = DialogListState.existValue;
      data.push(el.data);
    })
    return { state: state, data: data };
  }
  /** YM
    * 处理列表弹窗数据的业务函数
    * @param Args_Dialog 
    */
  dialogOk(dialogListArgs: DialogListArgs) {
    let gridApi: GridApi = dialogListArgs.dialogList._gridApi;
    let target_gridApi: GridApi = undefined;
    if (dialogListArgs.targetList instanceof FclistdataComponent) {
      target_gridApi = dialogListArgs.targetList._gridApi;
    }
    let selected = gridApi.getSelectedRows();
    let toChange: RowDataTransaction = {};
    let backObj: any;
    if (gridApi && target_gridApi) {
      toChange.add = selected;
      target_gridApi.updateRowData(toChange)
    } else {
      backObj = gridApi.getSelectedRows()[0];
    }
    return backObj;
  }
  /** YM
    * 删除员工信息表
    * @param employeeList_dept 
    */
  delEmployee(employeeList_dept) {
    let gridApi: GridApi = employeeList_dept._gridApi;
    let selected = gridApi.getSelectedRows();
    let toChange: RowDataTransaction = {};
    toChange.remove = selected;
    gridApi.updateRowData(toChange)
  }
  stringAsNumToMinus(ilevel: string, value: number) {
    return (Number.parseInt(ilevel) - value).toString();
  }
  /** YM
  * 打开窗口的函数方法
  * @param dialogListArgs 
  */
  openDialog(dialogListArgs: DialogListArgs) {
    return this.nzModal.open({
      title: dialogListArgs.configInterface.title ? dialogListArgs.configInterface.title : '',
      content: dialogListArgs.configInterface.content ? dialogListArgs.configInterface.content : DialogListComponent,
      onOk() { },
      onCancel() { },
      footer: false,
      width: dialogListArgs.configInterface.width,
      style: dialogListArgs.configInterface.style,
      componentParams: {
        options: dialogListArgs
      }
    })
  }
  /** YM YM
    *  初始化DefaultObj
    */
  getDefaultObj() {
    return this.providers.appService.initObjDefaultValue(this.app);
  }
  /** YM
    * 根据id获取主对象的编辑数据
    * @param id 
    */
  getDefaultDataById(param: any): Observable<any> {
    return this.initMainObj(param);
  }
  /** YM
    * 根据id获取部门隶属关系对象的编辑数据
    * @param id 
    */
  getModifyDepartmentRelationData(param: any): Observable<any> {
    return this.sysdeptrelationService.initMainObj(param);
  }
  /** YM
    * 获取部门隶属关系的字段
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
  /** YM
    * 克隆树对象
    * @param dim 部门维度
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
  /** YM
    * 获取组织机构视图数据
    */
  getDeptData(): Observable<any> {
    return this.systbvdeptcurorgService.findWithQueryAll({
    });
  }
  /** YM
    * 保存之前的处理函数
    * @param mainObj 
    */
  beforeSave(mainObj: any) {
    mainObj = this.buildScratorInfo(mainObj)
    return mainObj;
  }
  /** YM
    * 创建修改人信息
    */
  buildScratorInfo(mainObj) {
    mainObj.SCRATOR = this.userService.getUserInfo().USERCODE;
    mainObj.SCREATE_TIME = this.commonService.getDate('');
    mainObj.SMODIFIER = this.userService.getUserInfo().USERCODE;
    mainObj.SMODIFY_TIME = this.commonService.getDate('');
    return mainObj;
  }
  /** YM
    * 根据部门隶属关系(SYS_DEARTMENT_RELATION)的组织机构代码(SDEPT_CODE)
    * 和上级组织机构代码(SPARENT_CODE)
    * 和部门基本信息表(SYS_DEARTMENT)关联显示中文名
    * 
    */
  createDepartment(mainObj: any, relationObj: any): Observable<any> {
    return this.commonService.createObservableConcat(this.save(mainObj), this.sysdeptrelationService.save(relationObj));
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
  sysemployeeOption = {
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
    fcPagination: false,
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
    fcPagination: false,
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
export const DialogListState = {
  existValue: 'existValue',
  noValue: 'noValue'
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

