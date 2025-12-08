import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-initials',
  templateUrl: './profile-initials.component.html',
  styleUrl: './profile-initials.component.scss'
})
export class ProfileInitialsComponent {
  @Input() name: string = '';
  @Input() size: 'sm' | 'md' | 'lg' | string = 'md';
  @Input() fontSize: 'sm' | 'md' | 'lg' | string = 'md';
  @Input() rounded: '0' | '1' | '2' | '3' | 'circle' = 'circle';
  @Input() ratio: '1/1' | '4/3' | '16/9' = '1/1';

  get internalSize(): string {
    switch (this.size) {
      case 'sm': return '32px';
      case 'md': return '48px';
      case 'lg': return '64px';
      default: return this.size;
    }
  }

  get internalFontSize(): string {
    switch (this.size) {
      case 'sm': return '12px';
      case 'md': return '14px';
      case 'lg': return '24px';
      default: return this.fontSize;
    }
  }

  getInitials(): string {
    if (!this.name) return '';

    const parts = this.name
      .trim()
      .split(' ')
      .filter(p => p.length > 0);

    if (parts.length === 1) {
      return parts[0][0].toUpperCase();
    }

    const first = parts[0][0].toUpperCase();
    const last = parts[parts.length - 1][0].toUpperCase();

    return first + last;
  }
}
