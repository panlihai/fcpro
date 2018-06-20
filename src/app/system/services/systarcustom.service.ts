/* 	客户基本信息 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysmenuService } from 'fccore';
@Injectable()
export class SystarCustomService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "AR09TARCUSTOM");
  }
}
