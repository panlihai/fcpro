/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysproductService } from './sysproduct.service';
import { SysdatasourceService } from './sysdatasource.service';
import { TreeOptions } from 'fccomponent';
import { element } from 'protractor';
import { SysappmodaleventdialogComponent } from '../components/core/dialog/sysappmodaleventdialog.component';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { Stream } from 'stream';
@Injectable()
export class SysappService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysappFielsService: SysappfieldsService,
    public sysproductService: SysproductService,
    public sysdatasourceService: SysdatasourceService,
    private modal: NzModalService, ) {
    super(providers, "SYSAPP");
    this.listOptions.fcAutoSave = true;
    this.listOptions.fcEnableEdit = true;
    this.listOptions.fcShowToolPanel = false;
    this.listOptions.fcPagination = false;
  }
  //树配置
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
  modifyAppFieldsName() {
    let ob = this.providers.daoService.getFromApi(this.getResourceUrl("modifyFieldsName"), {});
    ob.subscribe(result => {
      if (result.CODE === '0') {
        this.logService.debug(result);
      } else {
        this.logService.error(result.MSG);
      }
    });
  }
  /**
 * 字母快速查询
 */
  fastSearch() {
    let str = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let list = [];
    str.forEach(item => {
      list.push({
        'BUSTYPE': 'fastsearch',
        'ACTCODE': item,
        'BTNNAME': item
      });
    });
    return list;
  }
  /**
   * 获取产品
   */
  getproduct() {
    return this.sysproductService.findWithQuery({});
  }
  /**
   * 获取数据源
   */
  getdatasource() {
    return this.sysdatasourceService.findWithQuery({});
  }
  /**
  * 根据appid和appname获取当前元数据的ID
  * @param appid 
  * @param appname 
  */
  getID(appid,appname){
    return this.findWithQuery({ APPID: appid,APPNAME: appname })
  }
  /**
  * 根据appid获取模型属性数据
  * @param appid 
  */
  getSysAttributes(appid) {
    return this.appService.findWithQuery('SYSAPPFIELDS', { APPID: appid });
  }
  /**
  * 根据appid获取模型事件数据
  * @param appid 
  */
  getSysEvents(appid) {
    return this.appService.findWithQuery('SYSAPPBUTTONS', { APPID: appid });
  }
  /**
   * 根据appid获取模型接口数据
   * @param appid 
   */
  getSysInterfaces(appid) {
    return this.appService.findWithQuery('SYSINTERFACE', { APPID: appid })
  }
  /**
   * 根据appid获取与其它模型关系数据
   * @param appid 
   */
  getSysLinks(appid) {
    return this.appService.findWithQuery('SYSAPPLINKS', { MAINAPP: appid })
  }
  /**
  * 获取模型配置
  * @param dsid 
  */
  getModelOption(dsid: string, pid: string) {
    return this.providers.daoService.getFromApi(this.commonService.getUrlBy(this.moduleId, 'SYSMODEL', "findTableViewByDsid"), { DSID: dsid, PRODUCTID: pid })

  }
  /**
   * 获取模型字段
   * @param tableNames
   * @param dsid 
   */
  getModelField(tableNames: string, dsid: string, pid: string) {
    return this.providers.daoService.getFromApi(this.commonService.getUrlBy(this.moduleId, 'SYSMODEL', "findFieldByTablenames"), { DSID: dsid, PRODUCTID: 'SYSTEM', TABLENAMES: tableNames })
  }
  /** 
    *弹窗事件
    *@param event 
    *@param title
    *@param content 
    */
   WindowEvent(param: any, title, content) {
    return this.modal.open({
      title: title,
      content: content,
      width: '60%',
      zIndex:100,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        //把options对象传值给弹窗
        options: param,
      }
    })
  }
  /** 
    *编辑弹窗事件
    *@param event 
    *@param title
    *@param str
    *@param content 
    */
  WindowEditEvent(param: any, str:string,title, content){
    return this.modal.open({
      title: title,
      content: content,
      width: '70%',
      zIndex:100,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        //把options对象传值给弹窗
        options: param,
        strs:str
      }
    })
  }
}
