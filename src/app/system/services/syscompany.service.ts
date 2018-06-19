/* 	单位服务 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
@Injectable()
export class SyscompanyService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPANY");
  }
}

export interface Syscompany {
  ID: string;	//
  PID: string;	//
  CODE: string;	//
  NAME: string;	//
  TYPECODE: string;	//
  SHORTNAME: string;	//
  SPELLINGCODE: string;	//
  PARENTCODE: string;	//
  ALLPARENTCODE: string;	//
  ISLASTLEVEL: string;	//
  ADDRESS: string;	//
  ZIPCODE: string;	//
  CONTACTPERSON: string;	//
  TELEPHONE: string;	//
  AVAILABLEDATE: string;	//
  DISABLEDATE: string;	//
  SORT: number;	//
  STOPFLAG: string;	//
  CW_CODE: string;	//
  CW_NAME: string;	//
  GROUP_CODE: string;	//
  GROUP_NAME: string;	//
  ILEVEL: number;	//
}
