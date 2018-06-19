import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProvidersService, MessageService } from 'fccore';
import { LayoutService } from '../system/services/layout.service';
import { FcmodalconfirmComponent } from 'fccomponent/fcmodal/fcmodalconfirm.component';
import { FCEVENT } from 'fccomponent/fc';
import { NavsideOptions } from 'fccomponent/fcnav/fcnavside.component';
import { MenuOptions, FcnavmenuComponent, Fcmenu } from 'fccomponent/fcnav/fcnavmenu.component';
import { FcTaboptions, FcnavtabComponent } from 'fccomponent/fcnav/fcnavtab.component';
import 'rxjs/add/operator/filter';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'resetpwddialog',
  template: `
    <div>
      <div>
        <fc-text fcLabel="原密码" [fcRequired]="true" [(ngModel)]="_lastPwd" [fcValid]="mainValid._lastPwd" name="lastpwd"></fc-text>
        <fc-text fcLabel="重置密码" [fcRequired]="true"  [(ngModel)]="_newPwd" [fcValid]="mainValid._newPwd" name="resetpwd"></fc-text>
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
export class ResetpwddialogComponent {
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
    if (this.validator()) {
      this.modal.destroy();
    }
  }

  handleCancel(e) {
    this.modal.destroy();
  }
  /**
   * 表单验证
   */
  validator() {
    let v: boolean = true;
    Object.keys(this.mainValid).forEach(key => {
      let validator = JSON.parse(this.mainValid[key]);
      //当前主对象的字段值
      let value1 = this._lastPwd;
      let value2 = this._newPwd;
      // 当前主对象的校验规则
      let valid = validator.validators;
      // 当前主对象校验规则错误说明
      let message = validator.errorMessages;
      // 判断是否必填
      if (valid.required && value1.length === 0) {
        validator.show = 'Y';
        validator.showValidator = "required";
        v = false;
      } else if (value1.length > valid.maxLength) {
        validator.show = 'Y';
        validator.showValidator = "maxLength";
        v = false;
      } else if (valid.customVal) {
        validator.show = 'Y';
        validator.showValidator = "customVal";
        v = false;
      }
      this.mainValid[key] = JSON.stringify(validator);
    });
    return v;
  }
}