import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styles: [``]
})
export class ProgressbarComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}