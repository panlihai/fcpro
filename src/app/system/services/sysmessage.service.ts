/* 	消息 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { TimelineOptions } from 'fccomponent/fcbasic/fctimeline.component';
@Injectable()
export class SysmessageService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSMESSAGE");
  }
  /**
   * 获取消息对象
   */
  initTimelineOption(): any {
    return {
      fcAppid: '',
      fcLabelCode: 'TS',
      fcTitleCode: 'TITLE',
      fcSmarkCode: 'CONTENT',
      fcColorCode: 'TYPE',
      fcReadCode: 'ISREAD',
      fcId: 'ID'
    }
  }
  /**
   * 根据条件获取消息
   * @param param 
   */
  getMessageBy(param: any): Observable<any> {
    let user = this.providers.userService.getUserInfo();
    let obj = {
      NOTIFICATIONUSERID: user.USERCODE, PAGESIZE: 1000, ORDER: "TS desc"
    }
    Object.assign(obj, param);
    return this.findWithQuery(obj);
  }
  /**
   * 查询已回复内容
   * @param mainObjId 
   */
  findAllMessage(mainObjId): Observable<any> {
    return this.findWithQuery({ SOURCEAID: 'SYSMESSAGE', SOURCEID: mainObjId, ORDER: 'TS DESC'});
  }
  /**
   * 回复消息
   * @param feedBackObj 
   * @param mainObj 
   */
  feedBack(feedBackObj: Sysmessage, mainObj: any): Observable<any> {
    feedBackObj.SOURCEAID = 'SYSMESSAGE';
    feedBackObj.SOURCEID = mainObj.ID;
    feedBackObj.ISREAD = 'N';
    feedBackObj.ISSEND = 'N';
    feedBackObj.POSTTIME = this.commonService.getTimestamp() + "";
    feedBackObj.POSTUSERID = this.userInfo.USERID;
    feedBackObj.TITLE = '回复-' + mainObj.TITLE;
    feedBackObj.TS = this.commonService.getTimestamp() + "";
    feedBackObj.SORT = this.commonService.getTimestamp() + "";
    feedBackObj.TYPE = 'normal';
    feedBackObj.NOTIFICATIONUSERID = mainObj.POSTUSERID;
    return this.save(feedBackObj);
  }
}
export interface Sysmessage {
  ID: string;//主键ID
  TITLE: string;//标题
  NOTIFICATIONUSERID: string;//接收用户
  TYPE: string;//消息类型
  CONTENT: string;//内容
  NOTIFICATIONTIME: string;//接收用户
  POSTTIME: string;//发送时间
  POSTUSERID: string;//发送人
  ISREAD: string;//已读?
  PID: string;//产品ID
  SOURCEAID: string;//关联对象元数据
  SOURCEID: string;//关联对象表中具体数据id
  SORT: string;//	排序
  TS: string;//时间戳
  ISSEND: string;//推送?
}