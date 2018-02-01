import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-navstep',
  templateUrl: './navstep.component.html',
  styleUrls: ['./navstep.component.css']
})
export class NavstepComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVSTEP', mainService);
  }
}