import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'tabmain',
  templateUrl: './tabmain.component.html',
  styles: [`
  :host ::ng-deep .tabmain .fc-full{
     height:auto;
   }
  `]
})
export class TabmainComponent extends ComponentParent {
  //基础bsicview
  basicview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex">
    <div fccontent1>fccontent1</div>
    <div fccontent2>fccontent2</div>
    <div fccontent3>fccontent3</div>
  </fc-tabmain>
  `
  //typeview
  typeview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex"[fcType]="card">
    <div fccontent1>fccontent1</div>
    <div fccontent2>fccontent2</div>
    <div fccontent3>fccontent3</div>
  </fc-tabmain>
  `
  //titleview选项卡标题
  titleview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex">
    <div fccontent1>fccontent1</div>
    <div fccontent2>fccontent2</div>
    <div fccontent3>fccontent3</div>
  </fc-tabmain>
  `
  //indexview选项卡索引
  indexview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="1">
    <div fccontent1>fccontent1</div>
    <div fccontent2>fccontent2</div>
    <div fccontent3>fccontent3</div>
  </fc-tabmain>
  `
  //buttonview显示滑动按钮
  buttonview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex"[fcShowPagination]="true">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabmain>
  `
  //positionview选项卡定位
  positionview : string = `
  <fc-tabmain [fcTabs]="tabmain" [fcSelectedIndex]="tabIndex" [fcPosition]="top">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabmain> 
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tabmain',
     templateUrl: './tabmain.component.html',
     styleUrl:'./tabmain.component.css'
   })
   export class TabmainComponent{
    //父选项卡
    tabmain = [
      { name: '父选项卡1', disabled: false },
      { name: '父选项卡2', disabled: false },
      { name: '父选项卡3', disabled: false }
    ];
    tabIndex=0;
   }
   `

  //父选项卡
  tabmain = [
    { name: '父选项卡1', disabled: false },
    { name: '父选项卡2', disabled: false },
    { name: '父选项卡3', disabled: false }
  ];
  tabIndex=0;
  constructor(public mainService: ComponentService) {
    super('FCTABMAIN', mainService);
  }
}