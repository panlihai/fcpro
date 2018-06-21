import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'resetpwddialog',
  template: `
    <div>
      <div>
        <fc-text fcLabel="角色名称" [(ngModel)]="roleName" name="roleName"></fc-text>
        <fc-text fcLabel="备注" [(ngModel)]="remark" name="remark"></fc-text>
      </div>
      <div class="customize-footer">
        <fc-button  [fcType]="'primary'" fcLabel="确定" (click)="ok($event)">
        </fc-button>
        <fc-button [fcType]="'default'" fcLabel="取消"  (click)="cancel($event)">
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
export class SysroleDialogEditComponent {
  roleName: string = '';
  remark: string = '';
  roleId: string = '';
  id: string;
  @Input()
  set options(option: any) {
    this.roleName = option.ROLENAME;
    this.remark = option.REMARK;
    this.id = option.ID;
    this.roleId = option.ROLEID;
  }
  ok() {
    let param: any = { ROLENAME: this.roleName, REMARK: this.remark, ROLEID: this.roleId };
    if (this.id) {
      param.ID = this.id;
    }

    this.modal.next(param);
    this.modal.destroy();
  }

  cancel(e) {
    this.modal.destroy();
  }
  constructor(private modal: NzModalSubject) {

  }
}