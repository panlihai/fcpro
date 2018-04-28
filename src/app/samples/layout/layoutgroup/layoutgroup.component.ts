import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutgroup',
  templateUrl: './layoutgroup.component.html',
  styles: [``]
})
export class LayoutgroupComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTGROUP', mainService);
  }
}