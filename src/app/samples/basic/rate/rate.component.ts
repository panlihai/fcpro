import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styles: [``]
})
export class RateComponent extends ComponentParent {
  rateValue: number = 5;
  constructor(public mainService: ComponentService) {
    super('FCRATE', mainService);
  }
}