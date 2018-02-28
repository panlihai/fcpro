import { Routes } from '@angular/router';
export const Routers: Routes = [
    {
        path: '',//业务组件-模块1
        loadChildren: './hellomodule1/index.module#Hellomodule1Module'
    }, {
        path: '',//业务组件-模块2
        loadChildren: './hellomodule2/index.module#Hellomodule2Module'
    }
];
