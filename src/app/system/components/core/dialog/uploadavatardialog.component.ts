import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'resetpwddialog',
    template: `
    <div>
      <div>
        <fc-upload  fcListType="picture-card" 
         (fcEvent)="uploadEvent($event)"
          [fcOption]="fcUpLoadOption"></fc-upload>
      </div>
      <div class="customize-footer">
        <fc-button  [fcType]="'primary'" fcLabel="确定" (click)="emitDataOutside($event)">
        </fc-button>
        <fc-button [fcType]="'default'" fcLabel="取消"  (click)="handleCancel($event)">
        </fc-button>
      </div>
    </div>
    `,
    styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class UploadavatardialogComponent {
    @Input()
    userId: string;
    @Input()
    set options(option: any) {
        this.userId = option.userId;
    }
    _userId: string;
    //上传图片
    fcUpLoadOption: any = {
        FILETYPE: 'PIC',
        SOURCEID: this._userId,
        SOURCEAID: "SYSUSER"
    }
    uploadEvent(event: FCEVENT) {
        switch (event.eventName) {
            case "loaded"://加载
                console.debug(event.param);
                break;
            case "uploading"://上传中
                break;
            case "success"://成功
                break;
        }
    }
    constructor(private modal: NzModalSubject) {
    }
    emitDataOutside() {
        let params = { userId: this._userId };
        this.modal.next(params);
        if (this._userId == '') {
            this.modal.destroy();
        }
    }

    handleCancel(e) {
        this.modal.destroy();
    }
}