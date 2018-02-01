import { Routes } from '@angular/router';
import { ListdataComponent } from './listdata/listdata.component';
import { ListdefineComponent } from './listdefine/listdefine.component';
import { ListdefinedtreeComponent } from './listdefinedtree/listdefinedtree.component';
import { ListeditComponent } from './listedit/listedit.component';
import { ListedittreeComponent } from './listedittree/listedittree.component';
import { ListinfoComponent } from './listinfo/listinfo.component';
import { ListtreeComponent } from './listtree/listtree.component';
export const listRouters: Routes = [
    {
        path: 'fclistdataList/:menuId',//数据列表
        component: ListdataComponent
    }, {
        path: 'fclistdefineList/:menuId',//自定义列表
        component: ListdefineComponent
    }, {
        path: 'fclistdefinedtreeList/:menuId',//自定义树列表
        component: ListdefinedtreeComponent
    }, {
        path: 'fclisteditList/:menuId',//编辑列表
        component: ListeditComponent
    }, {
        path: 'fclistedittreeList/:menuId',//编辑树列表
        component: ListedittreeComponent
    }, {
        path: 'fclistinfolList/:menuId',//查询列表
        component: ListinfoComponent
    }, {
        path: 'fclisttreeList/:menuId',//查询树列表
        component: ListtreeComponent
    }
];
