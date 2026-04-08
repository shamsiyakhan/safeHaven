import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-clients.component.html',
  styleUrl: './admin-clients.component.scss'
})
export class AdminClientsComponent {

  stats = [
    { title: 'Total Clients', value: '2,847' },
    { title: 'Active Clients', value: '2,356' },
    { title: 'New This Month', value: '143' },
    { title: 'Pending Approval', value: '12' }
  ];

  clients = [
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      therapist: 'Dr. Emily Chen',
      sessions: 24,
      joinDate: 'Jan 15, 2024',
      nextSession: 'Mar 5, 2026',
      status: 'active'
    },
    {
      name: 'Michael Brown',
      email: 'm.brown@email.com',
      phone: '+1 (555) 234-5678',
      therapist: 'Dr. James Wilson',
      sessions: 18,
      joinDate: 'Feb 20, 2024',
      nextSession: 'Mar 4, 2026',
      status: 'active'
    },
    {
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 345-6789',
      therapist: 'Dr. Sarah Martinez',
      sessions: 12,
      joinDate: 'Dec 10, 2023',
      nextSession: '-',
      status: 'inactive'
    },
    {
      name: 'David Wilson',
      email: 'd.wilson@email.com',
      phone: '+1 (555) 456-7890',
      therapist: 'Dr. Emily Chen',
      sessions: 32,
      joinDate: 'Oct 5, 2023',
      nextSession: 'Mar 6, 2026',
      status: 'active'
    },
    {
      name: 'Lisa Anderson',
      email: 'lisa@email.com',
      phone: '+1 (555) 567-8901',
      therapist: 'Dr. Robert Taylor',
      sessions: 8,
      joinDate: 'Feb 28, 2024',
      nextSession: 'Mar 7, 2026',
      status: 'active'
    },
    {
      name: 'James Martinez',
      email: 'j.martinez@email.com',
      phone: '+1 (555) 678-9012',
      therapist: 'Dr. James Wilson',
      sessions: 0,
      joinDate: 'Mar 1, 2026',
      nextSession: 'Mar 8, 2026',
      status: 'pending'
    }
  ];

}