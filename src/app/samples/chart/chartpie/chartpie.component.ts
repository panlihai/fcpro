import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartpieComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCCHARTPIE', mainService);
  }
}