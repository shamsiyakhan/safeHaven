import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hprogress-reports.component.html',
  styleUrl: './hprogress-reports.component.scss'
})
export class ProgressReportsComponent {

  selectedClient = 'Sarah Johnson';

  clients = [
    { name: 'Sarah Johnson', initials: 'SJ', active: true },
    { name: 'Michael Chen', initials: 'MC' },
    { name: 'Emma Williams', initials: 'EW' }
  ];

  stats = [
    {
      title: 'Anxiety Level',
      value: '6/21',
      tag: 'Mild',
      improvement: '+67%'
    },
    {
      title: 'Depression Level',
      value: '5/27',
      tag: 'Minimal',
      improvement: '+67%'
    },
    {
      title: 'Well-being Score',
      value: '78/100',
      tag: 'Good',
      improvement: '+123%'
    }
  ];

  activeTab = 'progress';

}