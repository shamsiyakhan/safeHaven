import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-subscription.component.html',
  styleUrl: './admin-subscription.component.scss'
})
export class AdminSubscriptionComponent {

  stats = [
    { title: 'Total Subscribers', value: '2,827' },
    { title: 'Monthly Revenue', value: '$174,517' },
    { title: 'Active Plans', value: 4 },
    { title: 'Growth Rate', value: '+12.5%' }
  ];

  plans = [
    {
      name: 'Basic Plan',
      price: '$29/month',
      subscribers: '1,245',
      revenue: '$36,105',
      features: [
        '2 therapy sessions per month',
        '24/7 AI ChatBot support',
        'Personal journal access',
        'Access to content library'
      ],
      status: 'active'
    },
    {
      name: 'Standard Plan',
      price: '$79/month',
      subscribers: '892',
      revenue: '$70,468',
      features: [
        '4 therapy sessions per month',
        '24/7 AI ChatBot support',
        'Personal journal access',
        'Support group access',
        'Progress tracking & reports'
      ],
      status: 'active'
    },
    {
      name: 'Premium Plan',
      price: '$149/month',
      subscribers: '456',
      revenue: '$67,944',
      features: [
        'Unlimited therapy sessions',
        'Priority support',
        'Advanced tracking',
        'Direct therapist messaging'
      ],
      status: 'active'
    },
    {
      name: 'Annual Premium',
      price: '$1490/year',
      subscribers: '234',
      revenue: '$348,660',
      features: [
        'All premium features',
        '2 months free',
        'Priority booking',
        'Exclusive webinars'
      ],
      status: 'active'
    }
  ];

  payments = [
    {
      user: 'Sarah Johnson',
      plan: 'Premium Plan',
      amount: '$149',
      method: 'Credit Card',
      date: 'Mar 3, 2026',
      status: 'completed'
    },
    {
      user: 'Michael Brown',
      plan: 'Standard Plan',
      amount: '$79',
      method: 'PayPal',
      date: 'Mar 3, 2026',
      status: 'completed'
    },
    {
      user: 'Emma Davis',
      plan: 'Basic Plan',
      amount: '$29',
      method: 'Credit Card',
      date: 'Mar 2, 2026',
      status: 'failed'
    },
    {
      user: 'David Wilson',
      plan: 'Annual Premium',
      amount: '$1490',
      method: 'Bank Transfer',
      date: 'Mar 2, 2026',
      status: 'completed'
    }
  ];

}