/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService } from "./sysnavlink.service";
import { GridApi, Column, ColumnApi } from "ag-grid";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    public navLinkService: SysnavlinkService
  ) {}
  getNavLinks() {
    return this.navLinkService.findWithQuery({});
  }
  getNavDefaultObj() {
    return this.providers.appService.initObjDefaultValue(
      this.navLinkService.app
    );
  }
  getNowTimeStamp() {
    return this.providers.commonService.getTimestamp();
  }
  getNowUserId() {
    return this.providers.userService.getUserInfo().ID;
  }
  saveNavLinks(saveObjs) {
    saveObjs.forEach(el => {
      this.navLinkService.save(el).subscribe(res => {
        if (res.CODE === "0") {
          this.providers.msgService.success("快速导航标签更新成功");
        } else {
          this.providers.msgService.warm("快速导航标签更新失败");
        }
      });
    });
  }
  getNavLabel(obj) {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ROUTER ='${obj.ROUTER}'`
    });
  }
  deleteNavLink(link) {
    return this.navLinkService.delete(link);
  }
  getSysChildMenu() {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ENABLE='Y' AND USERID='${this.providers.userService.getUserInfo().ID}'`
    });
  }
  listOptions = {
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
