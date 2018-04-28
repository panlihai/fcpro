import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalinfo',
  templateUrl: './modalinfo.component.html',
  styles: [``]
})
export class ModalinfoComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALINFO', mainService);
  }
}