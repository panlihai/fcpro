import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysassignmentService } from '../../services/sysassignment.service';
@Component({
    selector: 'sysassignment',
    template: `
    <fc-layoutpanel fcFull="true" >
      <fc-layoutrow fcSpan="34"  fccontent>
      <fc-title fccontent1 fcLabel="待办历史查看" fcheader fcBorder="bottom"></fc-title>
      <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event,saveObjs)"></fc-listdata>
      </fc-layoutrow>
    </fc-layoutpanel>
    `,
    styles: [`
    :host ::ng-deep .fc-layoutpanel .fc-content{
        height:100%;
      }
  `]
})
export class SysassignmentComponent extends ParentlistComponent {    
    content: string = "";
    versionSearchObj: any;
    saveObjs: any = {};
    init(): void {
    // 查询SYSASSIGNMENT所有元数据
    this.mainService.providers.appService.findWithQuery('SYSASSIGNMENT', {}).subscribe(result => {
      if (result.CODE === '0') {
        this.saveObjs = result.DATA;
      }
    })      
    }
    getDefaultQuery() {
    }

    event(eventName: string, context: any): void {
    }
    /**
   * 列表事件
   * @param context 
   */
  listdataEvent(context: any) {
    switch (context.eventName) {
      case 'listSearch':
      this.mainService.providers.msgService.message("立即查询事件触发")
      this.mainService.assignmentsearchMessage(this.router,this.saveObjs)
      break;
    }
  };
    constructor(public mainService: SysassignmentService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
}