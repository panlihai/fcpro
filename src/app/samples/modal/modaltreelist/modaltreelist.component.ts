import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modaltreelist',
  templateUrl: './modaltreelist.component.html',
  styles: [``]
})
export class ModaltreelistComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALTREELIST', mainService);
  }
}