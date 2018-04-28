import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'searchfast',
  templateUrl: './searchfast.component.html',
  styles: [``]
})
export class SearchfastComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSEARCHFAST', mainService);
  }
}