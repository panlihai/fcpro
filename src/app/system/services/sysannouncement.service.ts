/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SysmessageService } from './sysmessage.service';
@Injectable()
export class SysannouncementService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSNOTIFY");
  }
}