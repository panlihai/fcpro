import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styles: [``]
})
export class DateComponent extends ComponentParent {
  // 基本view
  basicview: string = `
  <fc-date [fcLabel]="'内容为空'" fcFormat="YYYYMM"></fc-date>
  <fc-date [fcLabel]="'显示日期'" [(ngModel)]="now"></fc-date>
  <fc-date [fcLabel]="'基本'" fcMode='month'></fc-date>
  `
   //大小
   sizeview: string = `
   <fc-date [fcLabel]="'小'" [(ngModel)]="now" fcSize="small"></fc-date>
   <fc-date [fcLabel]="'默认'" [(ngModel)]="now" fcSize="default"></fc-date>
   <fc-date [fcLabel]="'大'" [(ngModel)]="now" fcSize="large"></fc-date>
   `
   //只读
   readonlyview: string = `
   <fc-date [fcLabel]="'只读'" [(ngModel)]="now" [fcReadonly]="true"></fc-date>
   `
   //禁用
  disabledview: string = `
  <fc-date [fcLabel]="'禁用'" [(ngModel)]="now" fcDisabled="true"></fc-date>
  `
  //newmonthdateview年月日三种格式
  newmonthdateview: string = `
  <fc-date [fcLabel]="'年月日格式'" [(ngModel)]="now"></fc-date>
  <fc-date [fcLabel]="'年月日格式'" [(ngModel)]="now" fcFormat="YYYY/MM/DD"></fc-date>
  <fc-date [fcLabel]="'年月日格式'" [(ngModel)]="now" fcFormat="YYYY年MM月DD日"></fc-date>
  `
  //newmonthview
  newmonthview: string = `
  <fc-date [fcLabel]="'年月格式'" [(ngModel)]="now" fcMode="month" fcFormat="YYYYMM"></fc-date>
  <fc-date [fcLabel]="'年月格式'" [(ngModel)]="now" fcMode="month" fcFormat="YYYY/MM"></fc-date>
  <fc-date [fcLabel]="'年月格式'" [(ngModel)]="now" fcMode="month" fcFormat="YYYY年MM月"></fc-date>
  `
  // 基本basicjs
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrl:'./date.component.css'
  })
  export class DateComponent{
    now = new Date();
  }
  `
  //当前日期
  now = new Date();
  constructor(public mainService: ComponentService) {
    super('FCDATE', mainService);
  }
}
