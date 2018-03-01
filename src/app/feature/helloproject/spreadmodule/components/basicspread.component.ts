import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { SpreadService } from '../../services/spread.service';
@Component({
  selector: 'basicspread',
  template: `
  <fc-title fcTitle="跳转到spread页面"></fc-title>
  <div style="width:500px;height:500px;">
    
  </div>
  `,
  styles: [`
  
  `]
})
export class BasicspreadComponent extends ParentComponent {
  spread: any;
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
  constructor(public mainService: SpreadService, public router: Router,
    public activedRoute:ActivatedRoute) {
    super(mainService, router,activedRoute);
  }
}
