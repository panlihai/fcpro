import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { SyscompanyService } from '../../../services/syscompany.service';
// 排序下级
@Component({
    selector: 'companysortdialog',
    template: `
    <div>
      <div>
      <form fccontent1 class="list-search" name="searchForm" #searchForm >
        <div class="list-search-every">
            <fc-combo [fcLabel]="'维度'" fcAppid="SYSCOMPANYDIM" fcLabelCode="SDIM_NAME" fcValueCode="SDIM_CODE" [(ngModel)]="comboValue" name="SDIM_CODE"></fc-combo>
        </div>
        <div class="list-search-every">
        <fc-combo [fcLabel]="'上级'"fcAppid="SYSCOMPANYRELATION" fcLabelCode="SPARENT_CODE" fcValueCode="SPARENT_CODE" [(ngModel)]="comboValue" name="comboname"></fc-combo>
        </div>
        <div class="list-search-every list-search-button">
            <fc-button fcLabel="查询" fcType="primary" name="search"></fc-button>
            <fc-button fcLabel="清空" fcType="default" name="reset"></fc-button>
        </div>
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
export class companysortdialogComponent {
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