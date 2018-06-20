import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  ParentlistComponent,
  ParentDetailComponent,
  ParentEditComponent
} from "fccomponent";
import { SysannouncementService } from "../../services/sysannouncement.service";
import { FCEVENT } from "fccomponent/fc";
import { SysquotaService } from "../../services/sysquota.service";
@Component({
  selector: "sysquota",
  template: `
    <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="220"  fccontent>
      <div fccontent1>
           <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
           <fc-layoutcol fcSpans="1,1" fccontent>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入标题" fcLabel="标题" [(ngModel)]="saveObj.TITLE" name="TITLE"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入发布人" fcLabel="发布人" [(ngModel)]="saveObj.PUBLISHUSER" name="PUBLISHUSER" ></fc-text>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入发布单位" fcLabel="发布单位" [(ngModel)]="saveObj.PUBLISHDEPT" name="PUBLISHDEPT"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入公告类型" fcLabel="公告类型" [(ngModel)]="saveObj.CATAGORY" name="CATAGORY" ></fc-text>
           </fc-layoutcol>
           <fc-textarea fccontent fcCol="1" fcRows="2" [fcAppid]="appId" [(ngModel)]="saveObj.CONTENT" fcPlaceHolder="请输入发布内容" fcLabel="发布内容" name="DESCRIPTION"></fc-textarea>
           <div fccontent style="text-align:center;">
              <fc-button fccontent1 [fcLabel]="btn_1_label" fcType="primary" (click)="Btn1_Events(versionCode,btn_1_label)"></fc-button>
              <fc-button fccontent2 [fcLabel]="btn_2_label" fcType="default" (click)="Btn2_Events(btn_2_label)"></fc-button>
              <fc-button fccontent2 [fcLabel]="btn_3_label" fcType="default" (click)="Btn3_Events(btn_3_label)"></fc-button>
           </div>
      </div>
    <fc-listdata  fccontent2 [fcCondition]="versionSearchObj"  [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutrow>
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
export class SysquotaEditComponent extends ParentEditComponent {
  constructor(
    public mainService: SysquotaService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    super(mainService, router, activeRoute);
  }
  init(): void { }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void { }
}
