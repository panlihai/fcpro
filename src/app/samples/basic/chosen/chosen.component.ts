import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'chosen',
  templateUrl: './chosen.component.html',
  styles: [``]
})
export class ChosenComponent extends ComponentParent {
     //大小
     sizeview: string = `
     <fc-chosen [fcLabel]="'默认'" [(ngModel)]="chosenValue" fcSize="default" [fcOption]="chosenOptions"></fc-chosen>
     <fc-chosen [fcLabel]="'大'" [(ngModel)]="chosenValue" fcSize="large" [fcOption]="chosenOptions"></fc-chosen>
     <fc-chosen [fcLabel]="'小'" [(ngModel)]="chosenValue" fcSize="small" [fcOption]="chosenOptions"></fc-chosen>
     `
      //只读
   readonlyview: string = `
   <fc-chosen [fcLabel]="'只读'" [(ngModel)]="chosenValue" [fcOption]="chosenOptionsDisabled" [fcReadonly]="true"></fc-chosen>
   `
    //单独禁用
  singledisabledview: string = `
  <fc-chosen [fcLabel]="'单独禁用'" [(ngModel)]="chosenValue" [fcOption]="chosenOptionsDisabled"></fc-chosen>
  `
    //禁用状态
    disabledview: string = `
    <fc-chosen [fcLabel]="'禁用'" fcDisabled="true" [(ngModel)]="chosenValue" [fcOption]="chosenOptionsDisabled" fcDisabled="true"></fc-chosen>
    `
    //是否带搜索view
   searchview: string  = `
   <fc-chosen [fcLabel]="'带搜索'" [(ngModel)]="chosenValue" fcShowSearch="false" [fcOption]="chosenOptionsDisabled"></fc-chosen>
   `
   //未找到内容时
   nocontentview: string = `
   <fc-chosen [fcLabel]="'未找到时'" [(ngModel)]="chosenValue" fcNotFoundContent="当下拉列表为空时显示的内容" [fcOption]="chosenOptionsDisabled"></fc-chosen>
   `
  //基本view
  basicview: string = `
  <fc-chosen [fcLabel]="'基本'" [fcLabel]="'下拉多选'" [(ngModel)]="chosenValue" [fcOption]="chosenOptions"></fc-chosen>
  `
    //清除事件捕获view
    clearview: string = `
    <fc-chosen [fcLabel]="'清除捕获事件'"  (fcEvent)="choseEvent($event)" [(ngModel)]="chosenValue" [fcOption]="chosenOptionsDisabled" (fcEvent)="choseEvent($event)"></fc-chosen>
    `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'chosen',
     templateUrl: './chosen.component.html',
     styleUrl:'./chosen.component.css'
   })
   export class ChosenComponent{
    chosenValue: string = 'a';
    chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    chosenOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
   }
   `
   //清除捕获事件
   //基础js
   clearjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'chosen',
     templateUrl: './chosen.component.html',
     styleUrl:'./chosen.component.css'
   })
   export class ChosenComponent{
    chosenValue: string = 'a';
    chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    chosenOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
   }
   choseEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm("已经清除了内容");
      break;
    }
  }
   `
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  constructor(public mainService: ComponentService) {
    super('FCCHOSEN', mainService);
  }
  choseEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm("已经清除了内容");
      break;
    }
  }
}

