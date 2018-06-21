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
  findAllMessage(): Observable<any> {
    return this.findWithQuery({});
  }
  //获取默认的消息对象
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
    * 获取未读消息
    * */
  getMessageBy(param:any): Observable<any> {
    let user = this.providers.userService.getUserInfo();
    let obj = {
      NOTIFICATIONUSERID: user.USERCODE, PAGESIZE: 1000,  ORDER: "TS desc" 
    }
    Object.assign(obj,param);
    return this.findWithQuery(obj);
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
    feedBackObj.TS = this.commonService.getTimestamp()+"";
    feedBackObj.SORT = this.commonService.getTimestamp() + "";
    feedBackObj.TYPE = 'normal';
    feedBackObj.NOTIFICATIONUSERID = mainObj.POSTUSERID;
    return this.save(feedBackObj);
  }
}
export interface Sysmessage {
  SOURCEID: string;
  SORT: string;
  ISSEND: string;
  NOTIFICATIONUSERID: string;
  ID: string;
  TITLE: string;
  TYPE: string;
  CONTENT: string;
  NOTIFICATIONTIME: string;
  POSTTIME: string;
  POSTUSERID: string;
  ISREAD: string;
  APPID: string;
  SOURCEAID: string;
  TS: string;
}