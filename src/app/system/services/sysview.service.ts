/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysviewService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService) {
        super(providers, "SYSVIEW");
    }
    /**
     * 字母快速查询
     */
    fastSearch() {
        let str = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let list = [];
        str.forEach(item => {
            list.push({
                'BUSTYPE': 'fastsearch',
                'ACTCODE': item,
                'BTNNAME': item
            });
        });
        return list;
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.appService.initObjDefaultValue(this.app);
    }
    getBizCodeByAid(resId: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(this.moduleId, resId);
    }
    getAllProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /**
     * 获取路由导航
     * @param exp List：列表；Edit:编辑:Detail：详情
     */
    getRouteUrl(moduleId: string, appId: string, exp: string) {
        return `/${moduleId.toLocaleLowerCase()}/${appId.toLocaleLowerCase()}${exp}`;
    };
    /** YM
     * 打开窗口的函数方法
     * @param dialogArgs 
     */
    openDialog(dialogArgs) {
        return this.nzModal.open({
            content: dialogArgs.DialogListComponent,
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
}
export interface Sysview {

}