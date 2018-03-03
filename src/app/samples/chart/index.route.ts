import { Routes } from '@angular/router';
import { ChartbarComponent } from './chartbar/chartbar.component';
import { ChartlineComponent } from './chartline/chartline.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
export const chartRouters: Routes = [
    {
        path:'system/fcchartbarList',//柱状图
        component: ChartbarComponent
    }, {
        path:'system/fcchartlineList',//折线图
        component: ChartlineComponent
    }, {
        path:'system/fcchartpieList',//饼状图
        component: ChartpieComponent
    }
];
