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
        path: 'fclistdataList',//数据列表
        component: ListdataComponent
    }, {
        path: 'fclistdefineList',//自定义列表
        component: ListdefineComponent
    }, {
        path: 'fclistdefinedtreeList',//自定义树列表
        component: ListdefinedtreeComponent
    }, {
        path: 'fclisteditList',//编辑列表
        component: ListeditComponent
    }, {
        path: 'fclistedittreeList',//编辑树列表
        component: ListedittreeComponent
    }, {
        path: 'fclistinfolList',//查询列表
        component: ListinfoComponent
    }, {
        path: 'fclisttreeList',//查询树列表
        component: ListtreeComponent
    }
];
