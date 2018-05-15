import { Routes } from '@angular/router';
import { QaComponent } from './qa/qa.component';
export const sysRouters: Routes = [
    {
        path:'system/fcqaList',//常见问题
        component: QaComponent
    }
];
