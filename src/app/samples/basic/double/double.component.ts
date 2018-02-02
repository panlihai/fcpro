import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent extends ComponentParent {
  doubleValue: number = 5.5;
  constructor(public mainService: ComponentService) {
    super('FCDOUBLE', mainService);
  }
}

