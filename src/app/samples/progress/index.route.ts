import { Routes } from '@angular/router';
import { ProgresscircleComponent } from './progresscircle/progresscircle.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgresspercentComponent } from './progresspercent/progresspercent.component';
export const progressRouters: Routes = [
    {
        path:'system/fcprogressbarList',//横条
        component: ProgressbarComponent
    }, {
        path:'system/fcprogresscircleList',//圆圈
        component: ProgresscircleComponent
    }, {
        path:'system/fcprogresspercentList',//百分比
        component: ProgresspercentComponent
    }
];
