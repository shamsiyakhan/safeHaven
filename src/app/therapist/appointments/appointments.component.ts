import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {

  days = [
    { day: 'Mon', date: 23 },
    { day: 'Tue', date: 24 },
    { day: 'Wed', date: 25, active: true },
    { day: 'Thu', date: 26 },
    { day: 'Fri', date: 27 },
    { day: 'Sat', date: 28 },
    { day: 'Sun', date: 1 }
  ];

  timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', name: 'Sarah Johnson', type: 'Individual Therapy' },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', name: 'Emma Williams', type: 'Anxiety Management' },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: true }
  ];

  upcoming = [
    { name: 'Sarah Johnson', type: 'Individual Therapy', time: '10:00 AM' },
    { name: 'Michael Chen', type: 'Cognitive Behavioral', time: '11:30 AM' },
    { name: 'Emma Williams', type: 'Anxiety Management', time: '2:00 PM' },
    { name: 'David Martinez', type: 'Individual Therapy', time: '3:30 PM' },
    { name: 'Olivia Brown', type: 'Depression Support', time: '5:00 PM' }
  ];

}