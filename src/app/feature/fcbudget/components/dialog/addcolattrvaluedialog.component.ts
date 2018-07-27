// 添加列属性
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'addcolattrvaluedialog',
  template: `
   选择属性
    `,
  styles: [`
   :host ::ng-deep .templatetablist .ant-col-22 {
     margin-left:4%;
   }
  `]
})
export class AddcolattrvaluedialogComponent {
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