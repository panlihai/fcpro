import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
export const Routers: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'notfind',
        component: NotfoundComponent,
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
