import { Routes } from '@angular/router';
import { ChartbarComponent } from './chartbar/chartbar.component';
import { ChartlineComponent } from './chartline/chartline.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
export const chartRouters: Routes = [
    {
        path: 'fcchartbarList',//柱状图
        component: ChartbarComponent
    }, {
        path: 'fcchartlineList',//折线图
        component: ChartlineComponent
    }, {
        path: 'fcchartpieList',//饼状图
        component: ChartpieComponent
    }
];
