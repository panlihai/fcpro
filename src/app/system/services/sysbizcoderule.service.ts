/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysbizcodedefineService } from './sysbizcodedefine.service';
import { Router } from '@angular/router';
import { LayoutService } from './layout.service';
import { SysappService } from './sysapp.service';
import { Observable } from 'rxjs';
@Injectable()
export class SysbizcoderuleService extends ParentService {
  currentModal_navLink: any;
  constructor(public providers: ProvidersService
       , public sysbizcodedefineService: SysbizcodedefineService,
       public layoutService: LayoutService,
       public sysappService: SysappService
  ) {
    super(providers, "SYSBIZCODERULE");
    this.listOptions.fcEnableEdit = false;
  }
  // 消息公告动态设置路由，点击那条数据通过ID区别路由不同
  bizcoderuleRouter(appId,routerParam){
    return this.appService.findWithQuery(appId, { WHERE: `ID='${routerParam.PARAM}'` })
  } 
  /**
     * 获取当前编码规则的所有内容
     * */
    getassignment() {
      return this.providers.appService.findWithQuery("SYSBIZCODERULE", {})
  }
   /**
     * 获取当前所属应用的所有内容
     * */
    applicationall() {
      return this.providers.appService.findWithQuery("SYSAPP", {})
    }
   /**
     * 获取当前编码规则的所有内容
     * */
    rulemodal() {
      return this.providers.appService.findWithQuery("SYSBIZCODEDEFINE", {})
    }
 // 字表数据修改保存
 updatesave(obj) {
  return this.providers.appService.updateObject('SYSBIZCODERULE', obj).subscribe(res => {
    if (res.CODE = '0') {
      this.providers.msgService.success('保存成功');
    } else if (res.CODE = '1') {
      this.providers.msgService.error('保存失败')
    }
  })
}
 // 字表数据修改保存
  rulemodalObjsave(obj) {
  return this.providers.appService.saveObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
    if (res.CODE = '0') {
      this.providers.msgService.success('保存成功');
    } else if (res.CODE = '1') {
      this.providers.msgService.error('保存失败')
    }
  })
}
/**
 * 将新增的用户的信息添加到数据库写到service下面
 */
addUser(obj){
 return this.save(obj).subscribe(res => {
    if(res.CODE='0'){
      this.messageService.success('保存成功');
    }else{
      this.messageService.warm("保存失败");
    }
  });
 }
  /**
  * 将修改后的用户信息更新到数据库
  */
 editUser(obj: any): Observable<any> {
    return this.updateList(obj);
  }
  // 字表数据修改保存s
  childrensave(obj) {
    return this.providers.appService.updateObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
   // 字表数据修改保存
   parentsave(obj) {
    return this.providers.appService.updateObject('SYSBIZCODERULE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
    /**YM
   * 处理弹出取消事件
   */
  handleAddNavLink_cancel() {
    this.currentModal_navLink.destroy("onCancel");
    this.currentModal_navLink = null;
  }
  navToByMenuId(router: Router, url: any) {
    return this.layoutService.navToByMenuId(router, url)
  }
  modifyAppFieldsName() {
    let ob = this.providers.daoService.getFromApi(this.getResourceUrl("modifyFieldsName"), {});
    ob.subscribe(result => {
      if (result.CODE === '0') {
        this.logService.debug(result);
      } else {
        this.logService.error(result.MSG);
      }
    });
  }
}

export interface Sysbizcoderule {
}
