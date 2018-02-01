import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbreadcrumbComponent } from './navbreadcrumb/navbreadcrumb.component';
import { NavdropdownComponent } from './navdropdown/navdropdown.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavsideComponent } from './navside/navside.component';
import { NavstepComponent } from './navstep/navstep.component';
import { NavtabComponent } from './navtab/navtab.component';
export const navRouters: Routes = [
    {
        path: 'fcnavbarList',//导航栏
        component: NavbarComponent
    }, {
        path: 'fcnavbreadcrumbList',//路径
        component: NavbreadcrumbComponent
    }, {
        path: 'fcnavdropdownList',//下拉
        component: NavdropdownComponent
    }, {
        path: 'fcnavmenuList',//菜单
        component: NavmenuComponent
    }, {
        path: 'fcnavsideList',//侧边框
        component: NavsideComponent
    }, {
        path: 'fcnavsteplList',//步骤
        component: NavstepComponent
    }, {
        path: 'fcnavtabList',//选项卡
        component: NavtabComponent
    }
];
