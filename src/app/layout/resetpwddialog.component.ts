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
        <fc-text fcLabel="原密码" [(ngModel)]="_lastPwd" name="lastpwd"></fc-text>
        <fc-text fcLabel="重置密码" [(ngModel)]="_newPwd" name="resetpwd"></fc-text>
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
  emitDataOutside() {
    let params = { lastPwd: this._lastPwd, newPwd: this._newPwd };
    this.modal.next(params);
  }

  handleCancel(e) {
    this.modal.destroy();
  }
  constructor(private modal: NzModalSubject) {

  }
}