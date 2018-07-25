import { Component, Input, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { ProvidersService } from 'fccore';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    template: `
    <!-- 视图入口-视图卡片 -->
<fc-layoutpanel class="sys-card-pannel">
    <fc-tlblist fcheader class="sys-fast-tlblist" fcSize="small" [fcButtons]="sysLookUp" (fcEvent)="tlblistEvent($event);"></fc-tlblist>
    <div fccontent>
        <div nz-row [nzGutter]="8">
            <!-- 视图列表循环 -->
            <div nz-col [nzSpan]="6" class="sys-card" *ngFor="let data of datas">
                <nz-card>
                    <ng-template #body>
                        <div class="sys-card-content">
                            <fc-tooltip class="sys-card-help" fcTitle="{{data.APPNAME}}">
                                <fc-icon fcIcon="fc-icon-wiki" fccontent></fc-icon>
                            </fc-tooltip>
                            <span class="sys-card-mark">
                                <fc-icon fcIcon="fc-icon-definition" fcColor="#ffffff"></fc-icon>
                            </span>
                            <div class="sys-card-text">
                                <div class="sys-card-title">
                                    {{data.APPdata}}-{{data.APPID}}
                                </div>
                                <p class="sys-card-smarks">{{data.DIRECTION}}</p>
                            </div>
                        </div>
                        <div class="sys-card-footer">
                            <fc-button class="sys-card-btn" fcLabel="选择" (click)="selectdata($event,data);" [fcBlock]="true">
                            </fc-button>
                        </div>
                    </ng-template>
                </nz-card>
            </div>
        </div>
    </div>
</fc-layoutpanel>
    `,
    styles: [`
    .sys-card-btn{
        width:50%;
      }
  `]
})
export class DialogCardListComponent implements OnInit {
    dialogCardListArgs: DialogCardListArgs;
    datas: any[];
    sysLookUp: any =
        [{
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpA',
            'BTNNAME': 'A'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpB',
            'BTNNAME': 'B'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpC',
            'BTNNAME': 'C'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpD',
            'BTNNAME': 'D'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpE',
            'BTNNAME': 'E'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpF',
            'BTNNAME': 'F'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpG',
            'BTNNAME': 'G'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpH',
            'BTNNAME': 'H'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpI',
            'BTNNAME': 'I'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpJ',
            'BTNNAME': 'J'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpK',
            'BTNNAME': 'K'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpL',
            'BTNNAME': 'L'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpM',
            'BTNNAME': 'M'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpN',
            'BTNNAME': 'N'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpO',
            'BTNNAME': 'O'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpP',
            'BTNNAME': 'P'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpQ',
            'BTNNAME': 'Q'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpR',
            'BTNNAME': 'R'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpS',
            'BTNNAME': 'S'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpT',
            'BTNNAME': 'T'
        }, {
            'BTNTYPE': 'default',

            'ACTCODE': 'lookUpA',
            'BTNNAME': 'U'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpV',
            'BTNNAME': 'V'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpW',
            'BTNNAME': 'W'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpX',
            'BTNNAME': 'X'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpY',
            'BTNNAME': 'Y'
        }, {
            'BTNTYPE': 'default',
            'ACTCODE': 'lookUpZ',
            'BTNNAME': 'Z'
        }];
    @Input()
    set options(dialogCardListArgs: DialogCardListArgs) {
        this.dialogCardListArgs = dialogCardListArgs;
    }
    constructor(private modal: NzModalSubject, private providers: ProvidersService) {
    }
    ngOnInit() {
        this._init();
    }
    _init() {
        let { appId, condition } = this.dialogCardListArgs;
        if (this.dialogCardListArgs.appId) {
            this.providers.appService.findWithQuery(appId, condition).subscribe(res => {
                if (res.CODE === '0') {
                    this.datas = res.DATA;
                    this.dialogCardListArgs.datas = this.datas;
                } else {
                    this.providers.msgService.error('获取数据失败');
                }
            })
        }
    }
    _emitdataOutside(data: any) {
        if (data)
            this.dialogCardListArgs.data = data;
        this.modal.next(this.dialogCardListArgs);
        this.modal.destroy();
    }
    selectdata(ev: any, data: any) {
        this.modal.destroy();
        this._emitdataOutside(data);
    }
    _cancel() {
        this.modal.destroy();
    }
    tlblistEvent(event: FCEVENT) {
        let str = event.eventName.substr(6, 1);
        if (str)
            this.dialogCardListArgs.condition = { WHERE: `APPID LIKE '${str}%'` }
        this._init();
    }
}
export interface DialogCardListArgs {
    [key: string]: any;
    appId?: string,
    methodIndex?: string,
    condition?: object,
    data?: any,
}
