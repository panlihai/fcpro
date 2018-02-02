import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends ComponentParent {
  content: string = '文本内容';
  constructor(public mainService: ComponentService) {
    super('FCTEXTAREA', mainService);
  }
}