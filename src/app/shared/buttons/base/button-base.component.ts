import { Component, HostBinding, Input } from '@angular/core';
import { BtnSize, BtnTheme, BtnVariant } from './buttons.types';

@Component({
  selector: 'app-button-base',
  styleUrl: './button-base.component.scss',
  template: '',
})
export class ButtonBaseComponent<TTheme extends string = BtnTheme> {
  @Input() type: string = 'button';
  @Input() theme: TTheme = 'primary' as TTheme;
  @Input() variant: BtnVariant = 'default';
  @Input() size: BtnSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingText?: string;
  @Input() icon?: string;

  @Input()
  @HostBinding('style.width')
  width: string = 'max-content';

  get buttonStyle(): string {
    const variant = this.variant !== 'default' ? `${this.variant}-` : '';
    return `btn-${variant}${this.theme}`
  }
}
