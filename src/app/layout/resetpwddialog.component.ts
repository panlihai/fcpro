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
@Component({
    selector: 'resetpwddialog',
    template: `
    <div>
      <div>
        <fc-text fcLabel="上次密码" name="lastpwd"></fc-text>
        <fc-text fcLabel="重置密码" name="resetpwd"></fc-text>
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
     
   }
  `]
})
export class ResetpwddialogComponent implements OnInit {
    _name: string;
    @Input()
    set name(value: string) {
        this._name = value;
    }
    emitDataOutside() {
        this.modal.next('传出数据');
    }

    handleCancel(e) {
        this.modal.destroy('onCancel');
    }
    constructor(private modal: NzModalSubject) {


    }
    ngOnInit() {

    };
}
