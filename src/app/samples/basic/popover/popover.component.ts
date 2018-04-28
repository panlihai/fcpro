import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styles: [``]
})
export class PopoverComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPOPOVER', mainService);
  }
}
