import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styles: [``]
})
export class DoubleComponent extends ComponentParent {
  doubleValue: number = 5.5;
  constructor(public mainService: ComponentService) {
    super('FCDOUBLE', mainService);
  }
}

