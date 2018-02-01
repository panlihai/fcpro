import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modallist',
  templateUrl: './modallist.component.html',
  styleUrls: ['./modallist.component.css']
})
export class ModallistComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALLIST', mainService);
  }
}