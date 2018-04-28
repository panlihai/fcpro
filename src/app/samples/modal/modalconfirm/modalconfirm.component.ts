import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styles: [``]
})
export class ModalconfirmComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALCONFIRM', mainService);
  }
}