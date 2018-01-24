import { Routes } from '@angular/router';
import { TabmainComponent } from './tabmain/tabmain.component';
import { TabsubComponent } from './tabsub/tabsub.component';
export const tabRouters: Routes = [
    {
        path: 'fctabmainList',//父选项卡
        component: TabmainComponent
    }, {
        path: 'fctabsubList',//子选项卡
        component: TabsubComponent
    }
];
