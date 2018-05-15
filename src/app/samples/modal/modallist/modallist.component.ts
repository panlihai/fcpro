import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcmodallistComponent } from 'fccomponent/fcmodal';
@Component({
  selector: 'modallist',
  templateUrl: './modallist.component.html',
  styles: [`
  .all{
    margin-bottom:10px;
  }
  `]
})
export class ModallistComponent extends ComponentParent {
  //基础basicview
  basicview : string = `
  <fc-button [fcType]="'primary'" (click)="modallist1.showModal()" fcLabel="打开单选列表弹窗"></fc-button>
  <fc-modallist #modallist1 fcTitle="列表弹窗标题" [fcAppid]="'SYSAPP'" [fcType]="'single'" (fcEvent)="modalClose($event)"></fc-modallist>
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'modallist',
    templateUrl: './modallist.component.html',
    styleUrl:'./modallist.component.css'
  })
  export class ModallistComponent{
    selectObj: any[];
    modalClose(event) {
      this.selectObj = event;
    }
  }
  `
  selectObj: any[];
  constructor(public mainService: ComponentService) {
    super('FCMODALLIST', mainService);
  }
  modalClose(event) {
    this.selectObj = event;
  }
}