import { Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { TherapistDashboardComponent } from "./therapist-dashboard/therapist-dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { SessionRequestsComponent } from "./session-requests/session-requests.component";
import { SessionNotesComponent } from "./session-notes/session-notes.component";
import { HomeworkTasksComponent } from "./homework-tasks/homework-tasks.component";



export const Therapist_Route: Routes = [
    {
        path:"",
        component:OverviewComponent,
        children:[
            {
                path:"dashboard",
                component:TherapistDashboardComponent
            },
            {
                path:"clients",
                component:ClientsComponent
            },
            {
                path:"appointment",
                component:AppointmentsComponent
            },
            {
                path:"session-request",
                component:SessionRequestsComponent
            },
            {
                path:"session-notes",
                component:SessionNotesComponent
            },
            {
                path:"home-task",
                component:HomeworkTasksComponent
            }
        ]
    }
]