import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalinfo',
  templateUrl: './modalinfo.component.html',
  styles: [`
  .all{
    margin-bottom:10px;
  }
  `]
})
export class ModalinfoComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-button fcLabel="打开消息弹窗" fcType="primary" (click)="modalinfo.showModal()"></fc-button>
  <fc-modalinfo #modalinfo fcTitle="这是一条通知信息" fcContent="一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息"></fc-modalinfo>
  `
  //contentview
  contentview : string = `
  <fc-button fcLabel="打开消息弹窗" fcType="primary" (click)="modalinfo.showModal()"></fc-button>
  <fc-modalinfo #modalinfo fcTitle="这是一条通知信息" fcContent="一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息"></fc-modalinfo>
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'modalinfo',
     templateUrl: './modalinfo.component.html',
     styleUrl:'./modalinfo.component.css'
   })
   export class ModalinfoComponent{
    
   }
   `
  
  constructor(public mainService: ComponentService) {
    super('FCMODALINFO', mainService);
  }
}