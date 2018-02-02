import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcmodallistComponent } from 'fccomponent/fcmodal';
@Component({
  selector: 'app-modallist',
  templateUrl: './modallist.component.html',
  styleUrls: ['./modallist.component.css']
})
export class ModallistComponent extends ComponentParent {
  selectObj: any[];
  constructor(public mainService: ComponentService) {
    super('FCMODALLIST', mainService);
  }
  modalClose(event) {
    this.selectObj = event;
  }
}