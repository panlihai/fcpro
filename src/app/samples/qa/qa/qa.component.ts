import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'qa',
  templateUrl: './aq.component.html',
  styles: [``]
})
export class QaComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}