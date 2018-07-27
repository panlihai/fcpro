/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProvidersService, ParentService } from 'fccore';
import { SysproductService } from './sysproduct.service';
import { SysnavlinkService, NavLinkFunctionName, Args_NavLink } from './sysnavlink.service';
import { SysserviceService } from './sysservice.service';
@Injectable()
export class SyswizardService extends ParentService {
    constructor(public providers: ProvidersService,
        public sysproductService: SysproductService,
        public sysnavlinkService: SysnavlinkService,
        public sysserviceService: SysserviceService,
    ) {
        super(providers, "SYSPRODUCT");
    }
    /**
     * 获取产品项目
     * @param param 
     */
    findService(param: any): Observable<any> {
        return this.sysserviceService.findWithQuery(param);
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
