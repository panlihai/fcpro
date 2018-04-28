import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresspercent',
  templateUrl: './progresspercent.component.html',
  styles: [``]
})
export class ProgresspercentComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}