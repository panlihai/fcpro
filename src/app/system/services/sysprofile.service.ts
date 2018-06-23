/* 	个人信息维护服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService, Sysmenu } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysuserService } from './sysuser.service';
import { SyssessionService } from './syssession.service';
import { SysmessageService } from './sysmessage.service';
import { SyslogService } from './syslog.service';
import { SyscompanyService } from './syscompany.service';
import { SysemployService } from './sysemploy.service';
import { SysnavlinkService, Args_NavLink, NavLinkFunctionName } from './sysnavlink.service';
@Injectable()
export class SysprofileService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysuserService: SysuserService,
    public sysnavlinkService: SysnavlinkService,
    public syssessionService: SyssessionService,
    public sysmessageService: SysmessageService,
    public syslogService: SyslogService,
    public syscompanyService: SyscompanyService,
    public sysemployService: SysemployService
  ) {
    super(providers, "SYSUSER");
  }
  //获取在线用户登录时间
  getSigninTime(): Observable<any> {
    return this.syssessionService.findWithQuery({});
  }
  /**
   * 重置密码
   * @param event 
   */
  doReset(event) {
    this.sysuserService.doReset(event);
  }
  /**
   * 
   * @param pageNum 分页
   * @param pageSize 分页大小
   */
  getSysmsg(pageNum: number, pageSize: number): Observable<any> {
    return this.sysuserService.findWithQuery({ pageSize: pageSize, pageNum: pageNum });
  }
  /**
   * 删除一条消息记录
   */
  deleteOneMsg() {

  }
  /**
   * YM
   * 快速导航/自定义链接功能
   * @param fucName 
   * @param args 
   */
  NavLinkFunction(fucName: NavLinkFunctionName, args?: Args_NavLink): any {
    let trn: any;
    switch (fucName) {
      case NavLinkFunctionName.deleteSubject:
        trn = this.sysnavlinkService.deleteSubject;
        break;
      case NavLinkFunctionName.getNavLinks:
        return this.sysnavlinkService.getNavLinks();
      case NavLinkFunctionName.rebuildList_NavLink:
        return this.sysnavlinkService.rebuildList_NavLink(args.navlinks);
      case NavLinkFunctionName.refreshNavLink:
        return this.sysnavlinkService.refreshNavLink(args.navlinks);
      case NavLinkFunctionName.addNavLinkTag:
        return this.sysnavlinkService.addNavLinkTag(args.navlinks, args.contentTpl, args.footerTpl, args.listdata);
      case NavLinkFunctionName.handleAddNavLink_ok:
        return this.sysnavlinkService.handleAddNavLink_ok(args.listdata, args.navlinks, args.condition)
      case NavLinkFunctionName.handleAddNavLink_cancel:
        return this.sysnavlinkService.handleAddNavLink_cancel();
      case NavLinkFunctionName.navLinkBeforeClose:
        return this.sysnavlinkService.navLinkBeforeClose(args.link);
    }
  }
}
