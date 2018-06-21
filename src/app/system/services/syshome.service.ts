/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService } from "./sysnavlink.service";
import { GridApi, Column, ColumnApi } from "ag-grid";
import { SysannouncementService } from './sysannouncement.service';
import { SysversionService } from "./sysversion.service";
import { SysmessageService } from "./sysmessage.service";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    public navLinkService: SysnavlinkService,
    public sysversionService: SysversionService,
    public sysannouncementService: SysannouncementService,
    public sysmessageService:SysmessageService
  ) { }
  /**
   * 获取版本信息
   */
  getSysversion() {
    this.sysversionService.getSysversion();
  }
}
