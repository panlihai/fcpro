import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'templateform',
  templateUrl: './templatemodaltreeform.component.html',
  styles: [``]
})
export class TemplatemodaltreeformComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}