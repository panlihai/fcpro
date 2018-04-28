import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
@Component({
  selector: 'sysproduct',
  template: `
    <fc-layoutrow fcSpan="80" style="height:100%;">
      <fc-layoutpanel fccontent1>
        <fc-tlblist fctoolbar [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <form fccontent class="list-search" name="searchForm" #searchForm>
            <div class="list-search-every list-search-every1">
                <fc-combo fcLabel="" [fcAppid]="appId" fcRequired="false" fcFieldCode='ENABLE' [(ngModel)]="searchObj.ENABLE" fcValueCode='DICVALUE'
                    fcLabelCode='DICDESC' name="ENABLE"></fc-combo>
            </div>
            <div class="list-search-every list-search-every2">
                <fc-text [fcAppid]="appId" fcRequired="false" fcFieldCode='PNAME' [(ngModel)]="searchObj.PNAME" name="productname" [fcOption]="{field:{FIELDCODE:'PNAME'}}"></fc-text>
            </div>
            <div class="list-search-every list-search-button">
                <fc-button fcLabel="查询" fcType="primary" (click)="search()"></fc-button>
                <fc-button fcLabel="清空" fcType="default" (click)="reset()"></fc-button>
            </div>
        </form>  
      </fc-layoutpanel>
      <fc-listdata fccontent2  [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutrow>
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
    switch (eventName) {
      case "doAction":
        this.mainService.doAction().subscribe(result=>{
          if(result.CODE==='0'){
            this.messageService.error(JSON.stringify(result.DATA));
          }
        });
        break;
    }
  }

}
