import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styles: [``]
})
export class CalendarComponent extends ComponentParent {
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'calendar',
     templateUrl: './calendar.component.html',
     styleUrl:'./calendar.component.css'
   })
   export class CalendarComponent{
     }
   `
  constructor(public mainService: ComponentService) {
    super('FCCALENDAR', mainService);
  }
}