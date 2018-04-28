import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styles: [``]
})
export class EditorComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCEDITOR', mainService);
  }
}
