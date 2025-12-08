import { Component, Input } from '@angular/core';
import { passwordRequirements } from '../../../core/validators/password.validator';

@Component({
  selector: 'app-password-requirements',
  templateUrl: './password-requirements.component.html',
  styleUrl: './password-requirements.component.scss'
})
export class PasswordRequirementsComponent {
  @Input() password: string | null = null;

  get requirements() {
    return passwordRequirements;
  }

  isMet(testFn: (v: string) => boolean): boolean {
    const value = this.password || '';
    return testFn(value);
  }
}
