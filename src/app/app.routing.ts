import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from 'app/news/news.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'news',
        component: NewsComponent
    }
]
