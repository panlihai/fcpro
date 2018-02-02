import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modalwarn',
  templateUrl: './modalwarn.component.html',
  styleUrls: ['./modalwarn.component.css']
})
export class ModalwarnComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALWARN', mainService);
  }
}