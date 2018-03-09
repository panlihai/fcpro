import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
@Component({
  selector: 'sysdatasource',
  template: `
    <fc-layoutpanel fcFull="true">
      <fc-layoutrow fcSpan="120" style="height:100%;" fccontent>
        <div fccontent1>
          <fc-tlblist  [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
          <div class="list-search">
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="坏账准备"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <div class="list-search-every"><fc-text fcLabel="应收金额"></fc-text></div>
            <fc-button fcLabel="查询" fcType="primary"></fc-button>
            <fc-button fcLabel="重置" fcType="primary"></fc-button>
          </div>
        </div>
        <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="fcListdataOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
      </fc-layoutrow>
    </fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clearfix:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  `]
})
export class SysdatasourceComponent extends ParentComponent {
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {

  }
  addNew(mainObj: any) {
  }
  getDefaultQuery() {
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {

  }
  event(eventName: string, context: any): void {
  }

}
