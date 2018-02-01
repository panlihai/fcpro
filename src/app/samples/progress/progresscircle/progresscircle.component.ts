import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-progresscircle',
  templateUrl: './progresscircle.component.html',
  styleUrls: ['./progresscircle.component.css']
})
export class ProgresscircleComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}