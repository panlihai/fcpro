import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, ParentEditComponent, ParentDetailComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
    selector: 'syscompanymodify',
    templateUrl: './syscompanymodify.component.html',
    styles: [`

  `]
})
export class SyscompanymodifyComponent extends ParentDetailComponent {
    //隶属关系对象
    syscompanyrelationObj: any;
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        //初始化主对象编辑
        this.mainService.initMainObj(this.routerParam.ID).subscribe(result => {
            if (result.CODE === '0') {
                this.mainObj = result.DATA;
            }
        })
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    event(eventName: string, param: any): void {
    }
}
