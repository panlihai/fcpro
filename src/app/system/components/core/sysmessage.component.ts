import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FcadformOption, ParentlistComponent } from 'fccomponent';
import { SysmessageService } from 'fccore';
@Component({
  selector: 'sysmessage',
  template: `
  <fc-layoutpanel fcFull="true">
      <fc-layoutrow fcSpan="30" style="height:100%;" fccontent>
          <fc-tlblist  fccontent1 [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
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
    clear:both;
  }
  .list-search-every{
    width:25%;
    float:left;
    margin-top:5px;
  }
  `]
})
export class SysmessageComponent extends ParentlistComponent {
  constructor(public mainService: SysmessageService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
    switch (eventName) {
      case 'selected':
        break;
      case 'rowClick':
        break;
      case 'listEdit'://修改
        break;
      case 'cardBack':
        break;
    }
  }
}
