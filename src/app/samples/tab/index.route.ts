import { Routes } from '@angular/router';
import { TabmainComponent } from './tabmain/tabmain.component';
import { TabsubComponent } from './tabsub/tabsub.component';
export const tabRouters: Routes = [
    {
        path: 'fctabmainList/:menuId',//父选项卡
        component: TabmainComponent
    }, {
        path: 'fctabsubList/:menuId',//子选项卡
        component: TabsubComponent
    }
];
