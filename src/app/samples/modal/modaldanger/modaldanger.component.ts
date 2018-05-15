import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modaldanger',
  templateUrl: './modaldanger.component.html',
  styles: [`
  .all{
    margin-bottom:10px;
  }
   `]
})
export class ModaldangerComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-button fcLabel="打开错误弹窗" fcType="primary" (click)="modaldanger.showModal()"></fc-button>
  <fc-modaldanger #modaldanger fcTitle="这是一条失败信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modaldanger>
  `
  //contentview
  contentview : string = `
  <fc-button fcLabel="打开错误弹窗" fcType="primary" (click)="modaldanger.showModal()"></fc-button>
  <fc-modaldanger #modaldanger fcTitle="这是一条失败信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modaldanger>
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'modaldanger',
     templateUrl: './modaldanger.component.html',
     styleUrl:'./modaldanger.component.css'
   })
   export class ModaldangerComponent{
    
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCMODALDANGER', mainService);
  }
}