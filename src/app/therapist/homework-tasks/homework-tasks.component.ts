import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homework-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homework-tasks.component.html',
  styleUrl: './homework-tasks.component.scss'
})
export class HomeworkTasksComponent {

  activeTab = 'all';

  stats = {
    assigned: 2,
    inProgress: 2,
    completed: 1,
    overdue: 1
  };

  tasks = [
    {
      title: 'Daily Mood Tracking',
      client: 'Sarah Johnson',
      tag: 'Self-Monitoring',
      status: 'in-progress',
      assigned: 'Feb 20, 2026',
      due: 'Feb 27, 2026',
      description: 'Track your mood 3 times daily using the provided scale.',
      submission: null
    },
    {
      title: 'Breathing Exercises',
      client: 'Sarah Johnson',
      tag: 'Relaxation',
      status: 'completed',
      assigned: 'Feb 18, 2026',
      due: 'Feb 25, 2026',
      description: 'Practice 4-7-8 breathing twice daily.',
      submission: {
        text: 'The breathing exercises helped a lot. Feeling calmer.',
        notes: 'Practiced 14 times this week'
      }
    },
    {
      title: 'Thought Record Journal',
      client: 'Michael Chen',
      tag: 'CBT',
      status: 'assigned',
      assigned: 'Feb 22, 2026',
      due: 'Mar 1, 2026',
      description: 'Write down negative thoughts and reframe them.',
      submission: null
    },
    {
      title: 'Progressive Muscle Relaxation',
      client: 'Emma Williams',
      tag: 'Relaxation',
      status: 'overdue',
      assigned: 'Feb 18, 2026',
      due: 'Feb 23, 2026',
      description: 'Practice muscle relaxation daily.',
      submission: null
    }
  ];

}