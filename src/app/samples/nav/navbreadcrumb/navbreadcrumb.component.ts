import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'navbreadcrumb',
  templateUrl: './navbreadcrumb.component.html',
  styles: [``]
})
export class NavbreadcrumbComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVBREADCRUMB', mainService);
  }
}