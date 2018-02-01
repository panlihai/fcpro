import { Routes } from '@angular/router';
import { ProgresscircleComponent } from './progresscircle/progresscircle.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgresspercentComponent } from './progresspercent/progresspercent.component';
export const progressRouters: Routes = [
    {
        path: 'fcprogressbarList/:menuId',//横条
        component: ProgressbarComponent
    }, {
        path: 'fcprogresscircleList/:menuId',//圆圈
        component: ProgresscircleComponent
    }, {
        path: 'fcprogresspercentList/:menuId',//百分比
        component: ProgresspercentComponent
    }
];
