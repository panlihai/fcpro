import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [``]
})
export class ChartComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCCHART',mainService);
  }
}
