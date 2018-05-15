import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styles: [`
  :host ::ng-deep .fc-header{
    text-align:left;
  }
  `]
})
export class ButtonComponent extends ComponentParent {
   //大小
   sizeview: string = `
   <fc-button [fcLabel]="'大'" fcLabel="large" fcSize="large"></fc-button>
   <fc-button [fcLabel]="'默认'" fcLabel="default" fcSize="default"></fc-button>
   <fc-button [fcLabel]="'小'"fcLabel="small" fcSize="small"></fc-button>
   `
   //iconview
   iconview: string = `
   <fc-button fcLabel="large" fcSize="large" fcIcon="fc-icon-method" fcIconPositon="left"></fc-button>>
   `
   //typeview按钮类型
   typeview : string  = `
   <fc-button fcLabel="primary" fcType="primary"></fc-button>
   <fc-button fcLabel="default" fcType="default"></fc-button>
   <fc-button fcLabel="dashed" fcType="dashed"></fc-button>
   <fc-button fcLabel="danger" fcType="danger"></fc-button>
   `
   //幽灵按钮ghostview
   ghostview : string = `
   <fc-button fcLabel="幽灵图标" fcType="primary" fcOpacity="true"></fc-button>
   <fc-button fcLabel="幽灵图标" fcType="dashed" fcOpacity="true"></fc-button>
   <fc-button fcLabel="幽灵图标" fcType="danger" fcOpacity="true"></fc-button>
   <fc-button fcLabel="幽灵图标" fcType="default" fcOpacity="true"></fc-button>
   `
   //positionview图标位置
   positionview : string = `
   <fc-button  fcLabel="右" fcIcon="fc-icon-method" fcIconPositon="right"></fc-button>
   <fc-button  fcLabel="左" fcIcon="fc-icon-method" fcIconPositon="left"></fc-button>
   ` 
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'button',
    templateUrl: './button.component.html',
    styleUrl:'./button.component.css'
  })
  export class ButtonComponent{
    }
  `
  constructor(public mainService: ComponentService) {
    super('FCBUTTON', mainService);
  }
}
