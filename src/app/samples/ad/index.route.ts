import { Routes } from '@angular/router';
import { AddetailComponent } from './addetail/addetail.component';
import { AdformComponent } from './adform/adform.component';
export const adRouters: Routes = [
    {
        path: 'system/fcaddetailList',//
        component: AddetailComponent
    }, {
        path: 'system/fcadformList',//
        component: AdformComponent
    }
];
