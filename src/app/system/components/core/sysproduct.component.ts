import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
@Component({
  selector: 'sysproduct',
  template: `
  <fc-layoutpanel fcFull="true">
  <fc-layoutrow fcSpan="30" style="height:100%;" fccontent>
      <fc-tlblist fccontent1 [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
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
export class SysproductComponent extends ParentlistComponent {
  constructor(public mainService: SysproductService,
    public router: Router,
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
