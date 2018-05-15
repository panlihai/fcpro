import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styles: [``]
})
export class LinkComponent extends ComponentParent {
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrl:'./link.component.css'
  })
  export class LinkComponent{
    }
  `
  constructor(public mainService:ComponentService){
    super('FCANY',mainService);
  }
}
