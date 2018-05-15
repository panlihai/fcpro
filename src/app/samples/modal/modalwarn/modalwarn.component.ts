import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalwarn',
  templateUrl: './modalwarn.component.html',
  styles: [``]
})
export class ModalwarnComponent extends ComponentParent {
    //contentview
    contentview : string = `
    <fc-button fcLabel="打开警告弹窗" fcType="primary" (click)="modalwarn.showModal()"></fc-button>
    <fc-modalwarn #modalwarn fcTitle="这是一条警告信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modalwarn>
    `
    //基础js
    basicjs: string = `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'modalwarn',
      templateUrl: './modalwarn.component.html',
      styleUrl:'./modalwarn.component.css'
    })
    export class ModalwarnComponent{
     
    }
    `
  basicview : string = `
  <fc-button fcLabel="打开警告弹窗" fcType="primary" (click)="modalwarn.showModal()"></fc-button>
  <fc-modalwarn #modalwarn fcTitle="这是一条警告信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modalwarn>
  ` 
  constructor(public mainService: ComponentService) {
    super('FCMODALWARN', mainService);
  }
}