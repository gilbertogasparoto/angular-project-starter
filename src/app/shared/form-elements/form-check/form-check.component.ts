import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-check',
  templateUrl: './form-check.component.html',
  styleUrl: './form-check.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormCheckComponent),
    multi: true
  }]
})
export class FormCheckComponent {
  @Input() type: 'checkbox' | 'radio' = 'checkbox';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;

  private _checked = false;

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  private onChange = (value: boolean) => { };
  private onTouched = () => { };

  writeValue(value: boolean): void {
    this.checked = value ?? false;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleCheck(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
