import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutportal',
  templateUrl: './layoutportal.component.html',
  styles: [``]
})
export class LayoutportalComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTPORTAL', mainService);
  }
}