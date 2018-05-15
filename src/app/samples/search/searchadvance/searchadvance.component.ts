import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'searchadvance',
  templateUrl: './searchadvance.component.html',
  styles: [``]
})
export class SearchadvanceComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSEARCHADVANCE', mainService);
  }
}