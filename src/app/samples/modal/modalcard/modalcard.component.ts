import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalcard',
  templateUrl: './modalcard.component.html',
  styles: [``]
})
export class ModalcardComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALCARD', mainService);
  }
}