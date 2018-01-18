import { Routes } from '@angular/router';

import { SyscomponentComponent } from './syscomponent/syscomponent.component';

export const Routers: Routes = [{
    path: 'syscomponentList',
    component: SyscomponentComponent
},
{
    path: '',
    loadChildren: './basic/index.module#BasicModule'
}
];
