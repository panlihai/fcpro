/* 	首页主服务 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ProvidersService, ParentService } from "fccore";
import { LayoutService } from "./layout.service";
import { SysnavlinkService } from "./sysnavlink.service";
import { GridApi, Column, ColumnApi } from "ag-grid";
import { SysannouncementService } from './sysannouncement.service';
import { SyscontactService } from "./syscontact.service";
import { SysmessageService } from "./sysmessage.service";
@Injectable()
export class SyshomeService {
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService,
    public navLinkService: SysnavlinkService,
    public sysannouncementService: SysannouncementService,
    public syscontactService: SyscontactService,
    public sysmessageService:SysmessageService
  ) { }
  /**
    * 获取当前用户
    * */
  getUserinfo(): any {
    return this.providers.userService.getUserInfo();
  }
  /**
   * 获取当前用户和指定联系人的所有聊天内容
   * */
  getChatcontent(userid,pagesize,pagenum) {
    return this.providers.appService
      .findWithQuery("SYSMESSAGE", {
        "WHERE": " (NOTIFICATIONUSERID = '" + userid + "' and POSTUSERID = '" +
          this.providers.userService.getUserInfo().USERCODE + "') OR (NOTIFICATIONUSERID='" +
          this.providers.userService.getUserInfo().USERCODE + "' and POSTUSERID='" + userid + "')",
          "ORDER":"TS desc",
          "PAGESIZE": pagesize,
          "PAGENUM": pagenum,
      })
  }
  saveMessage_chat(obj){
    this.sysmessageService.save(obj).subscribe(res=>{
      if(res.CODE==='0'){
        this.providers.msgService.success("保存成功");
      }else if(res.CODE==='1'){
        this.providers.msgService.error("保存失败");
      }
    });
  }
}
