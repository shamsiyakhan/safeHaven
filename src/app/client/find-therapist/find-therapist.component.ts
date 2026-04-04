import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-find-therapist',
  standalone: true,
  imports: [CommonModule, FormsModule, OverviewComponent],
  templateUrl: './find-therapist.component.html',
  styleUrls: ['./find-therapist.component.scss']
})
export class FindTherapistComponent {
  searchText = '';
  selectedSpecialty = 'All Specialties';
  selectedTime = 'All Times';

  therapists = [
    {
      name: 'Dr. Emily Chen',
      specialty: 'Cognitive Behavioral Therapy',
      rating: '4.9',
      reviews: '127',
      experience: '12 years exp',
      description:
        'Specializing in anxiety, depression, and stress management with evidence-based approaches.',
      price: '120',
      language: 'English, Mandarin',
      availability: 'Available Today',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Dr. Michael Roberts',
      specialty: 'Mindfulness & Stress Management',
      rating: '4.8',
      reviews: '98',
      experience: '10 years exp',
      description:
        'Helping clients find balance through mindfulness-based stress reduction and meditation.',
      price: '110',
      language: 'English, Spanish',
      availability: 'Next available: Tomorrow',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Dr. Sarah Thompson',
      specialty: 'Family & Relationship Therapy',
      rating: '5',
      reviews: '156',
      experience: '15 years exp',
      description:
        'Expert in couples therapy, family dynamics, and improving communication in relationships.',
      price: '135',
      language: 'English, French',
      availability: 'Available Today',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Dr. James Anderson',
      specialty: 'Trauma & PTSD',
      rating: '4.9',
      reviews: '89',
      experience: '14 years exp',
      description:
        'Specialized in trauma-informed care and EMDR therapy for PTSD and complex trauma.',
      price: '140',
      language: 'English',
      availability: 'Next available: Friday',
      image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      name: 'Dr. Lisa Martinez',
      specialty: 'Anxiety & Depression',
      rating: '4.7',
      reviews: '112',
      experience: '9 years exp',
      description:
        'Compassionate care for anxiety disorders, depression, and panic attacks using CBT and DBT.',
      price: '125',
      language: 'English, Spanish',
      availability: 'Available Today',
      image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Career & Life Coaching',
      rating: '4.8',
      reviews: '74',
      experience: '8 years exp',
      description:
        'Guiding professionals through career transitions, work-life balance, and personal growth.',
      price: '115',
      language: 'English, Korean',
      availability: 'Next available: Wednesday',
      image: 'https://randomuser.me/api/portraits/men/51.jpg'
    }
  ];
}