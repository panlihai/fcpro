import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-progresspercent',
  templateUrl: './progresspercent.component.html',
  styleUrls: ['./progresspercent.component.css']
})
export class ProgresspercentComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}