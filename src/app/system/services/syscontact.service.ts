/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
@Injectable()
export class SyscontactService extends ParentService {
  sysversionService: any;
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCONTACT");
  }
}