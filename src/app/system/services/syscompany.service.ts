/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { TreeOptions } from 'fccomponent';
import { SyscompanyrelationService } from './syscompanyrelation.service';
import { SystbvorgcurorgService } from './systbvorgcurorg.service';
import { SyscompanydimService } from './syscompanydim.service';
@Injectable()
export class SyscompanyService extends ParentService {
  constructor(public providers: ProvidersService,
    public syscompanyrelationService: SyscompanyrelationService,
    public syscompanydimService: SyscompanydimService,
    public systbvorgcurorgService: SystbvorgcurorgService) {
    super(providers, "SYSCOMPANY");
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
  getModifyCompanyRelationData(param: any): Observable<any> {
    return this.syscompanyrelationService.initMainObj(param);
  }
  /**
   * 获取单位隶属关系的字段
   */
  getSyscompanyrelationField() {
    this.syscompanyrelationService.getFormFields().forEach(item => {
      return item;
    });
  }
  //根据当前单位代码过滤单位隶属关系列表

  companyTreeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSTBVORGCURORG",//元数据id
    //树结构节点显示内容
    fcLabel: ':{SCOMPANY_NAME}::{SDIM_CODE}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'SPARENT_CODE',
    // 当前节点字段名称
    fcChildCode: 'SCOMPANY_CODE',
    // 叶子节点字段名称
    fcLeafCode: 'ISLAST',
    // 根节点条件
    fcTopWhere: "(SPARENT_CODE is null or SPARENT_CODE = '')  and SDIM_CODE = 'ysdw' and SEND_DATE <= 2018072619 AND SEND_DATE >= 2018072619",
    // 展开条件
    fcExpWhere: "SPARENT_CODE=':{SCOMPANY_CODE}' and SDIM_CODE = 'ysdw' and SEND_DATE <= 2018072619 AND SEND_DATE >= 2018072619",
    // 排序字段
    fcOrderby: "",
    // 模式 false为单选，true为多选
    fcMode: false,
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
    cloneObj = this.commonService.cloneObj(this.companyTreeOptions);
    //根节点条件
    cloneObj.fcTopWhere = "(SPARENT_CODE is null or SPARENT_CODE = '')  and SDIM_CODE=" + "'" + dim + "'" + ' ' + " and SBEGIN_DATE <= " + sendDate + ' ' + "AND SEND_DATE >=" + sendDate;
    //展开条件
    cloneObj.fcExpWhere = "SPARENT_CODE=':{SCOMPANY_CODE}' and SDIM_CODE=" + "'" + dim + "'" + ' ' + "and SBEGIN_DATE <=" + sendDate + ' ' + "AND SEND_DATE >=" + sendDate;
    this.companyTreeOptions = cloneObj;
  }
  /**
   * 过滤列表单位数据
   * @param companyCondition 过滤
   * @param code 单位代码
   * @param dim 维度
   * @param date 失效时间 
   */
  queryCompanyData(companyCondition: string, dim: string, date: string, code: string) {
    let con: any = {
      WHERE: "(SPARENT_CODE like" + " " + "'" + code + "%" + "'" + ' ' + "OR SCOMPANY_CODE =" + "'" + code + "')" + ' ' + "AND SDIM_CODE=" + "'" + dim + "'" + ' ' + " and SBEGIN_DATE <= " + date + ' ' + "AND SEND_DATE >=" + date,
    }
    companyCondition = JSON.stringify(con);
    let cloneObj: any = '';
    cloneObj = this.commonService.cloneObj(companyCondition);
    companyCondition = cloneObj;
  }
  /**
   * 获取组织机构视图数据
   */
  getOrgData(): Observable<any> {
    return this.systbvorgcurorgService.findWithQueryAll({
    });
  }
  /**
   * 保存或者修改单位信息
   * @param mainObj 单位基本信息对象
   * @param relationObj 单位隶属关系对象
   */
  saveOrUpdateCompany(mainObj: any, relationObj: any, dimCode: string, parentCode): Observable<any> {
    //单位是否启用
    mainObj.BSTOP_FLAG = '0';
    //填写的信息保存到单位隶属表中
    if (mainObj.SBEGIN_DATE !== undefined && mainObj.SBEGIN_DATE !== ''
      && mainObj.SEND_DATE !== undefined && mainObj.SEND_DATE !== '') {
      relationObj = {
        SBEGIN_DATE: this.commonService.dateFormat(mainObj.SBEGIN_DATE, 'yyyyMMdd'),//生效日期
        SEND_DATE: this.commonService.dateFormat(mainObj.SEND_DATE, 'yyyyMMdd'),//失效日期
        SDIM_CODE: dimCode,//维度代码
        SORG_CODE: mainObj.SCOMPANY_CODE,//组织机构代码
        SPARENT_CODE: parentCode,//上级组织机构代码
        SPARENT_PATH: parentCode + ':' + mainObj.SCOMPANY_CODE,//上级组织机构路径
        SCRATOR: this.userInfo.NAME,//创建人
        SCREATE_TIME: this.commonService.timestampFormat(this.commonService.getTimestamp() * 1000, 'yyyyMMdd'),//创建时间
      }
    } else {
      relationObj = {
        SDIM_CODE: dimCode,//维度代码
        SORG_CODE: mainObj.SCOMPANY_CODE,//组织机构代码
        SPARENT_CODE: parentCode,//上级组织机构代码
        SPARENT_PATH: parentCode + ':' + mainObj.SCOMPANY_CODE,//上级组织机构路径
        SCRATOR: this.userInfo.NAME,//创建人
        SCREATE_TIME: this.commonService.timestampFormat(this.commonService.getTimestamp() * 1000, 'yyyyMMdd'),//创建时间
      }
    }
    if (mainObj.ID === undefined || mainObj.ID === '') {
      if (mainObj.SBEGIN_DATE !== undefined && mainObj.SBEGIN_DATE !== ''
        && mainObj.SEND_DATE !== undefined && mainObj.SEND_DATE !== ''
        && mainObj.SEST_DATE !== undefined && mainObj.SEST_DATE !== '') {
        //生效日期
        mainObj.SBEGIN_DATE = this.commonService.dateFormat(mainObj.SBEGIN_DATE, 'yyyyMMdd');
        //注销日期
        mainObj.SEND_DATE = this.commonService.dateFormat(mainObj.SEND_DATE, 'yyyyMMdd');
        //成立日期
        mainObj.SEST_DATE = this.commonService.dateFormat(mainObj.SEST_DATE, 'yyyyMMdd');  //生效日期
      }
      return this.commonService.createObservableJoin([
        this.save(mainObj),
        this.syscompanyrelationService.save(relationObj)
      ]);
    } else {
      return this.commonService.createObservableJoin([
        this.update(mainObj),
        this.syscompanyrelationService.update(relationObj)
      ]);
    }
  }
  /**
   * 获取维度
   */
  getCompanyDim(): Observable<any> {
    return this.syscompanydimService.findWithQuery({});
  }

  /**
   *获取单位隶属关系
   * @param dimCode 维度
   */
  getOrgRelationData(dimCode: string): Observable<any> {
    return this.syscompanyrelationService.findWithQuery({ SDIM_CODE: dimCode });
  }
  /**
   * 更新单位隶属关系
   * @param id 
   */
  updateOrgRelationData(thisId: string, thatId: string, thatRn: number, thisRn: number): Observable<any> {
    let obj1: any = {
      ID: thisId,
      NDISPLAYNO: thisRn
    }
    let obj2: any = {
      ID: thatId,
      NDISPLAYNO: thatRn

    }
    return this.commonService.createObservableJoin([
      this.syscompanyrelationService.updateList([obj1, obj2]),
    ]);
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
    fcEnableAction: true,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false,
    fcAutoSize: false
  };
  //单位隶属关系
  syscompanyrelationOption = {
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
