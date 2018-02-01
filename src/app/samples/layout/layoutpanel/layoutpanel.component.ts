import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-layoutpanel',
  templateUrl: './layoutpanel.component.html',
  styleUrls: ['./layoutpanel.component.css']
})
export class LayoutpanelComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTPANEL', mainService);
  }
}