import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { ProvidersService } from 'fccore';
import { ParentEditComponent } from 'fccomponent';
import { SysappfieldgroupService } from '../../../services/sysappfieldgroup.service';
import { DialogCardListArgs } from './dialogcardlist.component';
@Component({
    selector: 'icondialog',
    template: `
    <fc-layoutpanel>
        <fc-layoutcol fccontent>
            <fc-text fccontent1 fcLabel="分组编码"  [(ngModel)]="mainObj.GRPCODE" [fcAppid]="appId" fcFieldCode="GRPCODE" name="GRPCODE"></fc-text>
            <fc-text fccontent2 fcLabel="分组名称"  [(ngModel)]="mainObj.GRPNAME" [fcAppid]="appId" fcFieldCode="GRPNAME" name="GRPNAME"></fc-text>
            <fc-text fccontent1 fcLabel="排序"  [(ngModel)]="mainObj.SORTBY" [fcAppid]="appId" fcFieldCode="SORTBY" name="SORTBY"></fc-text>
        </fc-layoutcol>
        <div style="centerBtn">
            <fc-button fcType="primary" fcLabel="保存" (fcEvent)="event('save')"></fc-button>
        </div>
    </fc-layoutpanel>
    `,
    styles: [`
  `]
})
export class SysappfieldgroupComponent extends ParentEditComponent {
    dialogCardListArgs: DialogCardListArgs;
    mainObj: any = {};
    constructor(public mainService: SysappfieldgroupService, private modal: NzModalSubject, public router: Router, public activeRoute: ActivatedRoute, private providers: ProvidersService) {
        super(mainService, router, activeRoute);
    }
    @Input()
    options(dialogCardListArgs: DialogCardListArgs) {
        this.dialogCardListArgs = dialogCardListArgs;
    }
    /**
  * 点击保存icon类名
  * @param event  
  */
    event(eventName: string) {
        switch (eventName) {
            case 'save':
                this.mainObj.APPID = this.dialogCardListArgs.appId;
                this.providers.appService.saveObject(this.appId, this.mainObj).subscribe(res => {
                    if (res.CODE === '0') {
                        this.providers.msgService.success('保存成功');
                    } else {
                        this.providers.msgService.error('保存失败');
                    }
                })
                this.modal.next(this.mainObj);
                this.modal.destroy();
                break;
        }
    }
    init(): void {
    }
    addNew(mainObj: any): boolean {
        return true
    }
}