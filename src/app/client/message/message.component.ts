import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  selectedUser: any;

  conversations = [
    {
      name: 'Dr. Emily Chen',
      message: "Thanks for sharing that. Let's discuss this in our next session.",
      image: 'https://i.pravatar.cc/100?img=1',
      active: true
    },
    {
      name: 'Dr. Michael Roberts',
      message: "The breathing exercises should help. Practice them regularly.",
      image: 'https://i.pravatar.cc/100?img=2',
      active: false
    },
    {
      name: 'Dr. Sarah Thompson',
      message: "I've sent you some resources that might be helpful.",
      image: 'https://i.pravatar.cc/100?img=3',
      active: true
    }
  ];

  messages = [
    { text: 'Hi Sarah! How have you been feeling since our last session?', time: '9:45 AM', sender: 'them' },
    { text: "Hi Dr. Chen! I've been practicing the techniques and they’re helping.", time: '10:15 AM', sender: 'me' },
    { text: 'That’s great to hear! Which techniques helped most?', time: '10:20 AM', sender: 'them' },
    { text: 'Mindfulness exercises in the morning helped a lot.', time: '10:25 AM', sender: 'me' },
    { text: "Thanks for sharing. Let’s discuss more in next session.", time: '10:30 AM', sender: 'them' }
  ];

  constructor() {
    this.selectedUser = this.conversations[0];
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

}