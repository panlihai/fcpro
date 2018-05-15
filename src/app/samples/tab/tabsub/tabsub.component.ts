import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'tabsub',
  templateUrl: './tabsub.component.html',
  styles: [`
  :host ::ng-deep .tabsub .fc-full{
    height:auto;
  }
    
  `]
})
export class TabsubComponent extends ComponentParent {
  //基础bsicview
  basicview : string = `
  <fc-tabsub [fcTabs]="tabsub" [fcSelectedIndex]="tabIndex">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabsub>
  `
  //typeview
  typeview : string = `
  <fc-tabsub [fcTabs]="tabsub" [fcType]="card">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabsub>
  `
  //titleview选项卡标题
  titleview : string = `
  <fc-tabsub [fcTabs]="tabsub" [fcSelectedIndex]="tabIndex">
    <div fccontent1>fccontent1</div>
    <div fccontent2>fccontent2</div>
    <div fccontent3>fccontent3</div>
  </fc-tabsub>
  `
  //indexview选项卡索引
  indexview : string = `
  <fc-tabsub [fcTabs]="tabsub" [fcSelectedIndex]="1">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabsub>
  `
  //positionview选项卡定位
  positionview : string = `
  <fc-tabsub [fcTabs]="tabsub" [fcShowPagination]="top">
      <div fccontent1>fccontent1</div>
      <div fccontent2>fccontent2</div>
      <div fccontent3>fccontent3</div>
  </fc-tabsub>
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tabsub',
     templateUrl: './tabsub.component.html',
     styleUrl:'./tabsub.component.css'
   })
   export class TabsubComponent{
    //子选项卡
    tabsub = [
      { name: '子选项卡1' },
      { name: '子选项卡2' },
      { name: '子选项卡3' }
    ];
    tabIndex=0;
   }
   `
  //子选项卡
  tabsub = [
    { name: '子选项卡1' },
    { name: '子选项卡2' },
    { name: '子选项卡3' }
  ];
  tabIndex=0;
  constructor(public mainService: ComponentService) {
    super('FCTABSUB', mainService);
  }
}