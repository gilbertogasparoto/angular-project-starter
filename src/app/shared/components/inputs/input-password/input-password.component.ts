import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBaseComponent } from '../base/input-base.component';
import { passwordRequirements } from '../../../../core/validators/password.validator';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrl: '../base/input-base.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPasswordComponent),
    multi: true
  }]
})
export class InputPasswordComponent extends InputBaseComponent {
  showPassword = false;
  passwordRequirements = passwordRequirements;
  @Input() showPasswordErrors = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  override get errorMessages(): string[] {
    if (!this.control || !this.control.errors) return [];
    const errors = this.control.errors;
    const messages: string[] = this.errorHandling.getFieldErrors(this.control);;

    if (this.showPasswordErrors) {
      for (const req of this.passwordRequirements) {
        if (errors[req.key]) {
          messages.push(req.label);
        }
      }
    }

    return messages;
  }
}
