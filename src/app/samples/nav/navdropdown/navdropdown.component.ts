import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'navdropdown',
  templateUrl: './navdropdown.component.html',
  styles: [``]
})
export class NavdropdownComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVDROPDOWN', mainService);
  }
}