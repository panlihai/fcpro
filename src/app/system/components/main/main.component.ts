import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clear:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  `]
})
export class MainComponent extends ParentlistComponent {
  constructor(public mainService: MainService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化元数据id
    this.appId = this.routerParam.APPID,
      //初始化元数据
      this.mainApp = this.appService.getAppById(this.appId);
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {

  }
}
