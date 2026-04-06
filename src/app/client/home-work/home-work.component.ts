import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homework',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-work.component.html',
  styleUrl: './home-work.component.scss'
})
export class HomeworkComponent {

  activeTab: 'active' | 'completed' = 'active';

  stats = {
    active: 2,
    completed: 2,
    rate: '92%'
  };

  tasks = [
    {
      title: 'Daily Gratitude Journal',
      therapist: 'Dr. Emily Chen',
      due: 'Feb 29, 2026',
      description: `Write down three things you're grateful for each day. This helps shift focus to positivity.`,
      progress: 5,
      total: 7,
      status: 'In Progress'
    },
    {
      title: 'Anxiety Trigger Tracking',
      therapist: 'Dr. Emily Chen',
      due: 'Feb 27, 2026',
      description: `Track situations that trigger anxiety, your reactions, and how you coped.`,
      progress: 4,
      total: 7,
      status: 'In Progress'
    }
  ];

  getProgressPercent(task: any) {
    return (task.progress / task.total) * 100;
  }

}