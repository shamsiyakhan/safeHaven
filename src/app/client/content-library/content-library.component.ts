import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-library',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content-library.component.html',
  styleUrl: './content-library.component.scss'
})
export class ContentLibraryComponent {

  searchText = '';
  selectedCategory = 'All Categories';
  selectedSort = 'Newest First';
  activeTab = 'podcasts';

  contents = [
    {
      title: 'Understanding Anxiety: Tools for Daily Management',
      host: 'Dr. Sarah Williams',
      duration: '32 min',
      plays: '12.5K',
      tag: 'Anxiety',
      saved: false,
      image: 'https://images.unsplash.com/photo-1581090700227-1e8e1d5a0c0c'
    },
    {
      title: 'Building Resilience Through Mindfulness',
      host: 'Dr. James Chen',
      duration: '28 min',
      plays: '9.8K',
      tag: 'Mindfulness',
      saved: true,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
      title: 'Sleep Better: Creating Healthy Sleep Habits',
      host: 'Dr. Lisa Martinez',
      duration: '25 min',
      plays: '15.2K',
      tag: 'Sleep',
      saved: false,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
    }
  ];

  toggleSave(item: any) {
    item.saved = !item.saved;
  }

}