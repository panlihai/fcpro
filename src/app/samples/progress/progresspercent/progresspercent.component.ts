import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresspercent',
  templateUrl: './progresspercent.component.html',
  styles: [``]
})
export class ProgresspercentComponent extends ComponentParent {
   //basicview
   basicview : string = `
   <fc-progresspercent></fc-progresspercent>
   `
   //basicjs
   basicjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'progresspercent',
     templateUrl: './progresspercent.component.html',
     styleUrl:'./progresspercent.component.css'
   })
   export class ProgresspercentComponent{
 
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}