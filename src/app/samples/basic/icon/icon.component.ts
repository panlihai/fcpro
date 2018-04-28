import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: [`
  .fc_icon_layout{
    width: 25%;
    height: 89px;
    display: inline-flex; 
    align-items: center; 
    justify-content: center;
  }
  .fc_icon_layout:hover{
    background: #10a3e9;
  }
  `]
})
export class IconComponent extends ComponentParent {
  //图标
  icons: any[];
  constructor(public mainService: ComponentService) {
    super('FCICON', mainService);
    this.mainService.getIcon().subscribe(result => {
      this.icons = result.DATA;
    })
  }
}