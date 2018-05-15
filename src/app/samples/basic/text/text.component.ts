import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styles: [``]
})
export class TextComponent extends ComponentParent {
  content: string = '文本内容';
  //只读
  readonlyjs: string = `
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'text',
        templateUrl: './text.component.html',
        styleUrl:'./text.component.css'
      })
      export class TextComponent{
        content: string = "文本内容";
      }
  `
  //大小
  sizeview: string = `
  <fc-text fcLabel="默认" [(ngModel)]="content" fcSize="default"></fc-text>
  <fc-text fcLabel="大" [(ngModel)]="content" fcSize="large"></fc-text>
  <fc-text fcLabel="小" [(ngModel)]="content" fcSize="small"></fc-text>
  `
  // 类型
  typeview: string = `
  <fc-text [fcLabel]="'文本类型'" fcType="text" [(ngModel)]="content"></fc-text>
  <fc-text [fcLabel]="'查询'" fcType="search" fcPlaceHolder="请输入查询条件"></fc-text>
  <fc-text [fcLabel]="'隐藏'" fcType="hidden"></fc-text>
  `
  //内部前缀
  Prefix: string = `
  <fc-text [fcLabel]="'内部前缀'" [(ngModel)]="addonbefore" [fcPrefix]="'fc-icon-unit'"></fc-text>

  `
  //内后前缀
  Suffix: string = `
   <fc-text [fcLabel]="'内部后缀'" [(ngModel)]="addonbefore" [fcSuffix]="'fc-icon-unit'"></fc-text>
   `
   //前置标签
   AddonBefore : string = `
   <fc-text [fcLabel]="'后置标签'" [(ngModel)]="addonbefore" [fcAddonBefore]="'fc-icon-unit'" fcMode="icon"></fc-text>
   `
  //后置标签
  AddonAfter: string = `
  <fc-text [fcLabel]="'后置标签'" [(ngModel)]="addonbefore" [fcAddonAfter]="'fc-icon-unit'" fcMode="icon"></fc-text>
  `
  //联想输入
  Lenovo: string = `
  <fc-text fcLabel="联想输入测试" [fcAppid]="'SYSAPP'" [(ngModel)]="content" fcFieldCode='APPNAME' fcAppid='SYSAPP' name="fuzzy"></fc-text>
  `
  //后缀事件view
  addonafterview: string = `
  <fc-text [fcLabel]="'后缀事件'" [(ngModel)]="addonafer" [fcAddonAfter]="'万元'" fcMode="text" (fcEvent)="addonafterEvent($event)"> </fc-text>
  `
  //后缀事件code
  addonafterviewjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrl:'./text.component.css'
  })
  export class TextComponent{
    content: string = "文本内容";
  }
  addonafterEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'click':
        console.log("后缀click事件抛出.");
        break;
    }
  }
  `
  //查询事件view
  textEventview: string = `
  <fc-text [fcLabel]="'查询'" fcType="search" fcPlaceHolder="请输入查询条件" (fcEvent)="textEvent($event)"></fc-text>
  `
  //查询事件code
  textEvenjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrl:'./text.component.css'
  })
  export class TextComponent{
    content: string = "文本内容";
  }
  textEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'search'://查询事件
        this.mainService.providers.msgService.message("这是查询事件");
        break;
    }
  }
  }
  `
  //前置和前置
  addonbefore: string = 'github.com/panlihai/fcexample/tree/dev';
  //后置和后缀
  addonafer: string = 'github.com/panlihai/fcexample/tree/dev';
  selectOption: any = {
    title: "人民币",
    label: [
      '人民币',
      '美元',
      '英镑',
      '泰铢'
    ]
  }
  textEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'click'://点击事件
        this.mainService.providers.msgService.message("这是查询事件");
        break;
    }
  }
  constructor(public mainService: ComponentService) {
    super('FCTEXT', mainService);
  }
  /**
   * 后缀事件抛出
   * @param event 
   */
  addonafterEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'click':
      this.mainService.providers.msgService.message("这是点击事件");
        break;
    }
  }
}