import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-layoutgroup',
  templateUrl: './layoutgroup.component.html',
  styleUrls: ['./layoutgroup.component.css']
})
export class LayoutgroupComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTGROUP', mainService);
  }
}