import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [``]
})
export class SwitchComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSWITCH', mainService);
  }
}