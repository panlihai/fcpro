/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
import { AddaffiliationdialogComponent } from '../../feature/fcbudget/components/dialog/addaffiliationdialog.component';
import { SysaddGroupdialogComponent } from '../components/core/dialog/sysaddGroupdialog.component';
@Injectable()
export class SysattributeService extends ParentService {
    constructor(public providers: ProvidersService,
        private nzModal: NzModalService,
        private modal: NzModalService, ) {
        super(providers, "SYSAPPFIELDS");
    }
    /** 
   * 获取分组下拉数据
   * @param dialogArgs 
   */
    getGroup() {
        return this.providers.appService.findWithQuery('SYSAPPFLDGROUP', {})
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
    /**
    * 打开添加分组弹窗
    * @param content 
    */
    addGroup(content) {
       return  this.modal.open({
                title: '添加分组',
                content: SysaddGroupdialogComponent,
                width:'30%',
                onOk() { },
                onCancel() { },
                footer: false,
                componentParams: {
                    options: {
                        APPID:content.split('-')[0]
                      }
                }
            }).subscribe(result => {
            });
    }
}
export interface Sysattribute {

}