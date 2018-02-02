import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tlblist',
  templateUrl: './tlblist.component.html',
  styleUrls: ['./tlblist.component.css']
})
export class TlblistComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTLBLIST', mainService);
  }
}