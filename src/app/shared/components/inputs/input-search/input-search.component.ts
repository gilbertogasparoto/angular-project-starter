import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBaseComponent } from '../base/input-base.component';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrl: '../base/input-base.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSearchComponent),
    multi: true
  }]
})
export class InputSearchComponent extends InputBaseComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>

  onSearch() {
    this.search.emit(this.value)
  }

  override updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(input.value);

    if (input.value === '') {
      this.onSearch()
    }
  }
}
