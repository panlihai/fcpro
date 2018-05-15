import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'many',
  templateUrl: './many.component.html',
  styles: [``]
})
export class ManyComponent extends ComponentParent {
  //大小
  sizeview: string = `
  <fc-many [fcLabel]="'默认'" [(ngModel)]="manyValue"  fcSize="default" [fcOption]="manyOptions"></fc-many>
  <fc-many [fcLabel]="'大'" [(ngModel)]="manyValue"  fcSize="large" [fcOption]="manyOptions"></fc-many>
  <fc-many [fcLabel]="'小'" [(ngModel)]="manyValue"  fcSize="small" [fcOption]="manyOptions"></fc-many>
  `
  //只读
  readonlyview: string = `
  <fc-many [fcLabel]="'只读'" [(ngModel)]="manyValue"  [fcOption]="manyOptionsDisabled" [fcReadonly]="true"></fc-many>
  `


  //单独禁用
  singledisabledview: string = `
  <fc-many [fcLabel]="'单独禁用'" [(ngModel)]="manyValue"  [fcOption]="manyOptionsDisabled"></fc-many>
  `
  //禁用状态
  disabledview: string = `
  <fc-any [fcLabel]="'禁用'" fcDisabled="true" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled" ></fc-any>
  `
  //是否带搜索view
  searchview: string  = `
  <fc-many [fcLabel]="'带搜索'" fcShowSearch="true" [(ngModel)]="manyValue"  [fcOption]="manyOptionsDisabled"></fc-many>
  `
  //未找到内容时
  nocontentview: string = `
  <fc-many [fcLabel]="'未找到时'" [(ngModel)]="manyValue" fcNotFoundContent="当下拉列表为空时显示的内容"  [fcOption]="manynullOptions" fcNotFoundContent="没有数据"></fc-many>
  `
  //清除事件捕获view
  clearview: string = `
  <fc-any [fcLabel]="'清除捕获事件'" [(ngModel)]="anyValue" [fcOption]="anyOptionsDisabled" (fcEvent)="anyEvent($event)"></fc-any> 
  `




  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'many',
    templateUrl: './many.component.html',
    styleUrl:'./many.component.css'
  })
  export class ManyComponent{
    manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
    manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
    manynullOptions: any[] = [];
  }
  `
  //clearjs
  clearjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'many',
    templateUrl: './many.component.html',
    styleUrl:'./many.component.css'
  })
  export class ManyComponent{
    manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
    manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
    manynullOptions: any[] = [];
  }
  manyEvent(event:FCEVENT){
    switch(event.eventName){
        case 'clear':
        this.mainService.messageService.warm("已经清除了内容");
        break;
    }
  }
  `
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  manynullOptions: any[] = [];
  constructor(public mainService: ComponentService) {
    super('FCMANY', mainService);
  }
  manyEvent(event:FCEVENT){
    switch(event.eventName){
        case 'clear':
        this.mainService.messageService.warm("已经清除了内容");
        break;
    }
  }
}
