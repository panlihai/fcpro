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
    //隶属关系对象
    syscompanyrelationObj: any;
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        //初始化主对象编辑
        if (this.routerParam) {
            this.mainService.getDefaultDataById(this.routerParam).subscribe(result => {
                if (result.CODE === '0') {
                    this.mainObj = result.DATA;
                }
            })
            //初始化单位隶属关系对象编辑
            this.mainService.getModifyCompanyRelationData(this.routerParam).subscribe(result => {
                if (result.CODE === '0') {
                    this.syscompanyrelationObj = result.DATA;
                }
            })
        }
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    event(eventName: string, param: any): void {
    }
}
