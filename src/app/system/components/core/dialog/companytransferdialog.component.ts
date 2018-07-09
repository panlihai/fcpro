import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { SyscompanyService } from '../../../services/syscompany.service';
/* 转移 */
@Component({
    selector: 'companytransferdialog',
    template: `
    <div>
      <div>
        <fc-tlblist [fcButtons]="tlbconfig" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
        <form fccontent>
            <fc-layoutpanel fccontent id="id0">
                <fc-title fcLabel="变更信息" fcBorder="bottom" fcWidth="96%" fcheader></fc-title>
                <fc-layoutcol fcSpans="1,1" fccontent>
                    <div fccontent1>
                        <!-- <fc-datetime [fcLabel]="'生效日期'" [fcAppid]="appId" [(ngModel)]="mainObj.SBEGIN_DATE" fcPlaceHolder="请输入生效日期" name="SYSCOMPANY.SBEGIN_DATE"></fc-datetime> -->
                    </div>
                    <div fccontent2>
                        <fc-text [fcLabel]="'变更文号'" [fcAppid]="appId" [(ngModel)]="mainObj.SAPPROVAL_DCMTNO" fcPlaceHolder="请输入变更文号" name="SYSCOMPANY.SAPPROVAL_DCMTNO"></fc-text>
                    </div>
                </fc-layoutcol>
                <fc-layoutcol fcSpans="1,0" fccontent>
                    <div fccontent1>
                        <!-- <fc-textarea [fcLabel]="'变更原因'" fcCol="1" fcPlaceHolder="请输入变更原因" name="SYSCOMPANY.SINVEST_TYPE"></fc-textarea> -->
                    </div>
                </fc-layoutcol>
            </fc-layoutpanel>
            <fc-layoutpanel fccontent id="id1">
                <fc-title fcLabel="上级单位" fcBorder="bottom" fcWidth="96%" fcheader></fc-title>
                <div style="width: 100%; height:400px;" fccontent>
                    <!-- 单位隶属关系 -->
                    <fc-listdata fcAppid="SYSCOMPANYRELATION" [fcOption]="mainService.syscompanyrelationOption"></fc-listdata>
                </div>
            </fc-layoutpanel>
        </form>
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
export class companytransferdialogComponent {
    //工具栏配置
    tlbconfig: any[] = [{
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'save',
        'BTNNAME': '保存'
    },
    {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'moveup',
        'BTNNAME': '上移'
    },
    {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'movedown',
        'BTNNAME': '下移'
    },
    {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'settop',
        'BTNNAME': '置顶'
    }, {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'setbottom',
        'BTNNAME': '置底'
    }, {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'moveto',
        'BTNNAME': '移至'
    }, {
        'BTNTYPE': 'default',
        'BTNICON': '',
        'ACTCODE': 'back',
        'BTNNAME': '返回列表'
    }
    ]
    @Input()
    userId: string;
    @Input()
    set options(option: any) {
        this.userId = option.userId;
    }
    _userId: string;
    constructor(private modal: NzModalSubject, public mainService: SyscompanyService) {

    }
    emitDataOutside() {
        let params = { userId: this._userId };
        this.modal.next(params);
        if (this._userId == '') {
            this.modal.destroy();
        }
    }

    handleCancel(e) {
        this.modal.destroy();
    }
    /**
     * 工具栏事件
     * @param event 
     */
    tlblistEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'save'://保存
                break;
            case 'moveup'://上移
                break;
            case 'movedown'://下移
                break;
            case 'settop'://置顶
                break;
            case 'setbottom'://置底
                break;
            case 'moveto'://移至
                break;
            case 'back'://返回列表
                break;
        }
    }
}