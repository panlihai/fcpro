import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutpanel',
  templateUrl: './layoutpanel.component.html',
  styles: [``]
})
export class LayoutpanelComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTPANEL', mainService);
  }
}