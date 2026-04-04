import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  agreeTerms = false;

  showPassword = false;
  showConfirmPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSignup(): void {
    console.log('Signup clicked', {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      agreeTerms: this.agreeTerms
    });
  }

  onGoogleSignup(): void {
    console.log('Google signup clicked');
  }
}