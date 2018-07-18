import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { FCEVENT } from 'fccomponent/fc';
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
    return {
      ENABLE:'Y',
      WHERE:' AND 1=1'
    }
  }
  /**
 * 
 * @param eventName 事件名称
 * 选列表中的每行数据把每行数据的字段内容传递给修改页面
 */
listEvent(event: FCEVENT) {
  switch (event.eventName) {
    case "select":
      if (this.searchObj.WHERE && this.searchObj.WHERE.length !== 0) {
        this.searchObj.WHERE += " and appid in (select appid from sys_menu where pid='" + event.param.PID + "')";
      } else {
        this.searchObj.WHERE = " and appid in (select appid from sys_menu where pid='" + event.param.PID + "')";
      }
      this.search();
      break;
  }
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
