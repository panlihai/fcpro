import { Routes } from '@angular/router';
import { TlbdropdownComponent } from './tlbdropdown/tlbdropdown.component';
import { TlbformComponent } from './tlbform/tlbform.component';
import { TlblistComponent } from './tlblist/tlblist.component';
import { TlblistitemComponent } from './tlblistitem/tlblistitem.component';
export const tlbRouters: Routes = [
    {
        path: 'fctlbdropdownList/:menuId',//下拉
        component: TlbdropdownComponent
    }, {
        path: 'fctlbformList/:menuId',//表单
        component: TlbformComponent
    }, {
        path: 'fctlblistList/:menuId',//列表
        component: TlblistComponent
    }, {
        path: 'fctlblistitemList/:menuId',//子列表
        component: TlblistitemComponent
    }
];
