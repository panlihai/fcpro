import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent, ParentDetailComponent } from 'fccomponent';
@Component({
  selector: 'sysappdetail',
  template: `
  <fc-layoutpanel style="height:100%;">
      <fc-tlbform [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
      <fc-adform [fcAppid]="appId" ></fc-adform>
  </fc-layoutpanel>  
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
export class SysappdetailComponent extends ParentDetailComponent {
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  /**
   * 
   * @param eventName 事件名称
   * @param context 按钮内容
   */
  event(eventName: string, context: any): void {
    switch (eventName) {
      case 'modifyFields'://修改字段的英文名称为中文名称
        this.mainService.modifyAppFieldsName();
    }
  }
}
