import { Routes } from '@angular/router';
import { Hellofc4Component } from './components/hellofc4.component';
import { Hellofc5Component } from './components/hellofc5.component';
export const Routers: Routes = [
    {
        path: 'hellofc4List',//hellofc4
        component: Hellofc4Component
    }, {
        path: 'hellofc5List',//hellofc5
        component: Hellofc5Component
    }
];
