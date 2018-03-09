import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent } from 'fccomponent';
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
    clearfix:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  `]
})
export class MainComponent extends ParentComponent {
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
   this.mainObj = this.appService.initObjDefaultValue(this.mainApp);

  }
  addNew(mainObj: any) {
  }
  getDefaultQuery() {
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {
    
  }
  event(eventName: string, context: any): void {
  }

}
