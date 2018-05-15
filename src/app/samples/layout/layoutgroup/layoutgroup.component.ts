import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutgroup',
  templateUrl: './layoutgroup.component.html',
  styles: [``]
})
export class LayoutgroupComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <div fccontent>
    <fc-layoutgroup fcTitle="这是分组的标题">
      <div fccontent>
        这是分组的内容区 
      </div>
    </fc-layoutgroup>
  </div>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'layoutgroup',
    templateUrl: './layoutgroup.component.html',
    styleUrl:'./layoutgroup.component.css'
  })
  export class LayoutgroupComponent{
  
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTGROUP', mainService);
  }
}