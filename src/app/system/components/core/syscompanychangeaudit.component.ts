import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
@Component({
    selector: 'syscompanychangeaudit',
    template: `
    <fc-layoutpanel [fcFull]="true" class="templatelist">
        <fc-layoutrow fcSpan="50" fccontent>
            <fc-tlblist [fcAppid]="appId" fccontent1></fc-tlblist>
            <fc-layoutrow fccontent2 fcSpan="50">
                <form fccontent1 class="list-search" name="searchForm" #searchForm >
                </form>
                <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="fcListdataOptions"></fc-listdata>
            </fc-layoutrow>
        </fc-layoutrow>
    </fc-layoutpanel>
    `,
    styles: [`

  `]
})
export class SyscompanychangeauditComponent extends ParentlistComponent {
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private _providers: ProvidersService) {
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
