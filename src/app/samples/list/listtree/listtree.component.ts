import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-listtree',
  templateUrl: './listtree.component.html',
  styleUrls: ['./listtree.component.css']
})
export class ListtreeComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLISTTREE', mainService);
  }
}