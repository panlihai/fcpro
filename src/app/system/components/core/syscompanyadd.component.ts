import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
@Component({
  selector: 'syscompanyadd',
  templateUrl:'./syscompanyadd.component.html',
  styles: [`

  `]
})
export class SyscompanyaddComponent extends ParentEditComponent {
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
