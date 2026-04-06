import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-notes.component.html',
  styleUrl: './session-notes.component.scss'
})
export class SessionNotesComponent {

  selectedNote: any = null;

  notes = [
    {
      name: 'Sarah Johnson',
      type: 'Individual Therapy',
      date: 'Feb 23, 2026',
      duration: '50 min',
      status: 'completed'
    },
    {
      name: 'Michael Chen',
      type: 'Depression Support',
      date: 'Feb 22, 2026',
      duration: '50 min',
      status: 'completed'
    },
    {
      name: 'Emma Williams',
      type: 'PTSD Treatment',
      date: 'Feb 20, 2026',
      duration: '50 min',
      status: 'completed'
    },
    {
      name: 'David Martinez',
      type: 'Social Anxiety',
      date: 'Feb 18, 2026',
      duration: '50 min',
      status: 'pending'
    },
    {
      name: 'Olivia Brown',
      type: 'Depression Support',
      date: 'Feb 24, 2026',
      duration: '50 min',
      status: 'draft'
    }
  ];

  selectNote(note: any) {
    this.selectedNote = note;
  }

}