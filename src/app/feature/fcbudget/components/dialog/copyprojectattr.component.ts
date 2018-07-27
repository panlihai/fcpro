// 复制项目属性
import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
    selector: 'copyattrdialog',
    template: `
   选择属性
    `,
    styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class CopyprojectattrComponent {
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