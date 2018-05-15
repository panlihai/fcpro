import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styles: [``]
})
export class RateComponent extends ComponentParent {
  // 基本basicjs
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'rate',
    templateUrl: './rate.component.html',
    styleUrl:'./rate.component.css'
  })
  export class DateComponent{
    rateValue: number = 5;
  }
  `
  rateValue: number = 5;
  constructor(public mainService: ComponentService) {
    super('FCRATE', mainService);
  }
}