import { Routes } from '@angular/router';
import { ParentclsComponent } from './parentcls/parentcls.component';
import { ParentdetailclsComponent } from './parentdetailcls/parentdetailcls.component';
import { ParentlistclsComponent } from './parentlistcls/parentlistcls.component';
import { ParentserviceclientclsComponent } from './parentserviceclientcls/parentserviceclientcls.component';
import { ParentviewclsComponent } from './parentviewcls/parentviewcls.component';
export const tlbRouters: Routes = [
    {
        path: 'system/parentList',//
        component: ParentclsComponent
    }, {
        path: 'system/parentdetailList',//
        component: ParentdetailclsComponent
    }, {
        path: 'system/parentlistList',//
        component: ParentlistclsComponent
    }, {
        path: 'system/parentserviceList',//
        component: ParentserviceclientclsComponent
    }, {
        path: 'system/parentviewList',//
        component: ParentviewclsComponent
    }
];
