import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
    selector: 'syscompany',
    template: `
    单位 正在开发中
  `,
    styles: [`

  `]
})
export class SyscompanyComponent extends ParentlistComponent {
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
    }
    getDefaultQuery() {
    }
    event(eventName: string, context: any): void {
        switch (eventName) {
        }
    }

}
