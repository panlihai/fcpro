import { Routes } from '@angular/router';
import { TabmainComponent } from './tabmain/tabmain.component';
import { TabsubComponent } from './tabsub/tabsub.component';
export const tabRouters: Routes = [
    {
        path:'system/fctabmainList',//父选项卡
        component: TabmainComponent
    }, {
        path:'system/fctabsubList',//子选项卡
        component: TabsubComponent
    }
];
