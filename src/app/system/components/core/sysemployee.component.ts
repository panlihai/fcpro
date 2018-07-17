import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
import { NzModalService } from 'ng-zorro-antd';
import { EventEmitter } from 'events';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
import { SysemployeeService } from '../../services/sysemployee.service';
@Component({
  selector: 'sysemployee',
  template: `
  <fc-layoutrow fcSpan="80" fcFull="true" class="usermanagement">
      <fc-layoutpanel fccontent1>
        <fc-tlblist fcheader [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <form fccontent class="list-search" name="searchForm" #searchForm>
            <div class="list-search-every list-search-every1">
                <fc-text fcLabel="姓名"  [fcAppid]="appId" [(ngModel)]="searchObj.SEMPLOYEE_NAME"  name="employeename" >
                </fc-text>
            </div>
            <div class="list-search-every list-search-every2">
                <fc-text fcLabel="单位" [fcAppid]="appId" [(ngModel)]="searchObj.SCOMPANY_CODE" name="department" >
                </fc-text>
            </div>
            <div class="list-search-every list-search-every3">
                <fc-text fcLabel="部门" [fcAppid]="appId" [(ngModel)]="searchObj.SDEPT_CODE" name="unit">
                </fc-text>
            </div>
            <div class="list-search-every list-search-button">
                <fc-button fcLabel="查询" fcType="primary" (click)="search()"></fc-button>
                <fc-button fcLabel="重置" fcType="default" (click)="reset()"></fc-button>
            </div>
        </form>  
      </fc-layoutpanel>
      <fc-listdata fccontent2  [fcAppid]="appId" [fcPageSize]="20"  [fcCondition]="condition" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutrow>
  `,
  styles: [`
  .usermanagement .list-search{
      border-bottom:none;
  }
  `]
})
export class SysemployeeComponent extends ParentlistComponent {
  constructor(public mainService: SysemployeeService,
    public router: Router,
    private _providers: ProvidersService,
    private modalService: NzModalService,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }
}