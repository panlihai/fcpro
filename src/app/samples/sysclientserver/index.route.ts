import { Routes } from '@angular/router';
import { AppserviceclsComponent } from './appservicecls/appservicecls.component';
import { CommonserviceclsComponent } from './commonservicecls/commonservicecls.component';
import { DaoserviceclsComponent } from './daoservicecls/daoservicecls.component';
import { LayoutserviceclsComponent } from './layoutservicecls/layoutservicecls.component';
import { LogserviceclsComponent } from './logservicecls/logservicecls.component';
import { MenuserviceclsComponent } from './menuservicecls/menuservicecls.component';
import { MessageserviceclsComponent } from './messageservicecls/messageservicecls.component';
import { ProvidersclsComponent } from './providerscls/providerscls.component';
import { UserserviceComponent } from './userservice/userservice.component';
import { CacheserviceclsComponent } from './cacheservicecls/cacheservicecls.component';
export const tlbRouters: Routes = [
    {
        path: 'system/appserviceList',//
        component: AppserviceclsComponent
    }, {
        path: 'system/cacheserviceList',//
        component: CacheserviceclsComponent
    }, {
        path: 'system/commonserviceList',//
        component: CommonserviceclsComponent
    }, {
        path: 'system/daoserviceList',//
        component: DaoserviceclsComponent
    }, {
        path: 'system/layoutserviceList',//
        component: LayoutserviceclsComponent
    }, {
        path: 'system/logserviceList',//
        component: LogserviceclsComponent
    }, {
        path: 'system/menuserviceList',//
        component: MenuserviceclsComponent
    }, {
        path: 'system/messageserviceList',//
        component: MessageserviceclsComponent
    }, {
        path: 'system/providersList',//
        component: ProvidersclsComponent
    }, {
        path: 'system/userserviceList',//
        component: UserserviceComponent
    }
];
