import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

  appointments = [
    {
      name: 'Dr. Emily Chen',
      specialization: 'Cognitive Behavioral Therapy',
      date: 'Feb 25, 2026',
      time: '2:00 PM - 2:50 PM',
      image: 'https://i.pravatar.cc/100?img=1',
      joinable: true
    },
    {
      name: 'Dr. Michael Roberts',
      specialization: 'Mindfulness & Stress Management',
      date: 'Feb 27, 2026',
      time: '10:00 AM - 10:50 AM',
      image: 'https://i.pravatar.cc/100?img=2',
      joinable: false
    },
    {
      name: 'Dr. Sarah Thompson',
      specialization: 'Family & Relationship Therapy',
      date: 'Mar 2, 2026',
      time: '4:00 PM - 4:50 PM',
      image: 'https://i.pravatar.cc/100?img=3',
      joinable: false
    }
  ];

}