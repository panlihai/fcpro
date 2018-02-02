import { Routes } from '@angular/router';
import { ModalcardComponent } from './modalcard/modalcard.component';
import { ModalconfirmComponent } from './modalconfirm/modalconfirm.component';
import { ModaldangerComponent } from './modaldanger/modaldanger.component';
import { ModalinfoComponent } from './modalinfo/modalinfo.component';
import { ModallistComponent } from './modallist/modallist.component';
import { ModalsuccessComponent } from './modalsuccess/modalsuccess.component';
import { ModaltreelistComponent } from './modaltreelist/modaltreelist.component';
import { ModalwarnComponent } from './modalwarn/modalwarn.component';
export const modalRouters: Routes = [
    {
        path: 'fcmodalcardList/:menuId',//表单
        component: ModalcardComponent
    }, {
        path: 'fcmodalconfirmList/:menuId',//询问
        component: ModalconfirmComponent
    }, {
        path: 'fcmodaldangerList/:menuId',//错误
        component: ModaldangerComponent
    }, {
        path: 'fcmodalinfoList/:menuId',//消息
        component: ModalinfoComponent
    }, {
        path: 'fcmodallistList/:menuId',//列表
        component: ModallistComponent
    }, {
        path: 'fcmodalsuccesslList/:menuId',//成功
        component: ModalsuccessComponent
    }, {
        path: 'fcmodaltreelistList/:menuId',//左树及列表
        component: ModaltreelistComponent
    }, {
        path: 'fcmodalwarnList/:menuId',//警告
        component: ModalwarnComponent
    }
];
