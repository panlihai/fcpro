import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styles: [``]
})
export class DividerComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCDIVIDER', mainService);
  }
}