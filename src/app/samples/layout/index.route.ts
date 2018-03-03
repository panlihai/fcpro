import { Routes } from '@angular/router';
import { LayoutcolComponent } from './layoutcol/layoutcol.component';
import { LayoutgroupComponent } from './layoutgroup/layoutgroup.component';
import { LayoutpanelComponent } from './layoutpanel/layoutpanel.component';
import { LayoutportalComponent } from './layoutportal/layoutportal.component';
import { LayoutrowComponent } from './layoutrow/layoutrow.component';
export const layoutRouters: Routes = [
    {
        path:'system/fclayoutcolList',//纵向
        component: LayoutcolComponent
    }, {
        path:'system/fclayoutgroupList',//分组
        component: LayoutgroupComponent
    }, {
        path:'system/fclayoutpanelList',//面板
        component: LayoutpanelComponent
    }, {
        path:'system/fclayoutportalList',//门户
        component: LayoutportalComponent
    }, {
        path:'system/fclayoutrowList',//横向
        component: LayoutrowComponent
    }
]
