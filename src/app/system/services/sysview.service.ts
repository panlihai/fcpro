/* 	首页主服务 */
import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { NzModalService } from 'ng-zorro-antd';
import { SysviewelementeditComponent } from '../components/core/sysviewelementedit.component';
import { SysappService } from './sysapp.service';
import { isArray, isObject } from 'util';
@Injectable()
export class SysviewService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService, private sysappService: SysappService) {
        super(providers, "SYSVIEW");
    }
    _findWithQuery(appId, condition) {
        return this.appService.findWithQuery(appId, condition);
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj(app) {
        return this.appService.initObjDefaultValue(app);
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
    openViewElementDialog(param?: any) {
        return this.nzModal.open({
            content: SysviewelementeditComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            width: '95%',
            zIndex: 995,
            componentParams: {
                params: param
            }
        })
    }
    getSysApps() {
        return this.sysappService.findWithQuery({});
    }
    findAppByAid(appId) {
        return this.appService.findAppByAid(appId);
    }
    saveField(param) {
        let infoCounted: boolean = false;
        let arr: any = [];
        if (isArray(param)) {
            arr = param;
        } else if (isObject(param)) {
            arr.push(param)
        }
        arr.forEach(el => {
            let obj: any = {};
            for (let attr in param) {
                switch (attr) {
                    case 'FIELDCODE':
                        obj['ELEMENTID'] = param[attr];
                        break;
                    case 'FIELDNAME':
                        obj['ELEMENTNAME'] = param[attr];
                        break;
                    case 'ENABLESEARCH':
                        break;
                    case 'ENABLELOG':
                        break;
                    case 'SHOWLIST':
                        break;
                    case 'SHOWCARD':
                        break;
                    case 'COLSPAN':
                        break;
                    case 'COLNUM':
                        break;
                    case 'ROWNO':
                        break;
                    case 'COLUMNNAME':
                        break;
                    case 'ID':
                        break;
                    default:
                        obj[attr] = param[attr];
                        break;
                }
            }
            this.appService.saveObject('SYSVIEWELMENT', obj).subscribe(res => {
                if (res.CODE === '0') {
                    if (!infoCounted) {
                        this.messageService.success('数据已实时生成');
                        infoCounted = true;
                    }
                } else {
                    this.messageService.error('数据实时生成失败');
                }
            })
        });
    }
}
export interface Sysview {

}