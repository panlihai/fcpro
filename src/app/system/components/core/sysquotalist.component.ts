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
    <fc-title fctoolbar fcLabel="指标实例"></fc-title>
    <fc-layoutcol fccontent>
    <fc-radio fccontent1 fcLabel="条件类型：" [ngModel]="saveObj.CATAGORY" (ngModelChange)="handleChartType_Radio($event)" name="CATAGORY" [fcOption]="ChartType"></fc-radio>
    <fc-text fccontent2 fcLabel="图表ID：" [(ngModel)]="saveObj.DATAFROMEID" name="DATAFROMEID"></fc-text>
    <fc-text fccontent1 fcLabel="图表ID：" [(ngModel)]="saveObj.CHARTID" name="CATAGORY"></fc-text>

    </fc-layoutcol>
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
  saveObj: object = {};
  ChartType: any[] = [{ icon: '', label: '线性图', value: '0' }, { icon: '', label: '柱状图', value: '1' }, { icon: '', label: '饼状图', value: '2' }];
  constructor(
    public mainService: SysquotaService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    super(mainService, router, activeRoute);
  }
  init(): void {

   }
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
  handleChartType_Radio(ev: FCEVENT) {
    switch (ev.eventName) {
      case '0':

        break;
      case '1':

        break;
      case '2':

        break;
    }
  }
}
