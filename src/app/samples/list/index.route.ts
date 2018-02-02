import { Routes } from '@angular/router';
import { ListdataComponent } from './listdata/listdata.component';
import { ListtreeComponent } from './listtree/listtree.component';
export const listRouters: Routes = [
    {
        path: 'fclistdataList/:menuId',//数据列表
        component: ListdataComponent
    }, {
        path: 'fclisttreeList/:menuId',//查询树列表
        component: ListtreeComponent
    }
];
