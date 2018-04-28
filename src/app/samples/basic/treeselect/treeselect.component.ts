import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TreeOptions, FctreeComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'treeselect',
  templateUrl: './treeselect.component.html',
  styles: [``]
})
export class TreeselectComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTREESELECT', mainService);
  }
}