import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-syssignup',
  templateUrl: './syssignup.component.html',
  styleUrls: ['./syssignup.component.css']
})
export class SyssignupComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSSIGNUP', mainService);
  }
}