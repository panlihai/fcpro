import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalwarn',
  templateUrl: './modalwarn.component.html',
  styles: [``]
})
export class ModalwarnComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALWARN', mainService);
  }
}