import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: [``]
})
export class BadgeComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCBADGE', mainService);
  }
}
