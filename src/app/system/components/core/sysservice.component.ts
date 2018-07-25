import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
@Component({
    selector: 'sysservice',
    templateUrl: './sysservice.component.html',
    styles: [`
   
            `]
})
export class SysserviceComponent extends ParentlistComponent {
    constructor(public mainService: SysserviceService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
    }
    getDefaultQuery() {
    }
    event(eventName: string, context: any): void {
    }
}
