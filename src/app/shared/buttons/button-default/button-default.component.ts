import { Component, HostBinding, Input } from '@angular/core';
import { BtnSize, BtnTheme } from '../buttons.types';


@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss'
})
export class ButtonDefaultComponent {
  @Input() type: string = 'button';
  @Input() theme: BtnTheme = 'primary';
  @Input() size: BtnSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingText?: string;
  @Input() icon?: string;

  @Input()
  @HostBinding('style.width')
  width: string = 'max-content';
}
