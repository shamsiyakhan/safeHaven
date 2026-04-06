import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindTherapistComponent } from './find-therapist/find-therapist.component';
import { OverviewComponent } from './overview/overview.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MessageComponent } from './message/message.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { JournalComponent } from './journal/journal.component';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { HomeworkComponent } from './home-work/home-work.component';
import { ContentLibraryComponent } from './content-library/content-library.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { EmergencyComponent } from './emergency/emergency.component';

export const CLIENT_ROUTES: Routes = [
    {
        path: "",
        component: OverviewComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'find-therapist',
                component: FindTherapistComponent
            }, 
            {
                path: "appointment",
                component: AppointmentComponent
            },
            {
                path:"messages",
                component:MessageComponent
            },
            {
                path:"chatbot",
                component:AiChatComponent
            },
            {
                path:"journal",
                component:JournalComponent
            },
            {
                path:"self-assessment",
                component:SelfAssessmentComponent
            },
            {
                path:"homework",
                component:HomeworkComponent
            },
            {
                path:"content-library",
                component:ContentLibraryComponent
            },
            {
                path:"support-groups",
                component:SupportGroupsComponent
            },
            {
                path:"emergency-help",
                component:EmergencyComponent
            }
        ]
    }

];