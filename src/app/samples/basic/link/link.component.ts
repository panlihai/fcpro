import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styles: [``]
})
export class LinkComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCANY',mainService);
  }
}
