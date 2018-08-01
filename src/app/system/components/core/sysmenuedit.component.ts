import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { environment } from '../../../../environments/environment';
import { SysmenuService } from '../../services/sysmenu.service';
@Component({
  selector: 'sysmenuedit',
  template: `
  
  `,
  styles: [`
  
  `]
})
export class SysmenueditComponent extends ParentEditComponent {
  constructor(public mainService: SysmenuService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);  
  }
  init(): void {
    
  }
  event(eventName: string, context: any): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
}