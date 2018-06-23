/* 	元数据 */
import { Injectable, TemplateRef, ElementRef } from "@angular/core";
import { ParentService, ProvidersService } from "fccore";
import { NzModalService } from "ng-zorro-antd";
import { GridApi, ColumnApi } from "ag-grid";
import { runInThisContext } from "vm";
import { FclistdataComponent } from "fccomponent";
import { FCEVENT } from "fccomponent/fc";
import { LayoutService } from "./layout.service";
import { Subject } from "rxjs";
import { DEFAULT_RESIZE_TIME } from "@angular/cdk/scrolling";
@Injectable()
export class SysnavlinkService extends ParentService {
  currentModal_navLink: any;
  deleteSubject = new Subject();
  constructor(public providers: ProvidersService, public nzModal: NzModalService, public layoutService: LayoutService
  ) {
    super(providers, "SYSNAVLINK");
  }
  /**YM
   * 处理链接删除
   * @param link 
   */
  navLinkBeforeClose(link: any) {
    let success: boolean = false;
    this.providers.msgService.confirm("是否确认删除该快速导航标签？", () => {
      this.delete(link).subscribe(res => {
        if (res.CODE === "0") this.providers.msgService.success("删除成功");
        else this.providers.msgService.warm("删除失败");
      });
      success = true;
      setTimeout(() => {
        this.deleteSubject.next(success);
      });
    },
      () => {
        success = false;
      }
    );
    return success;
  }
  /**YM
   * 处理弹窗确认事件
   * @param navLink_listdata 
   * @param navLinks 
   * @param navLinkListCondition 
   */
  handleAddNavLink_ok(navLink_listdata: FclistdataComponent, navLinks: Array<any>, navLinkListCondition: any) {
    let gridApi: GridApi = navLink_listdata._gridApi;
    let column: ColumnApi = navLink_listdata._gridColumnApi;
    let selected = gridApi.getSelectedRows();
    if (selected.length === 0) {
      this.currentModal_navLink.destroy("onOk");
      this.currentModal_navLink = null;
    }
    let count = navLinks.length + selected.length;
    if (count <= 8) {
      let saveObjs: any = [];
      selected.forEach(el => {
        let saveObj = this.getNavDefaultObj();
        for (let key in el) {
          if (key === "PID") saveObj[key] = el[key];
          if (key === "ROUTER") saveObj[key] = el[key];
        }
        saveObj["CREATETIME"] = this.getNowTimeStamp() + "";
        saveObj["LASTMODIFY"] = this.getNowTimeStamp() + "";
        saveObj["USERID"] = this.getNowUserId();
        saveObj["CATAGORY"] = "private";
        delete saveObj["ID"];
        saveObjs.push(saveObj);
      });
      this.saveNavLinks(saveObjs);
      this.currentModal_navLink.destroy("onOk");
      this.currentModal_navLink = null;
      return true;
    } else {
      this.providers.msgService.warm("快速导航标签不能超过8个");
      return false;
    }
  }
  /** YM
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
   * 刷新快速导航标签
   */
  refreshNavLink(navLinks: Array<any>) {
    navLinks.forEach(link => {
      this.getNavLabel(link).subscribe(res => {
        if (res.CODE === "0") link["LABEL"] = res.DATA[0].MENUNAME;
      });
    });
  }
  /**YM
   * 处理新增快速导航标签事件
   * @param navLinks 
   * @param contentTpl 
   * @param footerTpl 
   * @param navLink_listdata 
   */
  addNavLinkTag(navLinks: Array<any>, contentTpl: any, footerTpl: any, navLink_listdata: FclistdataComponent): boolean {
    if (navLinks.length < 8) {
      this.currentModal_navLink = this.nzModal.open({
        title: "新增快速导航标签",
        content: contentTpl,
        footer: footerTpl,
        style: { width: "50%" },
        wrapClassName: "vertical-top-modal",
        maskClosable: false,
        zIndex: 998,
        onOk: function () { },
        onCancel: function () { }
      });
      return true;
    } else {
      this.providers.msgService.warm("快速导航标签不能超过8个");
      return false;
    }
  }
  /** YM
   * 重构查询条件并返回
   * @param array
   */
  rebuildList_NavLink(navLinks: Array<any>): object {
    let exitsRouters: any = [];
    let navLinkListCondition: any = {};
    navLinks.forEach(el => {
      exitsRouters.push(el.ROUTER);
    });
    let s = this.arrayToSqlString(exitsRouters);
    if (s) {
      navLinkListCondition = {
        WHERE: `ENABLE='Y' AND APPID!='null' AND APPID!='SYSCOMPONENT' AND MENUTYPE='APP' AND ROUTER!='null' AND ROUTER NOT IN (${s})`
      };
    } else {
      navLinkListCondition = {
        WHERE: `ENABLE='Y' AND APPID!='null' AND APPID!='SYSCOMPONENT' AND MENUTYPE='APP' AND ROUTER!='null'`
      };
    }
    return navLinkListCondition;
  }
  /** YM
   *  获取快速导航标签数据流
   */
  getNavLinks() {
    return this.findWithQuery({});
  }
  /** YM
   *  初始化NavLink OBJ
   */
  getNavDefaultObj() {
    return this.providers.appService.initObjDefaultValue(this.app);
  }
  /** YM
   *  获取当前时间戳
   */
  getNowTimeStamp() {
    return this.providers.commonService.getTimestamp();
  }
  /** YM
   *  获取当前用户ID
   */
  getNowUserId() {
    return this.providers.userService.getUserInfo().ID;
  }
  /** YM
   *  保存快速导航标签
   */
  saveNavLinks(saveObjs) {
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
  /** YM
   *  获取快速导航标签名
   */
  getNavLabel(obj) {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ROUTER ='${obj.ROUTER}'`
    });
  }
  /** YM
   *  获取系统子菜单数据用于快速导航标签
   */
  getSysChildMenu() {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ENABLE='Y' AND USERID='${this.providers.userService.getUserInfo().ID}'`
    });
  }
  /**YM
   * 处理弹出取消事件
   */
  handleAddNavLink_cancel() {
    this.currentModal_navLink.destroy("onCancel");
    this.currentModal_navLink = null;
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
    fcPagination: false,
    //是否显示分组
    fcRowGroupPanelShow: "onlyWhenGrouping",
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: "multiple",
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  };
}
/**
 * YM
 * 快速导航/自定义链接功能的枚举值
 */
export const enum NavLinkFunctionName {
  deleteSubject,
  getNavLinks,
  rebuildList_NavLink,
  refreshNavLink,
  addNavLinkTag,
  handleAddNavLink_ok,
  handleAddNavLink_cancel,
  navLinkBeforeClose,
}
export interface Args_NavLink {
  navlinks?: Array<any>,
  contentTpl?: any,
  footerTpl?: any,
  listdata?: FclistdataComponent,
  condition?: any,
  link?: any
}