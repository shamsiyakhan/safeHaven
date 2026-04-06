import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-therapist-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './therapist-dashboard.component.html',
  styleUrl: './therapist-dashboard.component.scss'
})
export class TherapistDashboardComponent {

  stats = [
    { label: 'Total Clients', value: 24, sub: '+3 this month' },
    { label: 'Upcoming Sessions', value: 5, sub: "Today's schedule" },
    { label: 'Pending Notes', value: 3, sub: 'Requires attention' },
    { label: 'Unread Messages', value: 7, sub: 'From clients' }
  ];

  schedule = [
    { name: 'Sarah Johnson', type: 'Individual Therapy', time: '10:00 AM' },
    { name: 'Michael Chen', type: 'Cognitive Behavioral', time: '11:30 AM' },
    { name: 'Emma Williams', type: 'Anxiety Management', time: '2:00 PM' },
    { name: 'David Martinez', type: 'Individual Therapy', time: '3:30 PM' },
    { name: 'Olivia Brown', type: 'Depression Support', time: '5:00 PM' }
  ];

  activities = [
    { text: 'Completed session with Sarah Johnson', time: '2 hours ago' },
    { text: 'New message from Michael Chen', time: '3 hours ago' },
    { text: 'Session notes added for Emma Williams', time: '5 hours ago' },
    { text: 'Appointment scheduled with new client', time: 'Yesterday' }
  ];

}