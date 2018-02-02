import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-searchadvance',
  templateUrl: './searchadvance.component.html',
  styleUrls: ['./searchadvance.component.css']
})
export class SearchadvanceComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSEARCHADVANCE', mainService);
  }
}