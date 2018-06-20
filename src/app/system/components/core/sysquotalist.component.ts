import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ParentlistComponent } from "fccomponent";
import { SysannouncementService } from "../../services/sysannouncement.service";
import { FCEVENT } from "fccomponent/fc";
import { SysquotaService } from "../../services/sysquota.service";
@Component({
  selector: "sysquota",
  template: `
  <fc-layoutpanel fcFull="true">
    <fc-tlblist fctoolbar [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
    <fc-listdata fccontent  [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
  </fc-layoutpanel>
    `,
  styles: [
    `
      :host ::ng-deep .fc-layoutpanel .fc-content {
        height: 100%;
      }
      .list-search {
        width: 100%;
      }
      .list-search:after {
        content: "";
        display: block;
        clearfix: both;
      }
      .list-search-every {
        width: 24%;
        float: left;
      }
      .listdata {
        height: 100%;
      }
    `
  ]
})
export class SysquotalistComponent extends ParentlistComponent {
  constructor(
    public mainService: SysquotaService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    super(mainService, router, activeRoute);
  }
  init(): void { }
  getDefaultQuery() { }
  tlblistEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case "listAdd":
        break;
      default:
        break;
    }
  }
  event(eventName: string, context: any): void { }
}
