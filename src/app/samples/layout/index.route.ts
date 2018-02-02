import { Routes } from '@angular/router';
import { LayoutcolComponent } from './layoutcol/layoutcol.component';
import { LayoutgroupComponent } from './layoutgroup/layoutgroup.component';
import { LayoutpanelComponent } from './layoutpanel/layoutpanel.component';
import { LayoutportalComponent } from './layoutportal/layoutportal.component';
import { LayoutrowComponent } from './layoutrow/layoutrow.component';
export const layoutRouters: Routes = [
    {
        path: 'fclayoutcolList/:menuId',//纵向
        component: LayoutcolComponent
    }, {
        path: 'fclayoutgroupList/:menuId',//分组
        component: LayoutgroupComponent
    }, {
        path: 'fclayoutpanelList/:menuId',//面板
        component: LayoutpanelComponent
    }, {
        path: 'fclayoutportalList/:menuId',//门户
        component: LayoutportalComponent
    }, {
        path: 'fclayoutrowList/:menuId',//横向
        component: LayoutrowComponent
    }
]
