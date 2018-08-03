/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';
import { SysappService } from './sysapp.service';
@Injectable()
export class SysapplinksService extends ParentService {
  constructor(public providers: ProvidersService,
    public sysappService: SysappService,
    public modalService: NzModalService) {
    super(providers, "SYSAPPLINKS");
  }
    /**
    *  按钮跳转路由方法封装 查看数据源  查看服务   返回列表 方法
    * @param event  
    */ 
   producticonmodal(title,content): Observable<any> {
    return this.modalService.open({
      title: title,
      content: content,
      width: "50%",
      zIndex:999,
      onOk() {
      },
      onCancel() { },
      footer: false,
      componentParams: {
        options: {
        }
      }
    })
  }
  /**
    *  获取APPLINKS所有数据
    * @param event  
    */ 
  applinksall(){
    return this.providers.appService.findWithQuery('SYSAPP',{})
  } 
     //保存appbuttons表
	childrensave(obj) {
    return this.providers.appService.saveObject('SYSAPPLINKS', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
    	//修改子表数据
	childrenupdate(obj) {
    return this.providers.appService.updateObject('SYSAPPLINKS', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
}
export interface Sysapplinks {
 
}