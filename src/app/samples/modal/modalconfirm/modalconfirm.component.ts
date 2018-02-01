import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styleUrls: ['./modalconfirm.component.css']
})
export class ModalconfirmComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALCONFIRM', mainService);
  }
}