import { Routes } from '@angular/router';
import { SpreadComponent } from './components/spread.component';
import { Hellofc1Component } from './components/hellofc1.component';
import { Hellofc2Component } from './components/hellofc2.component';
import { Hellofc3Component } from './components/hellofc3.component';
export const Routers: Routes = [
    {
        path: 'hellofc1List',//hellofc1
        component: Hellofc1Component
    }, {
        path: 'hellofc2List',//hellofc2
        component: Hellofc2Component
    }, {
        path: 'hellofc3List',//hellofc3
        component: Hellofc3Component
    }, {
        path: 'spreadList',//spread
        component: SpreadComponent
    }
];
