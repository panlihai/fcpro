import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-long',
  templateUrl: './long.component.html',
  styleUrls: ['./long.component.css']
})
export class LongComponent extends ComponentParent {
  longValue: number = 5;
  constructor(public mainService: ComponentService) {
    super('FCLONG', mainService);
  }
}

