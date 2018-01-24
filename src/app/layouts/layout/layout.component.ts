import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOptions } from 'fccomponent/fcnav';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`

  `]
})
export class LayoutComponent implements OnInit {
  menuSelectObj: any = {};
  menuOptions: MenuOptions = {
    //元数据id
    fcPid:environment.pid
  };
  constructor(private router: Router) {

  }
  ngOnInit() {

  }
  menuBlur(){
    
  }
  menuFocus(){
    
  }
  menuSelect(){
    
  }
}
