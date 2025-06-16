import { Component, forwardRef } from '@angular/core';
import { InputBaseComponent } from '../base/input-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrl: '../base/input-base.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCurrencyComponent),
    multi: true
  }]
})
export class InputCurrencyComponent extends InputBaseComponent {
  private rawValue = '';

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  override writeValue(val: any): void {
    if (val != null && !isNaN(val)) {
      const cents = Math.round(+val * 100).toString();
      this.rawValue = cents;
      this.value = this.formatCurrency(+val);
    } else {
      this.rawValue = '0';
      this.value = this.formatCurrency(0);
    }
  }

  override updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '');

    this.rawValue = raw;

    const valueInCents = parseInt(raw || '0', 10);
    const value = valueInCents / 100;

    this.value = this.formatCurrency(value);
    this.onChange(value);
  }
}
