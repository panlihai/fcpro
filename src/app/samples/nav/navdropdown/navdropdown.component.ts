import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-navdropdown',
  templateUrl: './navdropdown.component.html',
  styleUrls: ['./navdropdown.component.css']
})
export class NavdropdownComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVDROPDOWN', mainService);
  }
}