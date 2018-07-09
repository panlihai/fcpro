import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, ParentEditComponent, ParentDetailComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { ProvidersService } from 'fccore';
@Component({
    selector: 'syscompanymodify',
    templateUrl: './syscompanymodify.component.html',
    styles: [`

  `]
})
export class SyscompanymodifyComponent extends ParentDetailComponent {
    //隶属关系对象
    syscompanyrelationObj: any;
    //修改id
    editId: string;
    // 生效日期
    sbeginDate: Date;
    // 成立日期
    sestDate: Date;
    // 注销日期
    sendDate: Date;
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private _providers: ProvidersService) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        this.editId = this.routerParam.ID;
        this.sbeginDate = this.mainObj.SBEGIN_DATE;
        this.sestDate = this.mainObj.SEST_DATE;
        this.sendDate = this.mainObj.SEND_DATE;
        //初始化主对象编辑
        this.mainService.initMainObj(this.editId)
            .subscribe(result => {
                if (result.CODE === '0') {
                    this.mainObj = result.DATA;
                }
            })
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    event(eventName: string, param: any): void {
    }
    /**
  * 表单工具栏事件
  * @param event 
  */
    tlbformEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'cardSaveBack':
                this.cardSaveBack(event.eventName);
                this
                break;
            case 'cardBack':
                this.cardBack(event.eventName);
                break;
        }
    }
    /**
     *保存返回
     * @param action 
     */
    cardSaveBack(action: string) {
        this.mainService.saveOrUpdateCompany(this.mainObj, this.syscompanyrelationObj, this.routerParam.dimCode, this.routerParam.parentCode)
            .subscribe(result => {
                if (result[0].CODE === '0' && result[1].CODE === '0') {
                    this.messageService.message('保存成功');
                    this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/syscompanyList']);
                } else {
                    this.messageService.error("保存失败");
                    this.messageService.error(result[0].MSG + ',' + result[1].MSG);
                }
            })
    }
    /**
     * 返回
     * @param action 
     */
    cardBack(action: string) {
        this._providers.commonService.event('selectedMenu', {
            refresh: 'N', MENUID: 'SYSCOMPANY', ROUTER: 'syscompanyList',
            PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
        });
    }
    /**
     * 上一条
     */
    prev() {

    }
    /**
     * 下一条
     */
    next() {

    }
}
