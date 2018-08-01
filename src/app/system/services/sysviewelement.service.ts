/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
@Injectable()
export class SysviewelementService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService) {
        super(providers, "SYSVIEWELEMENT");
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
        return this.providers.appService.initObjDefaultValue(this.app);
    }
    getBizCodeByAid(resId: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(this.moduleId, resId);
    }
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
    getFieldOptionByAppId(appId) {
        let fields = this.appService.getFieldsByAppid(appId, 'APPID', appId);
        let arr: Array<{ [key: string]: any }> = [];
        fields.forEach(el => {
            arr.push({ label: el.FIELDNAME, value: el.FIELDCODE });
        })
        return arr;
    }
}
export interface Sysviewelement {

}