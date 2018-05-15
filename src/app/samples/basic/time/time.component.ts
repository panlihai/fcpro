import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styles: [``]
})
export class TimeComponent extends ComponentParent {
  // 基本view
  basicview: string = `
  <fc-time [fcLabel]="'内容为空'"></fc-time>
  <fc-time [fcLabel]="'基本'" [(ngModel)]="now"></fc-time>
  `
   //大小
   sizeview: string = `
   <fc-time [fcLabel]="'大'" [(ngModel)]="now" fcSize="large"></fc-time>
   <fc-time [fcLabel]="'默认'" [(ngModel)]="now" fcSize="default"></fc-time>
   <fc-time [fcLabel]="'小'" [(ngModel)]="now" fcSize="small"></fc-time>
   `
  //只读
  readonlyview: string = `
  <fc-time [fcLabel]="'只读'" [(ngModel)]="now" [fcReadonly]="true"></fc-time>
  `
  //禁用
  disabledview: string = `
  <fc-time [fcLabel]="'禁用'" [(ngModel)]="now" fcDisabled="true"></fc-time>
  `
  // 时间格式timeview
  timeview: string = `
  <fc-time [fcLabel]="'时间格式'" [(ngModel)]="now"></fc-time>
  <fc-time [fcLabel]="'时间格式'" [(ngModel)]="now" fcFormat="HH"></fc-time>
  <fc-time [fcLabel]="'时间格式'" [(ngModel)]="now" fcFormat="HH:mm"></fc-time>
  `
// 基本basicjs
basicjs: string = `
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrl:'./time.component.css'
})
export class DateComponent{
  now = new Date();
}
`
  now = new Date();
  nownull = '';
  constructor(public mainService: ComponentService) {
    super('FCTIME', mainService);
  }
}