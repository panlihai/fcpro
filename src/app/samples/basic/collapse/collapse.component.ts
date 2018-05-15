import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styles: [``]
})
export class CollapseComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCCOLLAPSE', mainService);
  }
}
