import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
  selector: 'syscompanyadd',
  templateUrl: './syscompanyadd.component.html',
  styles: [`

  `]
})
export class SyscompanyaddComponent extends ParentEditComponent {
  //单位隶属关系
  syscompanyrelationObj: any = {};
  constructor(public mainService: SyscompanyService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init() {
    //初始化单位隶属关系字段
    this.syscompanyrelationObj = this.mainService.getSyscompanyrelationField();
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {

  }
}
