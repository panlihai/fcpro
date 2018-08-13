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
            <fc-text fccontent1 fcLabel="隶属编码"  [(ngModel)]="codeValue" [fcAppid]="appId" fcFieldCode="APPID" name="APPID" fcReadonly="true"></fc-text>
            <fc-radio fccontent2 fcLabel="分组类型"  [(ngModel)]="mainObj.TYPE" [fcAppid]="appId" fcFieldCode="TYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="TYPE" [fcDisabled]="true"></fc-radio>
            <fc-text fccontent1 fcLabel="分组编码"  [(ngModel)]="mainObj.GRPCODE" [fcAppid]="appId" fcFieldCode="GRPCODE" name="GRPCODE"></fc-text>
            <fc-text fccontent2 fcLabel="分组名称"  [(ngModel)]="mainObj.GRPNAME" [fcAppid]="appId" fcFieldCode="GRPNAME" name="GRPNAME"></fc-text>
            <fc-text fccontent1 fcLabel="排序"  [(ngModel)]="mainObj.SORTBY" [fcAppid]="appId" fcFieldCode="SORTBY" name="SORTBY"></fc-text>
        </fc-layoutcol>
        <div fccontent class="centerBtn">
            <fc-tlbform fcType="primary" [fcAppid]="appId"  (fcEvent)="tlbformEvent($event)"></fc-tlbform>
        </div>
    </fc-layoutpanel>
    `,
    styles: [`
    .centerBtn {
        display: flex;
        justify-content: center;
    }
  `]
})
export class SysappfieldgroupComponent extends ParentEditComponent {
    mainObj: any = {};
    codeValue: any;
    @Input()
    set options(dialogCardListArgs: DialogCardListArgs) {
        if (Object.keys(dialogCardListArgs.data).indexOf('VIEWID') > -1) {
            this.mainObj.TYPE = 'viewElement';
            this.mainObj.APPID = dialogCardListArgs.data.VIEWID;
            this.getInfoAboutView(dialogCardListArgs.data.VIEWID);
        } else {
            this.mainObj.TYPE = 'attrElement';
            this.mainObj.APPID = dialogCardListArgs.data.APPID;
            this.codeValue = this.mainObj.APPID;
        }
    }
    constructor(public mainService: SysappfieldgroupService, private modal: NzModalSubject, public router: Router, public activeRoute: ActivatedRoute, private providers: ProvidersService) {
        super(mainService, router, activeRoute);
    }
    getInfoAboutView(id) {
        this.mainService._findWithQuery('SYSVIEW', { VIEWID: id }).subscribe(res => {
            if (res.CODE === '0') {
                this.codeValue = `${res.DATA[0]['VIEWID']} - ${res.DATA[0]['VIEWNAME']}`;
            }
        })
    }
    /**
      * 点击保存icon类名
      * @param event  
      */
    event(eventName: string) {
    }
    init(): void {
    }
    addNew(mainObj: any): boolean {
        return true
    }
}