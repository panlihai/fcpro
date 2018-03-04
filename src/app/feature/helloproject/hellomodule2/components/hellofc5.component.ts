import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { HellofcService } from '../../services/hellofc.service';
@Component({
  selector: 'hellofc5',
  template: `
  <fc-title fcTitle="跳转到hellofc5页面"></fc-title>
  `,
  styles: [`
  
  `]
})
export class Hellofc5Component extends ParentComponent {
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
  constructor(public mainService: HellofcService, public router: Router,
    public activedRoute:ActivatedRoute) {
    super(mainService, router,activedRoute);
  }
}