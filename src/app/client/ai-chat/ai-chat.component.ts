import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent {

  messageText = '';

  messages = [
    {
      text: "Hello! I'm your AI ChatBot Therapist, available 24/7 to provide emotional support and guidance. How are you feeling today?",
      time: 'Just now',
      sender: 'bot'
    }
  ];

  suggestions = [
    "I'm feeling anxious",
    "I need help managing stress",
    "I'm having trouble sleeping",
    "I feel overwhelmed"
  ];

  sendMessage() {
    if (!this.messageText.trim()) return;

    this.messages.push({
      text: this.messageText,
      time: 'Now',
      sender: 'user'
    });

    this.messageText = '';

    // fake bot reply
    setTimeout(() => {
      this.messages.push({
        text: 'I understand. Can you tell me more about what’s bothering you?',
        time: 'Now',
        sender: 'bot'
      });
    }, 800);
  }

  useSuggestion(text: string) {
    this.messageText = text;
    this.sendMessage();
  }
}