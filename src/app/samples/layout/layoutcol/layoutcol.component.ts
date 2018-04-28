import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutcol',
  templateUrl: './layoutcol.component.html',
  styles: [``]
})
export class LayoutcolComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTCOL', mainService);
  }
}