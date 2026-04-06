import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {

  searchText = '';
  selectedMood = 'All Moods';

  stats = {
    total: 47,
    streak: 12,
    mood: 'Happy 😊'
  };

  entries = [
    {
      title: 'Feeling More Positive Today',
      date: 'Feb 24, 2026',
      content: `Today was a good day. I practiced breathing exercises and felt calmer during my presentation.`,
      mood: '😊',
      tags: ['anxiety', 'progress', 'work']
    },
    {
      title: 'Reflecting on Last Week',
      date: 'Feb 21, 2026',
      content: `This week had ups and downs. Trying to be more mindful and avoid negative spirals.`,
      mood: '😐',
      tags: ['reflection', 'mindfulness']
    },
    {
      title: 'Challenging Day',
      date: 'Feb 18, 2026',
      content: `Feeling overwhelmed but I know this is temporary and I’ll get through it.`,
      mood: '😔',
      tags: ['overwhelmed', 'therapy']
    }
  ];

}