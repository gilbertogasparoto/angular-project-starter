import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-card-check',
  templateUrl: './card-check.component.html',
  styleUrl: './card-check.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CardCheckComponent),
    multi: true
  }]
})
export class CardCheckComponent {
  @Input() type: 'checkbox' | 'radio' = 'checkbox';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;

  checked = false;

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

  toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = !!input.checked;
    this.onChange(this.checked);
    this.onTouched();
  }

  onHostClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'input' || !!target.closest('input')) {
      return;
    }
    this.toggle();
  }
}
