import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-modaldanger',
  templateUrl: './modaldanger.component.html',
  styleUrls: ['./modaldanger.component.css']
})
export class ModaldangerComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMODALDANGER', mainService);
  }
}