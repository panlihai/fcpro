import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styles: [`
  .triggerview{
    margin-right:24px;margin-top:24px;display: inline-block;
  }
  `]
})
export class PopoverComponent extends ComponentParent {
  //triggerview
  triggerview : string = `
  <fc-popover fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="滑过" class="triggerview"></fc-popover>
  <fc-popover fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="聚焦"  class="triggerview"></fc-popover>
  <fc-popover fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="点击"  class="triggerview"></fc-popover>
  `
   //closeview
   closeview : string = `
   <fc-popover fcShowClose="true" fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="滑过" class="triggerview"></fc-popover>
   <fc-popover fcShowClose="true" fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="聚焦" class="triggerview"></fc-popover>
   <fc-popover fcShowClose="true" fcTitle="气泡标题" fcContent="气泡内容气泡内容气泡内容" fcTrigger="hover" fcButton="点击" class="triggerview"></fc-popover>
   `
   //基本style
  basicstyle : string = `
  .triggerview{
    margin-right:24px;margin-top:24px;display: inline-block;
  }
  `
  //位置方向positionview
  
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'popover',
     templateUrl: './popover.component.html',
     styleUrl:'./popover.component.css'
   })
   export class PopoverComponent{
     }
   `
  constructor(public mainService: ComponentService) {
    super('FCPOPOVER', mainService);
  }
}
