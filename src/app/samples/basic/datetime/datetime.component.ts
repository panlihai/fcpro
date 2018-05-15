import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'datetime',
  templateUrl: './datetime.component.html',
  styles: [``]
})
export class DatetimeComponent extends ComponentParent {
  // 基本view
  basicview: string = `
  <fc-title fcLabel="日期时间" fccontent1 fcSubtitle="输入或选择日期时间的控件" fcHasline="false"></fc-title>
  <fc-title fcLabel="何时使用" fccontent1 fcSubtitle="当用户需要输入一个日期时间，可以点击标准输入框，弹出日期时间面板进行选择。" fcHasline="false"></fc-title>
  <fc-title fcLabel="代码演示" fccontent1 fcHasline="false"></fc-title>
  `
   //大小
   sizeview: string = `
   <fc-datetime [fcLabel]="'小'" [(ngModel)]="now" fcSize="small"></fc-datetime>
   <fc-datetime [fcLabel]="'默认'" [(ngModel)]="now" fcSize="default"></fc-datetime>
   <fc-datetime [fcLabel]="'大'" [(ngModel)]="now" fcSize="large"></fc-datetime>
   `
   //只读
   readonlyview: string = `
   <fc-datetime [fcLabel]="'只读'" [(ngModel)]="now" [fcReadonly]="true"></fc-datetime>
   `
   //禁用
  disabledview: string = `
  <fc-datetime [fcLabel]="'禁用'" [(ngModel)]="now" fcDisabled="true"></fc-datetime>
  `
  //日期时间 datetimeview
  datetimeview: string = `
  <fc-datetime [fcLabel]="'日期时间'" [(ngModel)]="now" fcFormat="YYYY/MM/DD HH"></fc-datetime>
  <fc-datetime [fcLabel]="'日期时间'" [(ngModel)]="now" fcFormat="YYYY年MM月DD日 HH:mm"></fc-datetime>
  `
  // 基本basicjs
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'datetime',
    templateUrl: './datetime.component.html',
    styleUrl:'./datetime.component.css'
  })
  export class DateComponent{
    now = new Date();
  }
  `
  now = new Date();
  constructor(public mainService: ComponentService) {
    super('FCDATETIME', mainService);
  }
}
