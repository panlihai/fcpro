import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'syssignup',
  templateUrl: './syssignup.component.html',
  styles: [``]
})
export class SyssignupComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSSIGNUP', mainService);
  }
}