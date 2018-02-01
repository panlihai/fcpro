import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-layoutportal',
  templateUrl: './layoutportal.component.html',
  styleUrls: ['./layoutportal.component.css']
})
export class LayoutportalComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTPORTAL', mainService);
  }
}