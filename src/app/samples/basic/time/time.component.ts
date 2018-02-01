import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent extends ComponentParent {
  now = new Date();
  nownull = '';
  constructor(public mainService: ComponentService) {
    super('FCTIME', mainService);
  }
}