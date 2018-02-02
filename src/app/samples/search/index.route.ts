import { Routes } from '@angular/router';
import { SearchadvanceComponent } from './searchadvance/searchadvance.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchfastComponent } from './searchfast/searchfast.component';
export const searchRouters: Routes = [
    {
        path: 'fcsearchadvanceList/:menuId',//高级查询
        component: SearchadvanceComponent
    }, {
        path: 'fcsearchbarList/:menuId',//全文查询
        component: SearchbarComponent
    }, {
        path: 'fcsearchboxList/:menuId',//列表查询
        component: SearchboxComponent
    }, {
        path: 'fcsearchfastList/:menuId',//快速查询
        component: SearchfastComponent
    }
];
