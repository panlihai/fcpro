import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styles: [``]
})
export class DividerComponent extends ComponentParent {
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'divider',
     templateUrl: './divider.component.html',
     styleUrl:'./divider.component.css'
   })
   export class DividerComponent{
     }
   `
  constructor(public mainService: ComponentService) {
    super('FCDIVIDER', mainService);
  }
}