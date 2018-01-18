import { Routes } from '@angular/router';
import { UserService } from 'fccore';
import { AppComponent } from './app.component';
export const Routers: Routes = [
  {
    path: 'home',
    component: AppComponent,
    canActivate: [UserService]
  },
  {
    path: '',
    loadChildren: './feature/index.module#FcexampleModule'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];