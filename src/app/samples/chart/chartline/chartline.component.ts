import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'chartline',
  templateUrl: './chartline.component.html',
  styles: [``]
})
export class ChartlineComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCCHARTLINE', mainService);
  }
}