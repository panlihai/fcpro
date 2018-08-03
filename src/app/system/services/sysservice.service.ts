/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, SysinterfaceService } from 'fccore';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { SysappService } from './sysapp.service';
@Injectable()
export class SysserviceService extends ParentService {
    constructor(
        public providers: ProvidersService,
        private nzModal: NzModalService,
        private sysbizcoderuleService: SysbizcoderuleService,
        private sysproductService: SysproductService,
        private sysappService: SysappService,
        private sysinterfaceService: SysinterfaceService,
    ) {
        super(providers, "SYSSERVICE");
    }
    /**
     * 获取产品
     */
    getproduct() {
        return this.sysproductService.findWithQuery({});
    }
    /**
     * 字母快速查询
     */
    initFastSeachWords() {
        return this.sysappService.fastSearch()
    }
    /** YM
     * 获取路由导航
     * @param exp List：列表；Edit:编辑:Detail：详情
     */
    getRouteUrl(moduleId: string, appId: string, exp: string) {
        return `/${moduleId.toLocaleLowerCase()}/${appId.toLocaleLowerCase()}${exp}`;
    };
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.appService.initObjDefaultValue(this.app);
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
  * @param dialogArgs 
  */
    openDialog(dialogArgs: DialogListArgs) {
        return this.nzModal.open({
            title: dialogArgs.configInterface.title ? dialogArgs.configInterface.title : '',
            content: dialogArgs.configInterface.content ? dialogArgs.configInterface.content : DialogListComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            width: dialogArgs.configInterface.width,
            style: dialogArgs.configInterface.style,
            componentParams: {
                options: dialogArgs
            }
        })
    }
    /**
     * 根据服务ID获取接口数据
     * @param condition 
     */
    getSysInterfaces(condition) {
        return this.sysinterfaceService.findWithQuery(condition);
    }
    /**
     * 删除接口
     * @param id 
     */
    delteSysInterface(id) {
        return this.sysinterfaceService.delete(id);
    }
}
export interface Sysservice {

}