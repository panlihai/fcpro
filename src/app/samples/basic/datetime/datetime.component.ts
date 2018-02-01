import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent extends ComponentParent {
  now = new Date();
  constructor(public mainService: ComponentService) {
    super('FCDATETIME', mainService);
  }
}
