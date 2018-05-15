import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'navdropdown',
  templateUrl: './navdropdown.component.html',
  styles: [``]
})
export class NavdropdownComponent extends ComponentParent {
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'navdropdown',
    templateUrl: './navdropdown.component.html',
    styleUrl:'./navdropdown.component.css'
  })
  export class NavdropdownComponent{
    navdropdowncontent: any = {
      title: '下拉菜单',
      label: ['a', 'b','c','d']
    };
  }
  `
  //下拉菜单内容
  navdropdowncontent: any = {
    title: '下拉菜单',
    label: ['a', 'b','c','d']
  };
  constructor(public mainService: ComponentService) {
    super('FCNAVDROPDOWN', mainService);
  }
}