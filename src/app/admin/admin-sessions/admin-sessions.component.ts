import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sessions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-sessions.component.html',
  styleUrl: './admin-sessions.component.scss'
})
export class AdminSessionsComponent {

  stats = [
    { title: "Today's Sessions", value: 24 },
    { title: "Completed", value: 18 },
    { title: "In Progress", value: 3 },
    { title: "Cancelled", value: 3 }
  ];

  activeTab = 'all';

  tabs = ['all', 'today', 'upcoming', 'past'];

  sessions = [
    {
      client: 'Sarah Johnson',
      therapist: 'Dr. Emily Chen',
      date: 'Mar 5, 2026',
      time: '2:00 PM - 3:00 PM',
      type: 'Individual Therapy',
      mode: 'Video',
      status: 'scheduled',
      notes: 'Follow-up on anxiety management techniques'
    },
    {
      client: 'Michael Brown',
      therapist: 'Dr. James Wilson',
      date: 'Mar 4, 2026',
      time: '3:30 PM - 4:30 PM',
      type: 'Couples Therapy',
      mode: 'In-Person',
      status: 'in-progress',
      notes: 'Communication exercises'
    },
    {
      client: 'Emma Davis',
      therapist: 'Dr. Sarah Martinez',
      date: 'Mar 3, 2026',
      time: '1:00 PM - 2:00 PM',
      type: 'Group Therapy',
      mode: 'Video',
      status: 'completed',
      notes: 'Trauma processing group session'
    },
    {
      client: 'David Wilson',
      therapist: 'Dr. Emily Chen',
      date: 'Mar 2, 2026',
      time: '5:30 PM - 6:30 PM',
      type: 'Individual Therapy',
      mode: 'Video',
      status: 'cancelled',
      notes: 'Cancelled by client - rescheduling needed'
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

}