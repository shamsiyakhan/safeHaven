import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.scss'
})
export class EmergencyComponent {

  hotlines = [
    {
      title: 'National Suicide Prevention Lifeline',
      number: '988',
      desc: 'Free and confidential support',
    },
    {
      title: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      desc: 'Text with a trained counselor',
    },
    {
      title: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      desc: 'Treatment referral service',
    },
    {
      title: 'Emergency Services',
      number: '911',
      desc: 'Immediate life-threatening emergencies',
    }
  ];

}