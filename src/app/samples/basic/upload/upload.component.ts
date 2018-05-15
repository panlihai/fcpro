import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styles: [``]
})
export class UploadComponent extends ComponentParent {
  //基本view
  basicview: string = `
  <fc-upload  [fcLabel]="'基本'" (fcEvent)="fileEvent($event)" [fcOption]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"></fc-upload>
  `
  //只读
  readonlyview: string = `
  <fc-upload  [fcLabel]="'只读'" [fcReadonly]="true" (fcEvent)="fileEvent($event)" [fcOption]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"></fc-upload>
  `
  //禁用
 disabledview: string = `
 <fc-upload  [fcLabel]="'只读'" [fcListType]="'picture-card'" (fcEvent)="fileEvent($event)" [fcOption]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"fcdisabled="true"></fc-upload>
 `
 //listview
 listview: string = `
 <fc-upload  [fcLabel]="'图片列表'" fcListType="text" (fcEvent)="fileEvent($event)" [fcParam]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"></fc-upload>
 `
 //pictureview
 pictureview: string = `
 <fc-upload  [fcLabel]="'照片墙'" [fcListType]="'picture-card'" (fcEvent)="fileEvent($event)" [fcOption]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"></fc-upload>
 `
  // 基本basicjs
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrl:'./upload.component.css'
  })
  export class DateComponent{
  }
  `
  // 基本filejs
  filejs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrl:'./upload.component.css'
  })
  export class DateComponent{
    switch (event.eventName) {
      case "success":
      this.mainService.providers.msgService.message("上传成功");
        break;
      case "failure":
      this.mainService.providers.msgService.message("上传失败");
        break;
    }
  }
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCUPLOAD', mainService);
  }
  /**
  * 上传图片
  * @param event  
  */
  fileEvent(event): any {
    switch (event.eventName) {
      case "success":
      this.mainService.providers.msgService.message("上传成功");
        break;
      case "failure":
      this.mainService.providers.msgService.message("上传失败");
        break;
    }
  }
}