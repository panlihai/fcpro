import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styles: [``]
})
export class BacktopComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCBACKTOP', mainService);
  }
}