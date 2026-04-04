import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for-password',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './for-password.component.html',
  styleUrl: './for-password.component.scss'
})
export class ForPasswordComponent {
  email = '';

  onResetPassword(): void {
    console.log('Reset password clicked', {
      email: this.email
    });
  }
}
