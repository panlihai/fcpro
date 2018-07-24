import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
@Component({
  selector: 'sysappmodify',
  template: `
  
  `,
  styles: [`
  
  `]
})
export class SysappmodifyComponent extends ParentEditComponent {
  tlbBtns:Sysappbuttons[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, 
    private modal: NzModalService,
    public msg: NzMessageService) {
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
