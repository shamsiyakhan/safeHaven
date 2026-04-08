import { Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminClientsComponent } from "./admin-clients/admin-clients.component";
import { AdminTherapistsComponent } from "./admin-therapists/admin-therapists.component";
import { AdminSessionsComponent } from "./admin-sessions/admin-sessions.component";
import { AdminContentComponent } from "./admin-content/admin-content.component";
import { AdminSubscriptionComponent } from "./admin-subscription/admin-subscription.component";
import { AdminApprovalsComponent } from "./admin-approvals/admin-approvals.component";

export const Admin_Routes:Routes=[
    {
        path:"",
        component:OverviewComponent,
        children:[
            {
                path:"dashboard",
                component:AdminDashboardComponent
            },
            {
                path:"clients",
                component:AdminClientsComponent
            },
            {
                path:"therapist",
                component:AdminTherapistsComponent
            },
            {
                path:"session",
                component:AdminSessionsComponent
            },
            {
               path:"content",
               component:AdminContentComponent 
            },
            {
                path:"subscription",
                component:AdminSubscriptionComponent
            },
            {
                path:"approval",
                component:AdminApprovalsComponent
            }
        ]
    }
]