import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBaseComponent } from '../base/input-base.component';

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

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
