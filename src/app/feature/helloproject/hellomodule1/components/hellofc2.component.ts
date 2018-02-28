import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { HellofcService } from '../../services/hellofc.service';
@Component({
  selector: 'hellofc2',
  template: `
  <fc-title fcTitle="跳转到hellofc2页面"></fc-title>
  `,
  styles: [`
  
  `]
})
export class Hellofc2Component extends ParentComponent {
  constructor(public mainService: HellofcService, public router: Router) {
    super(mainService, router);
  }
}
