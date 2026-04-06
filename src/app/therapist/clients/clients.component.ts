import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  searchText = '';

  clients = [
    {
      name: 'Sarah Johnson',
      age: 28,
      initials: 'SJ',
      diagnosis: 'Anxiety Disorder',
      email: 'sarah.j@email.com',
      phone: '(555) 123-4567',
      lastSession: 'Feb 23, 2026',
      nextSession: 'Feb 25, 2026',
      totalSessions: 12,
      status: 'active'
    },
    {
      name: 'Michael Chen',
      age: 35,
      initials: 'MC',
      diagnosis: 'Depression',
      email: 'm.chen@email.com',
      phone: '(555) 234-5678',
      lastSession: 'Feb 22, 2026',
      nextSession: 'Feb 25, 2026',
      totalSessions: 8,
      status: 'active'
    },
    {
      name: 'Emma Williams',
      age: 42,
      initials: 'EW',
      diagnosis: 'PTSD',
      email: 'emma.w@email.com',
      phone: '(555) 345-6789',
      lastSession: 'Feb 20, 2026',
      nextSession: 'Feb 25, 2026',
      totalSessions: 15,
      status: 'active'
    },
    {
      name: 'David Martinez',
      age: 31,
      initials: 'DM',
      diagnosis: 'Social Anxiety',
      email: 'david.m@email.com',
      phone: '(555) 456-7890',
      lastSession: 'Feb 18, 2026',
      nextSession: 'Feb 25, 2026',
      totalSessions: 6,
      status: 'active'
    }
  ];

}