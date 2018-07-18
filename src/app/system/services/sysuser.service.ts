/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysmessageService, CommonService } from 'fccore';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
@Injectable()
export class SysuserService extends ParentService {
  constructor(public providers: ProvidersService,
    public nzModal: NzModalService
  ) {
    super(providers, "SYSUSER");
  }
  getPwd(): Observable<any> {
    return this.findWithQueryAll({});
  }
  /**
   * 模拟发送短信
   * @param telsms 
   */
  createSms(telsms): Observable<any> {

    let url = this.commonService.getUrlBy(this.moduleId, "SYSTELSMS", "CREATE");
    return this.providers.daoService.postFromApi(url, telsms);
  }
  /**
    * 重置密码自定义接口
    * @param params 
    */
  resetPwd(telsms, param): Observable<any> {
    param.SMSCODE = telsms.SMSCODE;
    param.MOBILEPHONE = telsms.MOBILEPHONE;
    param.RANDOM = telsms.RANDOM;
    param.USERCODE = this.userInfo.USERCODE;
    return this.providers.daoService.getFromApi(this.getResourceUrl('RESETPWD'), param);
  }

  doReset(event) {
    if (event.hasOwnProperty('lastPwd')) {
      this.userService.login(this.userInfo.USERCODE, event.lastPwd).subscribe(result1 => {
        if (result1.CODE === '0') {
          let param = { PASSWORD: event.newPwd };
          let telsms = {
            MOBILEPHONE: this.userInfo.TEL,//	手机号
            RANDOM: this.commonService.Random(6),//随机数
            SMSCODE: this.commonService.Random(4),//验证码
            CREATTIME: this.commonService.getTimestamp(),//创建时间
            TOKEN: this.cacheService.getS('token'),//用户凭证
            PID: this.moduleId,//产品id
          };
          this.createSms(telsms).subscribe(result2 => {
            if (result2.CODE === '0') {
              this.resetPwd(telsms, param).subscribe(result3 => {
                if (result3.CODE === '0') {
                  this.messageService.message('修改密码成功！');
                } else {
                  this.messageService.error(result3.MSG);
                }
              })
            } else {
              this.messageService.error('修改密码失败！')
            }
          });
        } else {
          this.messageService.error('原密码不正确！')
        }
      });
    }
  }
  /**
   * 获取所有的用户
   */
  getUser() {
    return this.providers.appService.findWithQuery("SYSUSER", {})
  }
  /**
   * 根据userid获取用户角色
   * @param uerid 
   */
  getuserRole(uerid) {
    return this.providers.appService.findWithQuery('SYSROLEUSER', { USERID: uerid })
  }
  /**
 * 将当前用户的角色信息全部删除
 * @param userid 
 */
  alldelete(userid) {
    return this.providers.appService.deleteObject('SYSROLEUSER', userid).subscribe(res => {
      if (res.CODE === '0') {
      } else if (res.CODE === '1') {
        this.providers.msgService.error("删除失败");
      }
    })
  }
  /**
 * 将修改的用户的角色添加到数据库
 * @param obj 
 */
  editUserrole(obj) {
    return this.providers.appService.saveObject('SYSROLEUSER', obj).subscribe(res => {
      if (res.CODE === '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE === '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
}
export interface Sysuser {
  ID: string;//	主键id 
  USERCODE: string; //用户编码 
  NAME: string; //用户名称
  PASSWORD: string; //密码 
  PERSONID: string;// 人员id 
  AVAILABLEDATE: number;// 有效期
  DISABLEDATE: number; //失效期
  SORT: number;// 排序
  STOPFLAG: string;// 停用
  REMARK: string;// 备注 
  COMPANYCODE: string; //单位编码 
  DEPTCODE: string; //部门编码 
  SYSMANAGER: string; //管理员 
}
