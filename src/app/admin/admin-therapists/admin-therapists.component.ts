import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-therapists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-therapists.component.html',
  styleUrl: './admin-therapists.component.scss'
})
export class AdminTherapistsComponent {

  stats = [
    { title: 'Total Therapists', value: 142 },
    { title: 'Active Therapists', value: 128 },
    { title: 'Avg Rating', value: '4.8 ★' },
    { title: 'Pending Approval', value: 5 }
  ];

  therapists = [
    {
      name: 'Dr. Emily Chen',
      email: 'emily.chen@safehaven.com',
      phone: '+1 (555) 111-2222',
      specialty: 'Cognitive Behavioral Therapy',
      license: 'LIC-12345',
      clients: 45,
      sessions: 156,
      rating: 4.9,
      reviews: 89,
      status: 'active'
    },
    {
      name: 'Dr. James Wilson',
      email: 'james.wilson@safehaven.com',
      phone: '+1 (555) 222-3333',
      specialty: 'Family Therapy',
      license: 'LIC-23456',
      clients: 38,
      sessions: 142,
      rating: 4.8,
      reviews: 76,
      status: 'active'
    },
    {
      name: 'Dr. Sarah Martinez',
      email: 'sarah.martinez@safehaven.com',
      phone: '+1 (555) 333-4444',
      specialty: 'Trauma Therapy',
      license: 'LIC-34567',
      clients: 42,
      sessions: 138,
      rating: 4.9,
      reviews: 92,
      status: 'active'
    },
    {
      name: 'Dr. Robert Taylor',
      email: 'robert.taylor@safehaven.com',
      phone: '+1 (555) 444-5555',
      specialty: 'Anxiety & Depression',
      license: 'LIC-45678',
      clients: 35,
      sessions: 124,
      rating: 4.7,
      reviews: 68,
      status: 'active'
    },
    {
      name: 'Dr. Amanda Lee',
      email: 'amanda.lee@safehaven.com',
      phone: '+1 (555) 555-6666',
      specialty: 'Child Psychology',
      license: 'LIC-56789',
      clients: 28,
      sessions: 98,
      rating: 4.9,
      reviews: 54,
      status: 'on-leave'
    },
    {
      name: 'Dr. Michael Kim',
      email: 'michael.kim@safehaven.com',
      phone: '+1 (555) 666-7777',
      specialty: 'Addiction Counseling',
      license: 'LIC-67890',
      clients: 0,
      sessions: 0,
      rating: null,
      reviews: 0,
      status: 'pending'
    }
  ];

}