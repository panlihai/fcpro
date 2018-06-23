/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SysmessageService } from './sysmessage.service';
@Injectable()
export class SysannouncementService extends ParentService {
  saveObj: any = {};
  constructor(public providers: ProvidersService) {
    super(providers, "SYSNOTIFY");
  }
  // 
  initObjDefaultValue(mainApp){
    this.appService.initObjDefaultValue(mainApp)
  }
  // 消息公告动态设置路由，点击那条数据通过ID区别路由不同
  announcementRouter(appId,routerParam){
    return this.appService.findWithQuery(appId, { WHERE: `ID='${routerParam.PARAM}'` })
  }   
}
export interface Sysnotify {
 	CONTENT:string;//	内容	-	-	字符型	0	否	0	是	否	否	是	是	文本框	-	-	-	a
	TITLE	:string;//标题	-	-	字符型	32	是	1	是	否	否	是	是	文本框	-	-	-	a
  ID: string;	//ID主键	-	-	字符型	40	是	2	是	否	否	是	是	文本框	-	-	-	1
	CATAGORY: string;//	公告类型	-	-	字符型	1	否	3	是	否	否	是	是	文本框	-	-	-	a
	PUBLISHUSER:string;	//发布人	-	-	字符型	32	是	4	是	否	否	是	是	文本框	-	-	-	a
	NEEDBACK:string;	//需要回执	-	-	字符型	100	是	5	是	否	否	是	是	文本框	-	-	-	a
	PUBLISHDEPT:string;	//发布单位	-	-	字符型	22	是	6	是	否	否	是	是	文本框	-	-	-	a
	ISREADED:string;	//已读？	SYSYORNZH	N	字符型	1	是	7	是	否	否	是	是	单选框	-	-
}
