import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styles: [``]
})
export class TextareaComponent extends ComponentParent {
  content: string;
  constructor(public mainService: ComponentService) {
    super('FCTEXTAREA', mainService);
    this.content = '文本内容';
  }
}