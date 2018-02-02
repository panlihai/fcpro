import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.component.html',
  styleUrls: ['./modalinfo.component.css']
})
export class ModalinfoComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALINFO', mainService);
  }
}