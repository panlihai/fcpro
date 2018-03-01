import { Routes } from '@angular/router';
import { SearchadvanceComponent } from './searchadvance/searchadvance.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchfastComponent } from './searchfast/searchfast.component';
export const searchRouters: Routes = [
    {
        path:'system/fcsearchadvanceList',//高级查询
        component: SearchadvanceComponent
    }, {
        path:'system/fcsearchbarList',//全文查询
        component: SearchbarComponent
    }, {
        path:'system/fcsearchboxList',//列表查询
        component: SearchboxComponent
    }, {
        path:'system/fcsearchfastList',//快速查询
        component: SearchfastComponent
    }
];
