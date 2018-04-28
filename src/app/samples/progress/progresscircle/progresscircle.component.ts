import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresscircle',
  templateUrl: './progresscircle.component.html',
  styles: [``]
})
export class ProgresscircleComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}