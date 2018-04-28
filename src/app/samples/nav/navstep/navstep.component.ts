import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'navstep',
  templateUrl: './navstep.component.html',
  styles: [``]
})
export class NavstepComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVSTEP', mainService);
  }
}