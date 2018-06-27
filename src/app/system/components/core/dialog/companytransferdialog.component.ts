import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'companytransferdialog',
    template: `
    <div>
      <div>
        开发中
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
export class companytransferdialogComponent {
    @Input()
    userId: string;
    @Input()
    set options(option: any) {
        this.userId = option.userId;
    }
    _userId: string;
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