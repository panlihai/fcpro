/* 	在线用户 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
@Injectable()
export class SyssessionService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSSESSION");
  } 
}
export interface Syssession {
  TOKEN: string;	//用户凭证
  LOGTIME: number;	//登录时间
  SESSIONID: string;	//sessionid
  LASTLOGOUTTIME: number;	//注销时间
  STATUS: string;	//状态
  PID: string;	//产品id
  USERID: string;	//登录用户id

}