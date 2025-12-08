import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorsService } from '../../../../core/services/colors.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
  }]
})
export class SliderComponent implements ControlValueAccessor {
  @Input() min = 0;
  @Input() max = 5;
  @Input() color: string = 'primary';

  value: number = 0;

  constructor(private colorsService: ColorsService) { }

  private onChange: (value: number) => void = () => { };
  onTouched: () => void = () => { };

  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = +input.value;
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = !isNaN(value) ? value : 0;

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  disabled = false;

  get _color(): string {
    return this.colorsService.getColor(this.color)
  }

  get cssVars() {
    return {
      '--slider-color': this._color
    };
  }

  get progressStyle() {
    const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    return {
      background: `linear-gradient(to right, ${this._color} ${percent}%, var(--color-gray-light) ${percent}%)`,
    };
  }

  get thumbStyle() {
    const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    return {
      left: `clamp(0%, calc(${percent}% - 12px), calc(100% - 48px))`,
      background: this._color,
    };
  }
}
