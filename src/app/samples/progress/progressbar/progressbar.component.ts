import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styles: [``]
})
export class ProgressbarComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-progresscircle></fc-progresscircle>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'progressbar',
    templateUrl: './progressbar.component.html',
    styleUrl:'./progressbar.component.css'
  })
  export class ProgressbarComponent{

  }
  `
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}