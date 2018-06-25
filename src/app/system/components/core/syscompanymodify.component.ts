import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, ParentEditComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
    selector: 'syscompanymodify',
    templateUrl: './syscompanymodify.component.html',
    styles: [`

  `]
})
export class SyscompanymodifyComponent extends ParentEditComponent {
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
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
