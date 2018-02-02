import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-layoutrow',
  templateUrl: './layoutrow.component.html',
  styleUrls: ['./layoutrow.component.css']
})
export class LayoutrowComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTROW', mainService);
  }
}