import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { HellofcService } from '../../services/hellofc.service';
@Component({
    selector: 'spread',
    template: `
    <fc-title fcTitle="这是一个标题"></fc-title>
  `,
    styles: [`
  
  `]
})
export class SpreadComponent extends ParentComponent {
    constructor(public mainService: HellofcService, public router: Router) {
        super(mainService, router);
    }
}
