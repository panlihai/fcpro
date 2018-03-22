import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends ComponentParent {
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
        console.log(event.param);
        break;
      case "failure":
        console.log(event.param);
        break;
    }
  }
}