/* 	个人信息维护服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService, Sysmenu, Sysmessage } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysuserService } from './sysuser.service';
import { SyssessionService } from './syssession.service';
import { SysmessageService } from './sysmessage.service';
import { SyslogService } from './syslog.service';
import { SyscompanyService } from './syscompany.service';
import { SysemployService } from './sysemploy.service';
import { SysnavlinkService, Args_NavLink, NavLinkFunctionName } from './sysnavlink.service';
import { SysassignmentService } from './sysassignment.service';
@Injectable()
export class SysprofileService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysuserService: SysuserService,
    public sysnavlinkService: SysnavlinkService,
    public syssessionService: SyssessionService,
    public sysmessageService: SysmessageService,
    public syslogService: SyslogService,
    public syscompanyService: SyscompanyService,
    public sysemployService: SysemployService,
    public sysassignmentService: SysassignmentService
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
   * 消息
   * @param pageNum 分页
   * @param pageSize 分页大小
   */
  getSysmsg(pageNum: number, pageSize: number): Observable<any> {
    return this.sysmessageService.findWithQuery({ pageSize: pageSize, pageNum: pageNum });
  }
  /**
   * 消息被点击后已读
   * @param msg 
   */
  msgIsRead(msg: Sysmessage): Observable<any> {
    msg.ISREAD = 'Y';
    msg.TYPE = 'default';
    return this.sysmessageService.update(msg);
  }
  /**
   * 根据id删除消息
   * @param id 
   */
  deleteSysmsg(id: string): Observable<any> {
    return this.sysmessageService.delete({ ID: id });
  }
  /**
   * 待办
   * @param pageNum 分页
   * @param pageSize 分页大小
   */
  getSystask(pageNum: number, pageSize: number): Observable<any> {
    return this.sysassignmentService.findWithQuery({ pageSize: pageSize, pageNum: pageNum });
  }
  /**
 * 根据id删除任务
 * @param id 
 */
  deleteSystask(id: string): Observable<any> {
    return this.sysassignmentService.delete({ ID: id });
  }
  /**
 * 处理待办任务
 * @param msg 
 */
  handleTask(id: string): Observable<any> {
    return this.sysassignmentService.update({ ID: id });
  }
  /**
   * 日志
   * @param pageNum 分页
   * @param pageSize 分页大小
   */
  getSyslog(pageNum: number, pageSize: number): Observable<any> {
    return this.syslogService.findWithQuery({ pageSize: pageSize, pageNum: pageNum });
  }
  /**
   * 查询人员信息
   */
  getSysemployee(): Observable<any> {
    return this.sysemployService.findWithQuery({});
  }
  getSysuser(userId: string): Observable<any> {
    return this.sysuserService.findWithQuery({ ID: userId });
  }
  /**
   * 修改个人信息
   * @param obj 
   */
  editPersonelInfo(obj: any): Observable<any> {
    return this.providers.commonService.createObservableJoin([
      this.sysuserService.update(obj)
    ])
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
