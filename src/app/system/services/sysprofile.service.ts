/* 	个人信息维护服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysappfieldsService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { SysuserService } from './sysuser.service';
import { SysnavlinkService } from './sysnavlink.service';
@Injectable()
export class SysprofileService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysuserService: SysuserService,
    public navLinkService: SysnavlinkService, ) {
    super(providers, "SYSAPP");
  }
  /** YM
  *  获取快速导航标签数据流
  */
  getNavLinks() {
    return this.navLinkService.findWithQuery({});
  }
  /** YM
   *  初始化NavLink OBJ
   */
  getNavDefaultObj() {
    return this.providers.appService.initObjDefaultValue(
      this.navLinkService.app
    );
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
  /** YM
   *  获取快速导航标签名
   */
  getNavLabel(obj) {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ROUTER ='${obj.ROUTER}'`
    });
  }
  /** YM
   *  删除快速导航标签
   */
  deleteNavLink(link) {
    return this.navLinkService.delete(link);
  }
  /** YM
   *  获取系统子菜单数据用于快速导航标签
   */
  getSysChildMenu() {
    return this.providers.appService.findWithQuery("SYSCHILDMENU", {
      WHERE: `ENABLE='Y' AND USERID='${
        this.providers.userService.getUserInfo().ID
        }'`
    });
  }
}
