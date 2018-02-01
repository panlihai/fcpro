import { Routes } from '@angular/router';
import { AddetailComponent } from './addetail/addetail.component';
import { AdformComponent } from './adform/adform.component';
export const adRouters: Routes = [
    {
        path: 'fcaddetailList',//
        component: AddetailComponent
    }, {
        path: 'fcadformList',//
        component: AdformComponent
    }
];
