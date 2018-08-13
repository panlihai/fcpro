/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListComponent } from '../components/core/dialog/dialogList.component';
import { DialogCardListArgs } from '../components/core/dialog/dialogcardlist.component';
@Injectable()
export class SysviewelementService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService) {
        super(providers, "SYSVIEWELEMENT");
    }
    getDetailByFieldCode(appId, fieldCode) {
        return this.appService.findWithQuery('SYSAPPFIELDS', { APPID: appId, FIELDCODE: fieldCode });
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
    _findWithQuery(Id, condition) {
        return this.appService.findWithQuery(Id, condition);
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj(app) {
        return this.providers.appService.initObjDefaultValue(app);
    }
    getBizCodeByAid(resId: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(this.moduleId, resId);
    }
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
            componentParams: {
                options: dialogCardListArgs
            }
        })
    }
    getFieldOptionByAppId(appId) {
        return this.appService.findWithQuery('SYSAPPFIELDS', { APPID: appId })
    }
}
export interface Sysviewelement {
    ID: string,
    VIEWID: string,
    ELEMENTID: string,
    ELEMENTNAME: string,
    APPID: string,
    FIELDCODE: string,
    SORT: number,
    SERVICEID: string,
    DICCODE: string,
    CATAGORY: string,
    LENGTH: number,
    SCALE: number,
    FIELDDEFAULT: string,
    AUTOCODE: string,
    ENABLE: string,
    INPUTLIMIT: string,
    INPUTTYPE: string,
    TCLASS: string,
    PLACEHOLDER: string,
    GRPCODE: string,
    ENABLEWRITE: string,
    VIEWFORMAT: string,
    VIEWSUFFIX: string,
    VIEWPREFIX: string,
    ENABLELOCK: string,
    ISNULL: string,
    HELP: string,
    KEYSEQ: string,
    LISTMAXLEN: number,
    FUNCID: string
}