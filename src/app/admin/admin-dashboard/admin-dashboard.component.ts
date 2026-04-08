import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  stats = [
    {
      title: 'Total Clients',
      value: '2,847',
      change: '+12.5%',
      positive: true
    },
    {
      title: 'Active Therapists',
      value: '142',
      change: '+4.2%',
      positive: true
    },
    {
      title: 'Sessions This Month',
      value: '1,234',
      change: '-2.3%',
      positive: false
    },
    {
      title: 'Revenue',
      value: '$124,590',
      change: '+18.7%',
      positive: true
    }
  ];

  sessions = [
    {
      name: 'Sarah Johnson',
      therapist: 'Dr. Emily Chen',
      time: '2:00 PM - 3:00 PM',
      status: 'completed'
    },
    {
      name: 'Michael Brown',
      therapist: 'Dr. James Wilson',
      time: '3:30 PM - 4:30 PM',
      status: 'in-progress'
    },
    {
      name: 'Emma Davis',
      therapist: 'Dr. Sarah Martinez',
      time: '5:00 PM - 6:00 PM',
      status: 'scheduled'
    }
  ];

  therapists = [
    { name: 'Dr. Emily Chen', sessions: 156, rating: 4.9 },
    { name: 'Dr. James Wilson', sessions: 142, rating: 4.8 },
    { name: 'Dr. Sarah Martinez', sessions: 138, rating: 4.9 }
  ];

}