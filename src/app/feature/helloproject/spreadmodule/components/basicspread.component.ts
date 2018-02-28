import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public mainService: SpreadService, public router: Router) {
    super(mainService, router);
  }
}
