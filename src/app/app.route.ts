import { Routes } from '@angular/router';
// import { UserService } from 'fccore';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './home/home.component';
export const AppRouters: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:'',
                redirectTo:'basic',
                pathMatch:'full'
            },
            {
                path: '',//基础组件
                loadChildren: './feature/basic/index.module#BasicModule'
            }
        ]
    }
];