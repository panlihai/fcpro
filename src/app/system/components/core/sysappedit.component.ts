import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
@Component({
  selector: 'sysappedit',
  template: `
  <fc-layoutpanel style="height:100%;">
      <fc-tlbform [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
      <fc-adform [fcAppid]="appId" ></fc-adform>
  </fc-layoutpanel>  
  `,
  styles: [`
 
  `]
})
export class SysappeditComponent extends ParentEditComponent {
  tlbBtns:Sysappbuttons[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  
 
}
