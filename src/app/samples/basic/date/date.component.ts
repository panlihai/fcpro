import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent extends ComponentParent {
  //当前日期
  now = new Date();
  constructor(public mainService: ComponentService) {
    super('FCDATE', mainService);
  }
}
