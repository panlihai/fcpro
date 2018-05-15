import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'double',
  templateUrl: './double.component.html',
  styles: [``]
})
export class DoubleComponent extends ComponentParent {
  // 基本view
  basicview: string = `
  <fc-date [fcLabel]="'内容为空'" fcFormat="YYYYMM"></fc-date>
  <fc-date [fcLabel]="'显示日期'" [(ngModel)]="now"></fc-date>
  <fc-date [fcLabel]="'基本'" fcMode='month'></fc-date>
  `
   //大小
   sizeview: string = `
   <fc-double [fcLabel]="'小'" [(ngModel)]="doubleValue" fcSize="small"></fc-double>
   <fc-double [fcLabel]="'默认'" [(ngModel)]="doubleValue" fcSize="default"></fc-double>
   <fc-double [fcLabel]="'大'" [(ngModel)]="doubleValue" fcSize="large"></fc-double>
   `
   //只读
   readonlyview: string = `
   <fc-date [fcLabel]="'只读'" [(ngModel)]="now" [fcReadonly]="true"></fc-date>
   `
   //禁用
  disabledview: string = `
  <fc-date [fcLabel]="'禁用'" [(ngModel)]="now" fcDisabled="true"></fc-date>
  `
   // 基本basicjs
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'double',
     templateUrl: './double.component.html',
     styleUrl:'./double.component.css'
   })
   export class DateComponent{
    doubleValue: number = 5.5;
   }
   `
  doubleValue: number = 5.5;
  constructor(public mainService: ComponentService) {
    super('FCDOUBLE', mainService);
  }
}

