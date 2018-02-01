import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOptions, NAVSIDEOPTIONS, NAVSIDECOLOR, FcnavsideComponent } from 'fccomponent/fcnav';
import { environment } from '../../environments/environment';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`

  `]
})
export class LayoutComponent implements OnInit {
  _navbarStatus = "closed";
  _navmenuStatus = "opened";
  //侧边栏配置
  navSide: NAVSIDEOPTIONS = {
    fcAppid: '',
    fcLabelCode1: '全部消息',
    fcLabelCode2: '未读消息',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color',
    fcReadCode: 'read'
  };
  menuOptions: MenuOptions = {
    //所在产品优先级最高，当有产品时其它条件忽略
    fcPid: environment.pid
  };
  constructor(private router: Router) {

  }
  ngOnInit() {

  }
  navbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navbarStatus = event.param;
        break;
    }
  }
  navmenuEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navmenuStatus = event.param;     
    }
  }
  menuBlur() {

  }
  menuFocus() {

  }
  menuSelect() {

  }
}
