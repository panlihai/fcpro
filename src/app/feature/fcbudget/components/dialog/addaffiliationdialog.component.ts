// 新增从属关系
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'addaffiliationdialog',
  template: `
  <fc-layoutpanel>
      <fc-layoutcol fccontent fcSpans="1,1">
        <fc-combo fcLabel="主属性：" fccontent1></fc-combo>
        <fc-combo fcLabel="从属属性：" fccontent2></fc-combo>
      </fc-layoutcol>
      <fc-layoutcol fccontent fcSpans="1,1">
        <fc-radio fcLabel="选择属性值：" fccontent1 [fcOption]="radioOptions" class="radio"></fc-radio>
        <fc-check fcLabel="选择属性值：" fccontent2 [fcOption]="checkOptions" class="check"></fc-check>
      </fc-layoutcol>
      <fc-layoutcol fccontent fcSpans="1,0" class="buttons">
        <fc-button fcLabel="确定" fcType="primary" fccontent1></fc-button>
        <fc-button fcLabel="取消" fcType="default" fccontent1></fc-button>
      </fc-layoutcol>
  </fc-layoutpanel>
    `,
  styles: [`
  :host ::ng-deep .ant-radio-wrapper{
    display:block;
  }
  :host ::ng-deep .ant-checkbox-wrapper{
    display:block;
  }
  :host ::ng-deep .radio .ant-form-item-control .has-feedback {
    border: 1px solid;
    height: 300px;
    overflow: auto;
    padding-left: 5px;
  }
  :host ::ng-deep .check .ant-form-item-control .has-feedback {
    border: 1px solid;
    height: 300px;
    overflow: auto;
    padding-left: 5px;
  }
  :host ::ng-deep .buttons .fc-content1{
    text-align:center;
  }
  :host ::ng-deep .buttons .ant-btn{
    margin-right:10px;
  }
  :host ::ng-deep .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0px;
  }
  `]
})
export class AddaffiliationdialogComponent {
  //选择属性值：
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //选择属性值：
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' },{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
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