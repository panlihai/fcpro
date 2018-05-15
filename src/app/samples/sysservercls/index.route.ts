import { Routes } from '@angular/router';
import { BasedaoclsComponent } from './basedaocls/basedaocls.component';
import { BaseserviceclsComponent } from './baseservicecls/baseservicecls.component';
import { CacheutilclsComponent } from './cacheutilcls/cacheutilcls.component';
import { DateutilsComponent } from './dateutils/dateutils.component';
import { DynabeanclsComponent } from './dynabeancls/dynabeancls.component';
import { ParentserviceclsComponent } from './parentservicecls/parentservicecls.component';
import { RequestmoadlclsComponent } from './requestmoadlcls/requestmoadlcls.component';
import { ResponsemodalclsComponent } from './responsemodalcls/responsemodalcls.component';
import { SysserverclsComponent } from './sysservercls/sysservercls.component';
export const tlbRouters: Routes = [
    {
        path: 'system/basedaoList',//
        component: BasedaoclsComponent
    },    {
        path: 'system/baseserviceList',//
        component: BaseserviceclsComponent
    },    {
        path: 'system/cacheutilList',//
        component: CacheutilclsComponent
    },    {
        path: 'system/dateutilsList',//
        component: DateutilsComponent
    },    {
        path: 'system/dynabeanList',//
        component: DynabeanclsComponent
    },    {
        path: 'system/parentserviceList',//
        component: ParentserviceclsComponent
    },    {
        path: 'system/requestmoadlList',//
        component: RequestmoadlclsComponent
    },    {
        path: 'system/responsemodalList',//
        component: ResponsemodalclsComponent
    },    {
        path: 'system/sysserverList',//
        component: SysserverclsComponent
    }
];
