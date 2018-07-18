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
export class SyscompanymodifyComponent extends ParentEditComponent {
    //隶属关系对象
    syscompanyrelationObj: any;
    // 生效日期
    sbeginDate: Date;
    // 成立日期
    sestDate: Date;
    // 注销日期
    sendDate: Date;
    //上传附件
    sysresUpload: string;
    //父级编码
    parentCode: string;
    //维度编码
    dimCode: string;
    //单位隶属关系的id
    rId: string;
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private _providers: ProvidersService) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        //上级单位代码
        this.parentCode = this.routerParam.parentCode;
        //维度代码
        this.dimCode = this.routerParam.dimCode;
        //日期转成date格式
        //成立日期
        this.sestDate = this.commonService.stringToDate(this.mainObj.SEST_DATE);
        //生效日期
        this.sbeginDate = this.commonService.stringToDate(this.mainObj.SBEGIN_DATE);
        //注销日期
        this.sendDate = this.commonService.stringToDate(this.mainObj.SEND_DATE);
        //隶属单位id
        this.rId = this.routerParam.RID;
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    event(eventName: string, param: any): void {

    }
    /**
     * 保存前验证
     */
    beforeSave(): boolean {
        //成立日期
        this.mainObj.SEST_DATE = this.sestDate;
        //生效日期
        this.mainObj.SBEGIN_DATE = this.sbeginDate;
        //注销日期
        this.mainObj.SEND_DATE = this.sendDate;
        //自定义时间验证,生效日期不能大于成立日期，注销日期不能大于生效日期
        this.mainService.validator(this.mainObj, this.mainValid);
        //平台不能空和最长输入长度的验证
        return this.validator();
    }
    /**
       *保存返回
       * @param action 
       */
    cardSaveBack(action: string) {
        if (this.beforeSave()) {
            this.mainService.saveOrUpdateCompany(this.mainObj, this.rId)
                .subscribe(result => {
                    if (result[0].CODE === '0' && result[1].CODE === '0') {
                        this.messageService.message('修改成功');
                        this.cardBack(action);
                    } else {
                        this.messageService.error("修改失败," + result[0].MSG + ',' + result[1].MSG);
                    }
                })
        }
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
    /**
     * 上传附件
     * @param event 
     */
    fctextEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'click'://上传
                break;
        }
    }
}
