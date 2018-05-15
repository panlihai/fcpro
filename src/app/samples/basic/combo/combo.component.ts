import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'combo',
  templateUrl: './combo.component.html',
  styles: [``]
})
export class ComboComponent extends ComponentParent {
    //大小
    sizeview: string = `
    <fc-combo [(ngModel)]="comboValue"  fcSize="default" [fcOption]="comboOptions"></fc-combo>
    <fc-combo [(ngModel)]="comboValue"  fcSize="large" [fcOption]="comboOptions"></fc-combo>
    <fc-combo [(ngModel)]="comboValue"  fcSize="small" [fcOption]="comboOptions"></fc-combo>                            
    `
     //只读
   readonlyview: string = `
   <fc-combo [fcLabel]="'只读'" [(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled" [fcReadonly]="true"></fc-combo>
   `
     //单独禁用
  singledisabledview: string = `
  <fc-combo [fcLabel]="'单独禁用'" [(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled"></fc-combo>
  `
    //禁用状态
    disabledview: string = `
    <fc-combo [fcLabel]="'禁用'" [(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled" fcDisabled="true"></fc-combo>
    `
      //是否带搜索view
   searchview: string  = `
   <fc-combo [fcLabel]="'是否带搜索'" fcShowSearch="true" searchview[(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled"></fc-combo>
   `
   //未找到内容时
   nocontentview: string = `
   <fc-combo [fcLabel]="'未找到时'" fcNotFoundContent="未找到" [(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled">
   </fc-combo>
   `
   //必填view
   havetoview: string = `
   <fc-combo [fcLabel]="'必填'"  [fcRequired]="true" [(ngModel)]="comboValue" [fcOption]="comboOptions"></fc-combo>
   `
   //参照字典
   dictionaryview: string = `
   <fc-combo [fcLabel]="'参照字典'" fcAppid="SYSAPP" fccontent fcFieldCode="APPID" fcLabelCode="APPNAME" fcValueCode="APPID"></fc-combo>
   `
     //清除事件捕获view
     clearview: string = `
     <fc-combo [fcLabel]="'清除捕获事件'"[(ngModel)]="comboValue" [fcOption]="comboOptionsDisabled" (fcEvent)="comboEvent($event)"> </fc-combo>
     `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'combo',
    templateUrl: './combo.component.html',
    styleUrl:'./combo.component.css'
  })
  export class AnyComponent{
    comboValue: string = 'a';
    comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    comboOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
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
   comboEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm('已经清除了内容');
      break;
    }
  }
   `
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  constructor(public mainService: ComponentService) {
    super('FCCOMBO', mainService);
  }

  comboEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm('已经清除了内容');
      break;
    }
  }
}


