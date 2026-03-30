
import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';

export const routes: Routes = [
  ...AUTH_ROUTES,

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path:"auth",
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) 
  },

];