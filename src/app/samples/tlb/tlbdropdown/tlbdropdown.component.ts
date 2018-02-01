import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tlbdropdown',
  templateUrl: './tlbdropdown.component.html',
  styleUrls: ['./tlbdropdown.component.css']
})
export class TlbdropdownComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTLBDROPDOWN', mainService);
  }
}