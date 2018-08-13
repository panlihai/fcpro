/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { SysappService } from './sysapp.service';
import { DialogCardListArgs } from '../components/core/dialog/dialogcardlist.component';
import { SysviewService } from './sysview.service';
import { SysappbuttonsService } from './sysappbuttons.service';
@Injectable()
export class SysfuncService extends ParentService {
    constructor(
        public providers: ProvidersService,
        private nzModal: NzModalService,
        private sysbizcoderuleService: SysbizcoderuleService,
        private sysproductService: SysproductService,
        private sysappService: SysappService,
        private sysviewService: SysviewService,
        private sysappbuttonService: SysappbuttonsService
    ) {
        super(providers, "SYSFUNC");
    }
    /**
     * 获取产品
     */
    getProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /**
     * 字母快速查询
     */
    fastSearch() {
        return this.sysappService.fastSearch()
    }
    /**
     * 获取路由导航
     * @param exp List：列表；Edit:编辑:Detail：详情
     */
    getRouteUrl(moduleId: string, appId: string, exp: string) {
        return `/${moduleId.toLocaleLowerCase()}/${appId.toLocaleLowerCase()}${exp}`;
    };
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj(app) {
        return this.appService.initObjDefaultValue(app);
    }
    /** YM
     * 根据
     * @param resId 
     */
    getBizCodeByAid(pid: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(pid, 'SYSBIZCODERULE');
    }
    /** YM
     * 获取所有产品
     */
    getAllProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /** YM
  * 打开窗口的函数方法
  * @param dialogCardListArgs 
  */
    openDialog(dialogCardListArgs: DialogCardListArgs) {
        return this.nzModal.open({
            title: dialogCardListArgs.configInterface.title ? dialogCardListArgs.configInterface.title : '',
            content: dialogCardListArgs.configInterface.content ? dialogCardListArgs.configInterface.content : DialogListComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            width: dialogCardListArgs.configInterface.width,
            style: dialogCardListArgs.configInterface.style,
            zIndex: 995,
            componentParams: {
                options: dialogCardListArgs
            }
        })
    }
    /**
     * 根据服务ID获取视图数据
     * @param serviceId 
     */
    getSysViews(id) {
        return this.sysviewService.findWithQuery({ WHERE: `FUNCID ='${id}'` });
    }
    /**
     * 根据服务ID获取接口数据
     * @param serviceId 
     */
    getsysBtns(id) {
        return this.sysappbuttonService.findWithQuery({ WHERE: `APPID ='${id}'` })
    }
}
export interface Sysfunc {

}