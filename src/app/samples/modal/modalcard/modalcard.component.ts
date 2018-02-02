import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modalcard',
  templateUrl: './modalcard.component.html',
  styleUrls: ['./modalcard.component.css']
})
export class ModalcardComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALCARD', mainService);
  }
}