import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'syssignin',
  templateUrl: './syssignin.component.html',
  styles: [``]
})
export class SyssigninComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSSIGNIN', mainService);
  }
}