/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { TreeOptions } from 'fccomponent';
import { SyscompanyrelationService } from './syscompanyrelation.service';
import { SystbvorgcurorgService } from './systbvorgcurorg.service';
import { SyscompanydimService } from './syscompanydim.service';
import { FCEVENT } from 'fccomponent/fc';
import { compareValue, messageByValue } from '../../common/util';
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
  saveOrUpdateCompany(mainObj: any, rId?:string,dimCode?: string, parentCode?: string): Observable<any> {
    let relationObj: any = {};
    //单位是否启用
    mainObj.BSTOP_FLAG = '0';
    //填写的信息保存到单位隶属表中
    //生效日期
    if (mainObj.SBEGIN_DATE !== undefined && mainObj.SBEGIN_DATE !== '') {
      mainObj.SBEGIN_DATE = this.commonService.dateFormat(mainObj.SBEGIN_DATE, 'yyyyMMdd');
    } else {
      mainObj.SBEGIN_DATE = '';
    }
    //失效日期
    if (mainObj.SEND_DATE !== undefined && mainObj.SEND_DATE !== '') {
      mainObj.SEND_DATE = this.commonService.dateFormat(mainObj.SEND_DATE, 'yyyyMMdd');
    } else {
      mainObj.SEND_DATE = '';
    }
    //成立日期
    if (mainObj.SEST_DATE !== undefined && mainObj.SEST_DATE !== '') {
      mainObj.SEST_DATE = this.commonService.dateFormat(mainObj.SEST_DATE, 'yyyyMMdd');
    } else {
      mainObj.SEST_DATE = '';
    }
    relationObj = {
      ID:rId,
      SBEGIN_DATE: mainObj.SBEGIN_DATE,//生效日期
      SEND_DATE: mainObj.SEND_DATE,//失效日期
      SDIM_CODE: dimCode,//维度代码
      SORG_CODE: mainObj.SCOMPANY_CODE,//组织机构代码
      SPARENT_CODE: parentCode,//上级组织机构代码
      SPARENT_PATH: parentCode + ':' + mainObj.SCOMPANY_CODE,//上级组织机构路径
      SCRATOR: this.userInfo.NAME,//创建人
      SCREATE_TIME: this.commonService.timestampFormat(this.commonService.getTimestamp() * 1000, 'yyyyMMdd'),//创建时间
    }
    if (mainObj.ID === undefined || mainObj.ID === '') {
      // 并行执行多个任务，保存单位表和单位隶属关系表的对象
      return this.commonService.createObservableJoin([
        this.save(mainObj),
        this.syscompanyrelationService.save(relationObj)
      ]);
    } else {
      //修改页面id不为空时是修改页面，更新单位和单位隶属关系修改的数据
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
    // 根据维度查询单位隶属关系
    return this.syscompanyrelationService.findWithQuery({ SDIM_CODE: dimCode });
  }
  /**
   * 更新单位隶属关系
   * @param thisId 当前选中数据的id
   * @param thatId 和当前选中数据交换的id
   * @param thatRn 和当前选中数据交换的序号
   * @param thisRn 当前选中数据的序号
   */
  updateOrgRelationData(thisId: string, thatId: string, thatRn: number, thisRn: number): Observable<any> {
    // 当前选中数据的对象
    let obj1: any = {
      ID: thisId,
      NDISPLAYNO: thisRn
    }
    // 交换序号那条数据的对象
    let obj2: any = {
      ID: thatId,
      NDISPLAYNO: thatRn

    }
    // 并行保存交换序号后的两个对象
    return this.commonService.createObservableJoin([
      this.syscompanyrelationService.updateList([obj1, obj2]),
    ]);
  }
  /**
   * 自定义验证
   * @param mainObj 
   * @param mainValid 
   */
  validator(mainObj: any, mainValid: any) {
    let sbeginDateValid = JSON.parse(mainValid.SBEGIN_DATE);
    let sendDateValid = JSON.parse(mainValid.SEND_DATE);
    // 验证生效日期不能大于注销时间   
    //深拷贝 
    sbeginDateValid = Object.assign({}, sbeginDateValid, this.compareTime(mainObj.SEST_DATE, mainObj.SBEGIN_DATE, '日期填写正确', '生效日期不能大于成立日期'));
    mainValid.SBEGIN_DATE = JSON.stringify(sbeginDateValid);
    // 验证注销日期不能大于生效时间
    //深拷贝
    sendDateValid = Object.assign({}, sendDateValid, this.compareTime(mainObj.SBEGIN_DATE, mainObj.SEND_DATE, '日期填写正确', '注销日期不能大于生效日期'));
    mainValid.SEND_DATE = JSON.stringify(sendDateValid);
  }
  /**
   * 比较时间大小，验证时间的提示
   * @param firstDate 第一个时间
   * @param secondDate 第二个时间
   * @param mainValid 验证对象
   * @param trueMsg 正确时的提示
   * @param falseMsg 错误时的提示
   */
  compareTime(firstDate: Date, secondDate: Date, trueMsg: string, falseMsg: string): any {
    let mainValid: any = {};
    //如果没有选择时间就不让比较大小
    if (firstDate !== undefined && secondDate !== undefined) {
      let flag = compareValue(firstDate, secondDate);
      mainValid.show = flag;
      mainValid.validators = {};
      mainValid.validators.customVal = flag;
      mainValid.errorMessages = {};
      mainValid.errorMessages.customVal = messageByValue(flag, falseMsg, trueMsg);
      return mainValid;
    }
  }
  /**
   * 上移
   * @param event 选中数据的对象
   * @param listData 列表的数据
   */
  listOneMoveup(event: FCEVENT, listData: any[]) {
    let obj: any = event;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NDISPLAYNO;
      //上一个序号
      let thatNum: number
      //选中数据
      let thisData: any = {};
      //上一条数据
      let preData: any = {};
      if (obj.RID === listData[0].RID) {
        this.messageService.error("已到顶部,不能上移！");
      } else if (obj.RID !== listData[0].RID) {
        listData.forEach(item => {
          if (obj.RID === item.RID) {
            thisData = item;
            preData = listData[item.RN - 2];
            //暂存替换前的序号
            thatNum = preData.NDISPLAYNO;
            preData.NDISPLAYNO = thisNum;
            thisData.NDISPLAYNO = thatNum;
            this.updateOrgRelationData(thisData.RID, preData.RID, preData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
              if (result[0].CODE !== '0') {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
   * 下移
   * @param event 选中数据的对象
   * @param listData 列表的数据
   */
  listOneMovedown(event: FCEVENT, listData: any[]) {
    let obj: any = event;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NDISPLAYNO;
      //下一条数据序号
      let nextNum: number;
      //选中数据
      let thisData: any = {};
      //下一条数据
      let nextData: any = {};
      if (obj.RID === listData[listData.length - 1].RID) {
        this.messageService.error("已到底部,不能下移！");
      } else if (obj.RID !== listData[listData.length - 1].RID) {
        listData.forEach(item => {
          if (obj.RID === item.RID) {
            thisData = item;
            nextData = listData[item.RN];
            nextNum = nextData.NDISPLAYNO;
            thisData.NDISPLAYNO = nextNum;
            nextData.NDISPLAYNO = thisNum;
            this.updateOrgRelationData(thisData.RID, nextData.RID, nextData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
              if (result[0].CODE !== '0') {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
   * 置顶
   * @param event 选中数据的对象
   * @param listData 列表的数据
   */
  listOneSettop(event: FCEVENT, listData: any[]) {
    let obj: any = event;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NDISPLAYNO;
      // 第一条数据序号
      let firstNum: number;
      //选中数据
      let thisData: any = {};
      //第一条数据
      let firstData: any = {};
      if (obj.RID === listData[0].RID) {
        this.messageService.error("已到顶部,不需要置顶啦！");
      } else if (obj.RID !== listData[0].RID) {
        listData.forEach(item => {
          if (obj.RID === item.RID) {
            thisData = item;
            firstData = listData[0];
            firstNum = firstData.NDISPLAYNO;
            thisData.NDISPLAYNO = firstNum;
            firstData.NDISPLAYNO = thisNum;
            this.updateOrgRelationData(thisData.RID, firstData.RID, firstData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
              if (result[0].CODE !== '0') {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
   * 置底
   * @param event 选中数据的对象
   * @param listData 列表的数据
   */
  listOneSetDown(event: FCEVENT, listData: any[]) {
    let obj: any = event;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NDISPLAYNO;
      //选中数据序号
      let lastNum: number;
      //选中数据
      let thisData: any = {};
      //最后一条数据
      let lastData: any = {};
      if (obj.RID === listData[listData.length - 1].RID) {
        this.messageService.error("已到底部,不需要置底啦！");
      } else if (obj.RID !== listData[listData.length - 1].RID) {
        listData.forEach(item => {
          if (obj.RID === item.RID) {
            thisData = item;
            lastData = listData[listData.length - 1];
            lastNum = lastData.NDISPLAYNO;
            thisData.NDISPLAYNO = lastNum;
            lastData.NDISPLAYNO = thisNum;
            this.updateOrgRelationData(thisData.RID, lastData.RID, lastData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
              if (result[0].CODE !== '0') {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
   * 撤销单位
   * @param selectedObj 
   */
  cancelCompany(selectedObj: any): Observable<any> {
    if (selectedObj.ID !== '') {
      selectedObj.BSTOP_FLAG = '1';
      return this.update(selectedObj);
    }
  }
  //单位列表
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
//单位
export interface Syscompany {
  主键ID: string;//	主键id
  SBEGIN_DATE: string;//	生效日期
  SCOMPANY_CODE: string;//	单位代码
  SEND_DATE: string;//	失效日期
  SSPELLING_CODE: string;//	单位简码
  SCOMPANY_NAME: string;//	单位名称
  SSHORT_NAME: string;//	单位简称
  SCOMPANY_TYPE: string;//	单位性质
  BIS_VIRTUAL: string;//	是否虚拟单位
  ILEVEL: number;//	单位层级
  SINDUSTRY: string;//	所属行业
  SEST_DATE: string;//	成立日期
  SREPRESENTATIVE: string;//	法人代表
  SAPPROVAL_DCMTNO: string;//	批准文号
  SAPPROVING_COMPANY: string;//	登记批准机构
  SCONTACT_TEL: string;//	电话
  SFAX: string;//	传真
  SCOUNTRY: string;//	国家
  SCITY: string;//	城市
  SADDRESS: string;//	地址
  SPOST_CODE: string;//	邮编
  SWEBSITE: string;//	网址
  SINTRODUCTION: string;//	机构简介
  SINVEST_TYPE: string;//	投资范围
  BSTOP_FLAG: string;//	停用标志#0-启用, 1-停用
  SCRATOR: string;//	创建人
  SCREATE_TIME: string;//	创建时间
  SMODIFIER: string;//	修改人
  SMODIFY_TIME: string;//	修改时间
}
