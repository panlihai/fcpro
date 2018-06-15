import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
  selector: 'syscompanyedit',
  template: `
单位编辑 正在开发中
  `,
  styles: [`

  `]
})
export class SyscompanyeditComponent extends ParentEditComponent {
  init(): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {

  }
  constructor(public mainService: SyscompanyService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
}
