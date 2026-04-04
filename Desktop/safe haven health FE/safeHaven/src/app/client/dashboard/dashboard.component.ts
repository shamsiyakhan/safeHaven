import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats = [
    {
      title: 'Next Session',
      value: 'Tomorrow',
      subText: '2:00 PM with Dr. Emily Chen',
      icon: '◷'
    },
    {
      title: 'Total Sessions',
      value: '24',
      subText: '12 hours of therapy',
      icon: '◉'
    },
    {
      title: 'Current Streak',
      value: '6 weeks',
      subText: 'Keep up the great work!',
      icon: '↗'
    },
    {
      title: 'Wellness Score',
      value: '82%',
      subText: '+5% from last week',
      icon: '♡'
    }
  ];

  appointments = [
    {
      name: 'Dr. Emily Chen',
      specialty: 'Cognitive Behavioral Therapy',
      time: 'Tomorrow at 2:00 PM · 50 minutes',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      action: 'Join',
      primary: true
    },
    {
      name: 'Dr. Michael Roberts',
      specialty: 'Mindfulness & Stress Management',
      time: 'Thursday at 10:00 AM · 50 minutes',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      action: 'View Details',
      primary: false
    }
  ];

  resources = [
    {
      title: 'Managing Anxiety in Daily Life',
      type: 'Article · 5 min read'
    },
    {
      title: 'Guided Breathing Exercise',
      type: 'Video · 10 min'
    }
  ];
}