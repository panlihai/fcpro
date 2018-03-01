import { Routes } from '@angular/router';
import { ListdataComponent } from './listdata/listdata.component';
import { ListtreeComponent } from './listtree/listtree.component';
export const listRouters: Routes = [
    {
        path:'system/fclistdataList',//数据列表
        component: ListdataComponent
    }, {
        path:'system/fclisttreeList',//查询树列表
        component: ListtreeComponent
    }
];
