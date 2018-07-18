import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, ParentlistComponent} from 'fccomponent';
import { SysbizcoderuleService } from '../../services/sysbizcoderule.service';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'sysbizcoderule',
    template: `  
    <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="80"  fccontent>
    <div fccontent1>
          <fc-tlblist [fcAppid]="'SYSBIZCODERULE'" (fcEvent)="tlblistEvent($event)" fcheader></fc-tlblist>
          <fc-layoutcol fcSpans="4,6" fccontent>
            <div fccontent1 style="margin:10px 0px;">
                <fc-layoutcol fccontent fcSpans="1,1">  
                    <fc-text  fccontent1  [fcAppid]="appId" fcLabel="规则名称"[(ngModel)]="searchObj.SBIZCODE_RULE_NAME" name="SBIZCODE_RULE_NAME"></fc-text>
                    <fc-text fccontent2  [fcAppid]="appId" fcLabel="所属应用" [(ngModel)]="searchObj.SYSBIZCODE_RULE_APPNAME" name="SYSBIZCODE_RULE_APPNAME" ></fc-text>
                </fc-layoutcol>
            </div>
            <div fccontent2 style="margin:10px 0px;">
                <fc-button fcLabel="查询" fcType="primary" (click)="search()"></fc-button>
                <fc-button fcLabel="重置" fcType="default" (click)="reset()"></fc-button>
            </div> 
       </fc-layoutcol> 
      </div>
    <fc-listdata fccontent2  [fcAppid]="appId" [fcOption]="mainService.fcOption" [fcPageSize]="20"  [fcCondition]="condition" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutrow>
  </fc-layoutpanel>
    `,
    styles: [`
  `]
})
export class SysbizcoderuleComponent extends ParentlistComponent {
  constructor(public mainService: SysbizcoderuleService,private modal: NzModalSubject,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public modalService: NzModalService) {
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

/**
 * 
 * @param eventName 事件名称
 * @param context 按钮内容
 */
event(eventName: string, context: any): void {
}
}