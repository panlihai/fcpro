import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'sysapp',
  template: `
  <fc-layoutcol fcSpans="2,9" style="height:100%;" class="layoutcol-full">
    <fc-layoutpanel fcFull="true" fccontent2 fcTitle="元数据列表">    
      <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)" fcheader></fc-tlblist>
      <fc-layoutrow fcSpan="40" style="height:90%;" fccontent>
        <fc-searchlist  [fcAppid]="appId" fccontent1 (fcEvent)="searchlistEvent($event)"></fc-searchlist>
        <fc-listdata  fccontent2 style="height:100%;" [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)" [fcCondition]="condition"></fc-listdata>
      </fc-layoutrow>
    </fc-layoutpanel>
  </fc-layoutcol>  
  `, 
  styles: [`
 :host ::ng-deep .fc-layoutcol {
    height:100%;
  }
  :host ::ng-deep .fc-layoutgroup{
    height: calc(100% - 40px);    
  }
  :host ::ng-deep .fc-layoutgroup .fc-content {
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content {
    height:100%;
  }
  :host ::ng-deep .layoutcol-full>div>.fc-content2{
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
    width:24%;
    float:left;
  }
  `]
})
export class SysappComponent extends ParentlistComponent {
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
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
   * @param eventName 事件名称
   * @param context 按钮内容
   */
  event(eventName: string, context: any): void {
    switch (eventName) {
        case 'listAdd':
        this.listAdd(event);
        break;
    }
  }
  listAdd(event){
    this.router.navigate(["/" + environment.pid.toLocaleLowerCase()  + "/sysappAdd"])  
  }
}
