import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalsuccess',
  templateUrl: './modalsuccess.component.html',
  styles: [``]
})
export class ModalsuccessComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALSUCCESS', mainService);
  }
}