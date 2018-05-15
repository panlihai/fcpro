import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'icon',
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
  //大小
  sizeview: string = `
  <fc-icon fcIcon="fc-icon-notice" fcSize="large" fcToolTip="small"></fc-icon>
  <fc-icon fcIcon="fc-icon-notice" fcSize="default" fcToolTip="default"></fc-icon>
  <fc-icon fcIcon="fc-icon-notice" fcSize="small" fcToolTip="large"></fc-icon>
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl:'./icon.component.css'
  })
  export class IconComponent{
    icons: any[];
    }
  `
  //图标
  icons: any[];
  constructor(public mainService: ComponentService) {
    super('FCICON', mainService);
    this.mainService.getIcon().subscribe(result => {
      this.icons = result.DATA;
    })
  }
}