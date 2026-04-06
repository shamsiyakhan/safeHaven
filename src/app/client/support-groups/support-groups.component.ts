import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support-groups.component.html',
  styleUrl: './support-groups.component.scss'
})
export class SupportGroupsComponent {

  activeTab: 'my' | 'discover' = 'my';

  stats = {
    joined: 2,
    unread: 7,
    weekly: 12
  };

  groups = [
    {
      name: 'Anxiety Support Community',
      description: 'A safe space to share experiences and coping strategies',
      members: 247,
      moderator: 'Dr. Sarah Williams',
      active: '2 hours ago',
      newMessages: 5
    },
    {
      name: 'Mindfulness & Meditation Circle',
      description: 'Practice mindfulness together and share techniques',
      members: 189,
      moderator: 'Dr. James Chen',
      active: '5 hours ago',
      newMessages: 2
    }
  ];

}