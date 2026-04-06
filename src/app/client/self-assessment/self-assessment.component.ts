import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self-assessment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
export class SelfAssessmentComponent {

  stats = {
    total: 24,
    streak: '6 weeks',
    trend: 'Improving'
  };

  assessments = [
    {
      title: 'PHQ-9 Depression Screening',
      type: 'Depression',
      description: 'Patient Health Questionnaire for depression symptoms',
      questions: 9,
      duration: '5 min',
      frequency: 'Bi-weekly',
      lastDate: 'Feb 18, 2026',
      score: 8
    },
    {
      title: 'GAD-7 Anxiety Assessment',
      type: 'Anxiety',
      description: 'Generalized Anxiety Disorder screening tool',
      questions: 7,
      duration: '3 min',
      frequency: 'Weekly',
      lastDate: 'Feb 21, 2026',
      score: 12
    }
  ];

}