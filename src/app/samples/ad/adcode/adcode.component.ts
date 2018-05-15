import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'adcode',
  templateUrl: './adcode.component.html',
  styles: [``]
})
export class AdcodeComponent extends ComponentParent {
  content: string = "文本内容";
  //只读js
  readonlyjs: string = `
  import { Component, OnInit } from "@angular/core";
  @Component({
    selector: 'adcode',
    templateUrl: './adcode.component.html',
    styleUrl:'./adcode.component.css'
  })
  export class AdcodeComponent{
    content: string = "文本内容";
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCTEXT', mainService);
  }
}
