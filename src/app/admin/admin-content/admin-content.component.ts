import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.scss'
})
export class AdminContentComponent {

  stats = [
    { title: 'Total Content', value: 347 },
    { title: 'Podcasts', value: 156 },
    { title: 'Videos', value: 191 },
    { title: 'Total Views', value: '1.2M' }
  ];

  activeTab = 'podcasts';

  tabs = ['podcasts', 'videos'];

  contentList = [
    {
      title: 'Understanding Anxiety: A Guide to Managing Daily Stress',
      category: 'Anxiety & Stress',
      author: 'Dr. Sarah Mitchell',
      duration: '28:45',
      views: '12,453',
      date: 'Feb 15, 2026',
      status: 'published'
    },
    {
      title: 'Mindfulness Meditation for Beginners',
      category: 'Meditation & Mindfulness',
      author: 'Dr. James Chen',
      duration: '15:30',
      views: '8,921',
      date: 'Feb 20, 2026',
      status: 'published'
    },
    {
      title: 'Overcoming Depression: Steps to Recovery',
      category: 'Depression',
      author: 'Dr. Emily Roberts',
      duration: '32:15',
      views: '15,678',
      date: 'Feb 28, 2026',
      status: 'published'
    },
    {
      title: 'Building Healthy Relationships',
      category: 'Relationships',
      author: 'Dr. Michael Brown',
      duration: '24:20',
      views: '542',
      date: 'Mar 1, 2026',
      status: 'draft'
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

}