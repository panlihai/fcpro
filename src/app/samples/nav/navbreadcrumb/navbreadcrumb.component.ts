import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-navbreadcrumb',
  templateUrl: './navbreadcrumb.component.html',
  styleUrls: ['./navbreadcrumb.component.css']
})
export class NavbreadcrumbComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCNAVBREADCRUMB', mainService);
  }
}