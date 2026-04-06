import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-requests.component.html',
  styleUrl: './session-requests.component.scss'
})
export class SessionRequestsComponent {

  activeTab: 'pending' | 'accepted' | 'rejected' = 'pending';

  stats = {
    pending: 3,
    accepted: 1,
    urgent: 1
  };

  requests = [
    {
      name: 'Jessica Thompson',
      age: 32,
      initials: 'JT',
      type: 'Initial Consultation',
      preferred: 'Feb 28, 2026 at 2:00 PM',
      requested: 'Feb 24, 2026',
      concerns: ['Anxiety', 'Work Stress', 'Sleep Issues'],
      notes: 'New client seeking help with anxiety and work-related stress.',
      status: 'pending',
      priority: 'normal'
    },
    {
      name: 'Mark Sullivan',
      age: 28,
      initials: 'MS',
      type: 'Emergency Session',
      preferred: 'Feb 26, 2026 at 10:00 AM',
      requested: 'Feb 25, 2026',
      concerns: ['Panic Attack'],
      notes: 'Urgent case, needs immediate attention.',
      status: 'pending',
      priority: 'urgent'
    }
  ];

}