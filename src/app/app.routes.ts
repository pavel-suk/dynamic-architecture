import { Routes } from '@angular/router';
import { APP_MODULES } from './utils/consts';

export const routes: Routes = [
    {
        path: APP_MODULES.PUBLIC,
        loadComponent: () => import('./layout/layout.component'),
        loadChildren: () => import('@pages/pages.routes'),
    },
    { path: '', redirectTo: APP_MODULES.PUBLIC, pathMatch: 'full'},
    { path: '**', redirectTo: APP_MODULES.PUBLIC, pathMatch: 'full'},
];
