import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  menuItems = [
    { label: 'Dashboard', icon: '⌂', route: 'dashboard' },
    { label: 'Find Therapist', icon: '◫', route: 'find-therapist' },
    { label: 'Appointments', icon: '◷', route: 'appointments' },
    { label: 'Messages', icon: '▢', route: 'messages' },
    { label: 'AI ChatBot 24/7', icon: '◉', route: 'chatbot' },
    { label: 'Journal', icon: '◌', route: 'journal' },
    { label: 'Self-Assessment', icon: '☰', route: 'self-assessment' },
    { label: 'Homework', icon: '☑', route: 'homework' },
    { label: 'Content Library', icon: '♡', route: 'content-library' },
    { label: 'Support Groups', icon: '◍', route: 'support-groups' },
    { label: 'Emergency Help', icon: '◔', route: 'emergency-help' },
    { label: 'Settings', icon: '⚙', route: 'settings' }
  ];

  constructor(private router: Router) {}

  redirect(route: string): void {
    this.router.navigate([`/client/${route}`]);
  }

  isActive(route: string): boolean {
    return this.router.url.includes(`/client/${route}`);
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
  }
}