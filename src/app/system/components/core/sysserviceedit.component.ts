import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
@Component({
    selector: 'sysserviceedit',
    templateUrl: 'sysserviceedit.component.html',
    styles: [`
        
            `]
})
export class SysserviceeditComponent extends ParentEditComponent {
    constructor(public mainService: SysserviceService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    init(): void {
        this.mainObj = this.mainService.getDefaultObj();
    }

    getDefaultQuery() {
    }

    event(eventName: string, context: any): void {
    }

}
