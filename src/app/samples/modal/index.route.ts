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
        path:'system/fcmodalcardList',//表单
        component: ModalcardComponent
    }, {
        path:'system/fcmodalconfirmList',//询问
        component: ModalconfirmComponent
    }, {
        path:'system/fcmodaldangerList',//错误
        component: ModaldangerComponent
    }, {
        path:'system/fcmodalinfoList',//消息
        component: ModalinfoComponent
    }, {
        path:'system/fcmodallistList',//列表
        component: ModallistComponent
    }, {
        path:'system/fcmodalsuccesslList',//成功
        component: ModalsuccessComponent
    }, {
        path:'system/fcmodaltreelistList',//左树及列表
        component: ModaltreelistComponent
    }, {
        path:'system/fcmodalwarnList',//警告
        component: ModalwarnComponent
    }
];
