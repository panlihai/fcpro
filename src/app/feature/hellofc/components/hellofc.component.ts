import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { HellofcService } from '../services/hellofc.service';
@Component({
  selector: 'hellofc',
  template: `
    <fc-layoutpanel>
      <fc-title fcTitle="hello fc" fcheader></fc-title>
     <fc-listdata fcAppid="appId"></fc-listdata>
    </fc-layoutpanel>
  `,
  styles: [`
  
  `]
})
export class HellofcComponent extends ParentComponent {
  constructor(public mainService: HellofcService, public router: Router) {
    super(mainService, router);
  }

}
