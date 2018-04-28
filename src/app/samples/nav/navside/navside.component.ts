import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'navside',
  templateUrl: './navside.component.html',
  styles: [``]
})
export class NavsideComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVSIDE', mainService);
  }
}