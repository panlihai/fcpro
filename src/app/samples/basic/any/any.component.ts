import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'any',
  templateUrl: './any.component.html',
  styles: [``]
})
export class AnyComponent extends ComponentParent {
   //大小
   sizeview: string = `
   <fc-any [fcLabel]="'默认'" [(ngModel)]="anyValue" fcSize="default" [fcOption]="anyOptions"></fc-any>
   <fc-any [fcLabel]="'大'" [(ngModel)]="anyValue" fcSize="large" [fcOption]="anyOptions"></fc-any>
   <fc-any [fcLabel]="'小'" [(ngModel)]="anyValue" fcSize="small" [fcOption]="anyOptions"></fc-any>
   `
   //只读
   readonlyview: string = `
   <fc-any [fcLabel]="'只读'" [(ngModel)]="anyValue" [fcOption]="anyOptionsReadonly" [fcReadonly]="true"></fc-any>
   `
  //单独禁用
  singledisabledview: string = `
  <fc-any [fcLabel]="'单独禁用'" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled"></fc-any>
  `
   //禁用状态
   disabledview: string = `
   <fc-any [fcLabel]="'禁用'" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled" fcDisabled="true"></fc-any>
   `
   //是否带搜索view
   searchview: string  = `
   <fc-any [fcLabel]="'是否带搜索'" [fcShowSearch]="true" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled"></fc-any>
   `
   //未找到内容时
   nocontentview: string = `
   <fc-any [fcLabel]="'未找到'" fcNotFoundContent="当下拉列表为空时显示的内容" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled"></fc-any>
   `
   //清除事件捕获view
   clearview: string = `
   <fc-any [fcLabel]="'清除捕获事件'" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled" (fcEvent)="anyEvent($event)"></fc-any> 
   `
   //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'any',
    templateUrl: './any.component.html',
    styleUrl:'./any.component.css'
  })
  export class AnyComponent{
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  anyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  anyOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  }
  `
  //清除事件
  clearjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'any',
    templateUrl: './any.component.html',
    styleUrl:'./any.component.css'
  })
  export class AnyComponent{
    anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  anyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  anyOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  }
  anyEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.providers.msgService.message("已经清除了");
      break;
    }
  `
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  anyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  anyOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  constructor(public mainService:ComponentService){
    super('FCANY',mainService);
  }

  anyEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      // this.mainService.messageService.warm('已经清除了内容');
      this.mainService.providers.msgService.message("已经清除了");
      break;
    }
  }
}
