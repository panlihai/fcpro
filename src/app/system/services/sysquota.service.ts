/* 	元数据 */
import { Injectable } from "@angular/core";
import { ParentService, ProvidersService } from "fccore";
import { Observable } from "rxjs";
import { DatePipe } from "@angular/common";
import { LayoutService } from "./layout.service";
@Injectable()
export class SysquotaService extends ParentService {
  sysversionService: any;
  constructor(
    public providers: ProvidersService,
    public layoutService: LayoutService
  ) {
    super(providers, "SYSQUOTA");
  }
}
