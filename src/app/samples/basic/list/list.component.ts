import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent extends ComponentParent {
  now = new Date();
  nownull = '';
  constructor(public mainService: ComponentService) {
    super('FCLIST', mainService);
  }
}