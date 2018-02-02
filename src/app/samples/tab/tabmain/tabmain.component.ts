import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tabmain',
  templateUrl: './tabmain.component.html',
  styleUrls: ['./tabmain.component.css']
})
export class TabmainComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTABMAIN', mainService);
  }
}