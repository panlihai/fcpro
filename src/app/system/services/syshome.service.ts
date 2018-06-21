/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService, ResponseResult } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService, NavLinkFunctionName, Args_NavLink } from "./sysnavlink.service";
import { GridApi, Column, ColumnApi } from "ag-grid";
import { SysannouncementService } from './sysannouncement.service';
import { Subject } from "rxjs";
import { FclistdataComponent } from "fccomponent";
import { SysmessageService } from "./sysmessage.service";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    private navLinkService: SysnavlinkService,
    public sysannouncementService: SysannouncementService
  ) { }
  /**
   * YM
   * 快速导航/自定义链接功能
   * @param fucName 
   * @param args 
   */
  NavLinkFunction(fucName: NavLinkFunctionName, args?: Args_NavLink): any {
    switch (fucName) {
      case NavLinkFunctionName.deleteSubject:
        return this.navLinkService.deleteSubject;
      case NavLinkFunctionName.getNavLinks:
        return this.navLinkService.getNavLinks();
      case NavLinkFunctionName.rebuildList_NavLink:
        return this.navLinkService.rebuildList_NavLink(args.navlinks);
      case NavLinkFunctionName.refreshNavLink:
        return this.navLinkService.refreshNavLink(args.navlinks);
      case NavLinkFunctionName.addNavLinkTag:
        return this.navLinkService.addNavLinkTag(args.navlinks, args.contentTpl, args.footerTpl, args.listdata);
      case NavLinkFunctionName.handleAddNavLink_ok:
        return this.navLinkService.handleAddNavLink_ok(args.listdata, args.navlinks, args.condition)
      case NavLinkFunctionName.handleAddNavLink_cancel:
        return this.navLinkService.handleAddNavLink_cancel();
      case NavLinkFunctionName.navLinkBeforeClose:
        return this.navLinkService.navLinkBeforeClose(args.link);
    }
  }
  navToByMenuId(router: Router, url: any) {
    return this.layoutService.navToByMenuId(router, url)
  }
}
