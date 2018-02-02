import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-layoutcol',
  templateUrl: './layoutcol.component.html',
  styleUrls: ['./layoutcol.component.css']
})
export class LayoutcolComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTCOL', mainService);
  }
}