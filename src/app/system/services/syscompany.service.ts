/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { TreeOptions } from 'fccomponent';
import { SyscompanyrelationService } from './syscompanyrelation.service';
import { SystbvorgcurorgService } from './systbvorgcurorg.service';
@Injectable()
export class SyscompanyService extends ParentService {
  constructor(public providers: ProvidersService,
    public syscompanyrelationService: SyscompanyrelationService,
    public systbvorgcurorgService: SystbvorgcurorgService) {
    super(providers, "SYSCOMPANYTEST");
  }
  /**
   * 根据id获取主对象的编辑数据
   * @param id 
   */
  getDefaultDataById(param: any): Observable<any> {
    return this.findWithQueryAll({ ID: param.ID });
  }
  /**
   * 根据id获取单位隶属关系对象的编辑数据
   * @param id 
   */
  getModifyCompanyRelationData(param: any): Observable<any> {
    return this.syscompanyrelationService.findWithQueryAll({ ID: param.ID });
  }
  /**
   * 获取单位隶属关系的字段
   */
  getSyscompanyrelationField() {
    this.syscompanyrelationService.getFormFields().forEach(item => {
      return item;
    });
  }
  //单位隶属关系
  companyTreeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSTBVORGCURORG",//元数据id
    //树结构节点显示内容
    fcLabel: ':{SCOMPANY_NAME}::{SCOMPANY_CODE}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'SPARENT_CODE',
    // 当前节点字段名称
    fcChildCode: 'SCOMPANY_CODE',
    // 叶子节点字段名称
    fcLeafCode: 'ISLAST',
    // 根节点条件
    fcTopWhere: "SPARENT_CODE is null or SPARENT_CODE=''",
    // 展开条件
    fcExpWhere: "SPARENT_CODE=':{SPARENT_CODE}'",
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
  }

  getOrgData(): Observable<any> {
    return this.systbvorgcurorgService.findWithQuery({});
  }
  /**
 * 得到所有的单位内容并转化成树形结构
 */
  getAllMenu(data): any[] {
    let companyData: any[];
    this.getOrgData().subscribe(result => {
      if (result.CODE === '0') {
        companyData = result.DATA;
      }
    })
    return this.companyToTree(companyData);
  }
  /**
 * 把单位结构转成树形结构
 * @param _menus 菜单集合
 * @param authList 权限集合
 */
  private companyToTree(_menus: any): any[] {
    let nodes: any[] = [];
    if (_menus && _menus.length > 0) {
      _menus.forEach(menu => {
        // if (menu.PID === this.moduleId) {
        let node: any = {
          id: menu.ID,// 唯一身份
          name: menu.SCOMPANY_NAME,//默认显示申请，您可以设置displayField的options属性
          checked: false,// 指定是否选中复选框
          disableCheckbox: false,// 禁用复选框
          halfChecked: false,// 实现'全部检查'效果
          hasChildren: false,//对于异步数据加载，所以你需要设置getChildren的options属性
          DATA: menu
        };
        if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
          node.children = this.companyToTree(menu.P_CHILDMENUS);
          node.hasChildren = true;
        }
        nodes.push(node);
        // }
      });
    }
    return nodes;
  }
  /**
   * 根据单位隶属关系(SYS_COMPANY_RELATION)的组织机构代码(SORG_CODE)
   * 和上级组织机构代码(SPARENT_CODE)
   * 和单位基本信息表(SYS_COMPANY)关联显示中文名
   * 
   */

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
