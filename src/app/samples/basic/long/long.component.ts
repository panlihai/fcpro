import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'long',
  templateUrl: './long.component.html',
  styles: [``]
})
export class LongComponent extends ComponentParent {
   //大小
   sizeview: string = `
   <fc-long [fcLabel]="'小'" [(ngModel)]="longValue" fcSize="small"></fc-long>
   <fc-long [fcLabel]="'默认'" [(ngModel)]="longValue" fcSize="default"></fc-long>
   <fc-long [fcLabel]="'大'" [(ngModel)]="longValue" fcSize="large"></fc-long>
   `
   // 基本basicjs
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'long',
     templateUrl: './long.component.html',
     styleUrl:'./long.component.css'
   })
   export class DateComponent{
    longValue: number = 5;
   }
   `
  longValue: number = 5;
  constructor(public mainService: ComponentService) {
    super('FCLONG', mainService);
  }
}

