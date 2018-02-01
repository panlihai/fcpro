import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends ComponentParent {
  content: string = '文本内容';
  addonbefore: string = 'github.com/panlihai/fcexample/tree/dev';
  constructor(public mainService: ComponentService) {
    super('FCTEXT', mainService);
  }
}