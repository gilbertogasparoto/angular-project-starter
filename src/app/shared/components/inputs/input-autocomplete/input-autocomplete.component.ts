import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBaseComponent } from '../base/input-base.component';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss', '../base/input-base.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAutocompleteComponent),
    multi: true
  }]
})
export class InputAutocompleteComponent extends InputBaseComponent {
  @Input() data: any[] = [];
  @Input() displayField?: string;

  filtered: any[] = [];
  showDropdown = false;

  override updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.filterSuggestions();
    this.showDropdown = true;
  }

  filterSuggestions(): void {
    const val = this.value.toLowerCase();
    this.filtered = this.data.filter(opt => opt.toLowerCase().includes(val));
  }

  selectSuggestion(suggestion: any): void {
    const value_ = this.displayField ? suggestion[this.displayField] : suggestion
    this.value = value_;
    this.onChange(value_);
    this.showDropdown = false;
  }

  onBlur(): void {
    this.onTouched();
    setTimeout(() => this.showDropdown = false, 100);
  }

  onFocus(): void {
    this.filterSuggestions();
    this.showDropdown = true;
  }
}
