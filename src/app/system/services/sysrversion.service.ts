/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
@Injectable()
export class SysversionService extends ParentService {
  sysversionService: any;
  constructor(public providers: ProvidersService, public datePipe: DatePipe) {
    super(providers, "SYSVERSION");
  }
  /**
* 获取2018/2/1 01:01:01这样的时间格式
* @param time 
*/
  timeformat(time?: any): string {
    time = time === undefined ? new Date() : time;
    return this.datePipe.transform(time, 'yyyy/MM/dd HH:mm:ss');
  }
}