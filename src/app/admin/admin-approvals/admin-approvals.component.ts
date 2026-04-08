import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-approvals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-approvals.component.html',
  styleUrl: './admin-approvals.component.scss'
})
export class AdminApprovalsComponent {

  activeTab = 'therapists';

  stats = [
    { title: 'Pending Approvals', value: 17 },
    { title: 'Approved Today', value: 8 },
    { title: 'Rejected', value: 3 },
    { title: 'Under Review', value: 6 }
  ];

  applications = [
    {
      name: 'Dr. Michael Kim',
      specialty: 'Addiction Counseling',
      email: 'michael.kim@email.com',
      phone: '+1 (555) 666-7777',
      license: 'LIC-67890',
      experience: '8 years',
      education: 'PhD in Clinical Psychology',
      status: 'pending'
    },
    {
      name: 'Dr. Jennifer Martinez',
      specialty: 'Child & Adolescent Psychology',
      email: 'j.martinez@email.com',
      phone: '+1 (555) 777-8888',
      license: 'LIC-78901',
      experience: '6 years',
      education: 'PsyD in Clinical Psychology',
      status: 'pending'
    },
    {
      name: 'Dr. Alex Thompson',
      specialty: 'PTSD & Trauma',
      email: 'alex@email.com',
      phone: '+1 (555) 888-9999',
      license: 'LIC-89012',
      experience: '10 years',
      education: 'PhD in Psychology',
      status: 'pending'
    }
  ];

}