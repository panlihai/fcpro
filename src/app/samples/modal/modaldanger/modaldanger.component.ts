import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modaldanger',
  templateUrl: './modaldanger.component.html',
  styles: [``]
})
export class ModaldangerComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALDANGER', mainService);
  }
}