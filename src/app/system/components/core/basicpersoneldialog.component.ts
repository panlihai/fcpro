import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'basicpersoneldialog',
  template: `
    <div>
      <div>
        <fc-text fcLabel="单位" [fcRequired]="true" [(ngModel)]="_lastPwd" [fcValid]="mainValid._lastPwd" name="lastpwd"></fc-text>
        <fc-text fcLabel="部门" [fcRequired]="true"  [(ngModel)]="_newPwd" [fcValid]="mainValid._newPwd" name="resetpwd"></fc-text>
        <fc-text fcLabel="用户" [fcRequired]="true"  [(ngModel)]="_newPwd" [fcValid]="mainValid._newPwd" name="resetpwd"></fc-text>
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
export class BasicpersoneldialogComponent {
  _lastPwd: string;
  _newPwd: string;
  @Input()
  lastPwd: string;
  @Input()
  newPwd: string;
  @Input()
  set options(option: any) {
    this._lastPwd = option.lastPwd;
    this._newPwd = option.newPwd;
  }
  // 表单验证对象
  mainValid: any = {};
  constructor(private modal: NzModalSubject) {

  }
  emitDataOutside() {
    let params = { lastPwd: this._lastPwd, newPwd: this._newPwd };
    this.modal.next(params);
    this.modal.destroy();
  }
  handleCancel(e) {
    this.modal.destroy();
  }
}