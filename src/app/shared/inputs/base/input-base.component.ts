import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { ErrorHandlingService } from '../../../core/services/error-handling.service';

@Component({
  selector: 'app-input-base',
  styleUrl: './input-base.component.scss',
  template: '',
})
export abstract class InputBaseComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';
  @Input() label?: string;
  @Input() icon?: string;
  @Input() mask?: string;

  public value: string = '';
  public disabled = false;
  protected ngControl: NgControl | null = null;

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor(
    protected injector: Injector,
    protected errorHandling: ErrorHandlingService,
  ) { }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl, null);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control(): AbstractControl | undefined {
    return this.ngControl?.control ?? undefined;
  }

  get invalid(): boolean {
    return !!this.control && this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get errorMessages(): string[] {
    return this.errorHandling.getFieldErrors(this.control);
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(input.value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
