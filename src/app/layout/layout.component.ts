import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOptions, NavsideOptions, NAVSIDECOLOR, FcnavsideComponent } from 'fccomponent/fcnav';
import { environment } from '../../environments/environment';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`

  `]
})
export class LayoutComponent implements OnInit {
  _projectName = environment.projectName;
  _navbarStatus = "closed";
  _navmenuStatus = "opened";
  //侧边栏配置
  navSide: NavsideOptions = {
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
    //侧边栏内容
    this.navSide.fcValues1 = [
      {
        title: "消息1",
        smark: "这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息2",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息2",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 1
      }, {
        title: "消息3",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 1
      }, {
        title: "消息4",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息5",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 1
      }, {
        title: "消息6",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息7",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 1
      }, {
        title: "7",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 0
      }, {
        title: "消息8",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 1
      }, {
        title: "消息9",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息10",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }
    ];
    this.navSide.fcValues2 = [
      {
        title: "消息1",
        smark: "这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息2",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息2",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 0
      }, {
        title: "消息3",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息4",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息5",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 0
      }, {
        title: "消息6",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息7",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "7",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 2,
        read: 0
      }, {
        title: "消息8",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 0,
        read: 0
      }, {
        title: "消息9",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }, {
        title: "消息10",
        smark: "这个消息是这个是描述消息的这个是描述消息的这个是描述消息的这个是描述消息的",
        color: 1,
        read: 0
      }
    ];
  }
  /**
   * 导航栏事件
   * @param event 
   */
  navbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this._navbarStatus = event.param;
        break;
      case 'selectTopMenu':
        this._menus = event.param.P_CHILDMENUS;
        break;
    }
  }
  _menus: any = [];
  /**
   *  菜单事件
   * @param event 
   */
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
