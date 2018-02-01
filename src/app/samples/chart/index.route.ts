import { Routes } from '@angular/router';
import { ChartbarComponent } from './chartbar/chartbar.component';
import { ChartlineComponent } from './chartline/chartline.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
export const chartRouters: Routes = [
    {
        path: 'fcchartbarList/:menuId',//柱状图
        component: ChartbarComponent
    }, {
        path: 'fcchartlineList/:menuId',//折线图
        component: ChartlineComponent
    }, {
        path: 'fcchartpieList/:menuId',//饼状图
        component: ChartpieComponent
    }
];
