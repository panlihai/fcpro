import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ParentComponent } from 'fccomponent';
import { ParentComponent } from '../parent.component';
import { SyscomponentService } from '../../services/syscomponent.service';
@Component({
  selector: 'syscomponent',
  template: `
    <fc-layoutpanel>
        <fc-tlblist fcheader [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <fc-listdata fccontent [fcAppid]="appId" [fcOptions]="fcOptions" (fcEvent)="listdataEvent($evnet)"></fc-listdata>
    </fc-layoutpanel>
  `,
  styles: [`
  
  `]
})
export class SyscomponentComponent extends ParentComponent {
  constructor(public mainService: SyscomponentService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);    
  }  
  init(): void {
  }
  addNew(mainObj: any) {
  }
  getDefaultQuery() {
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {
    
  }
  event(eventName: string, context: any): void {
  }

}
