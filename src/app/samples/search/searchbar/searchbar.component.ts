import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styles: [``]
})
export class SearchbarComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSEARCHBAR', mainService);
  }
}