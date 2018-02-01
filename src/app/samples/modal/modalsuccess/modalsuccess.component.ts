import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modalsuccess',
  templateUrl: './modalsuccess.component.html',
  styleUrls: ['./modalsuccess.component.css']
})
export class ModalsuccessComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALSUCCESS', mainService);
  }
}