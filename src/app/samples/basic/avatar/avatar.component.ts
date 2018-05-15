import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styles: [`
    .avatar{
      margin-left:24px;
    }
  `]
})
export class AvatarComponent extends ComponentParent {
  //基本style
  avatarstyle : string = `
  .avatar{
    margin-left:24px;
  }
  `
   //大小
   sizeview: string = `
   <fc-avatar fcIcon="user" fcSize="small" class="avatar"></fc-avatar>
   <fc-avatar fcIcon="user" fcSize="default" class="avatar"></fc-avatar>
   <fc-avatar fcIcon="user" fcSize="large" class="avatar"></fc-avatar>
   `
   //方形squerview
   squerview : string  = `
   <fc-avatar fcIcon="user" fcShape="square" fcSize="small" class="avatar"></fc-avatar>
   <fc-avatar fcText="Neusoft" fcShape="square" class="avatar"></fc-avatar>
   <fc-avatar fcIcon="user" fcShape="square" class="avatar" fcSrc="http://img5.imgtn.bdimg.com/it/u=1306068130,3101041517&fm=27&gp=0.jpg" fcSize="large"></fc-avatar>  
   `
   //textview自动以图片颜色背景
   textview : string = `
   <fc-avatar fcText="PLH" fcShape="square" fcSize="large" fcColor="blue" fcBgColor="#000000" style="margin-right: 24px;"></fc-avatar>
   `
   //iconview带徽标
   iconview : string = `
   <fc-avatar fcCount="5" fcIcon="user" fcSize="small"  class="avatar"></fc-avatar>
   <fc-avatar fcCount="5" fcIcon="user" class="avatar"></fc-avatar>
   <fc-avatar fcCount="5" fcIcon="user" fcSize="large"  class="avatar"></fc-avatar>
   `
   //circleview带圆点徽标头像
   circleview : string = `
   <fc-avatar fcIcon="user" fcSize="small" fcMode="DOT" class="avatar"></fc-avatar>
   <fc-avatar fcIcon="user" fcHasDot="true" fcMode="DOT" class="avatar"></fc-avatar>
   <fc-avatar fcIcon="user" fcSize="large" fcMode="DOT" class="avatar"></fc-avatar>
   `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html',
    styleUrl:'./avatar.component.css'
  })
  export class AvatarComponent{
    }
  `
  constructor(public mainService: ComponentService) {
    super('FCAVATAR', mainService);
  }
}

