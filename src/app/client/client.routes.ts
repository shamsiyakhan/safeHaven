import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindTherapistComponent } from './find-therapist/find-therapist.component';
import { OverviewComponent } from './overview/overview.component';

export const CLIENT_ROUTES: Routes = [
  {
    path:"",
    component:OverviewComponent,
    children:[
       {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'find-therapist',
    component: FindTherapistComponent
  }
    ]
  }
 
];