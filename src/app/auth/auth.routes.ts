import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForPasswordComponent } from './for-password/for-password.component';


export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: 'forgot',
    component:ForPasswordComponent
  }
];