import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresscircle',
  templateUrl: './progresscircle.component.html',
  styles: [``]
})
export class ProgresscircleComponent extends ComponentParent {
   //basicview
   basicview : string = `
   <fc-progressbar fcModel="80" fcStrokeWidth="5"></fc-progressbar>
   `
   //basicjs
   basicjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'progresscircle',
     templateUrl: './progresscircle.component.html',
     styleUrl:'./progresscircle.component.css'
   })
   export class ProgresscircleComponent{
 
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}