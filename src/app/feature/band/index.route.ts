import { Routes } from '@angular/router';
import { BandlistComponent } from './bandlist/bandlist.component';
import { BandtreeComponent } from './bandtree/bandtree.component';
import { BandtreelistComponent } from './bandtreelist/bandtreelist.component';
export const bandRouters: Routes = [
    {
        path: 'fcbandlistList',//查询选择列表
        component: BandlistComponent
    }, {
        path: 'fcbandtreeList',//查询选择树及列表
        component: BandtreeComponent
    }, {
        path: 'fcbandtreelistList',//查询选择树
        component: BandtreelistComponent
    }
];
