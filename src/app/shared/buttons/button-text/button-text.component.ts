import { Component, Input } from '@angular/core';
import { BtnTextStyle } from '../base/buttons.types';
import { ButtonBaseComponent } from '../base/button-base.component';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.scss'
})
export class ButtonTextComponent extends ButtonBaseComponent<BtnTextStyle> {
  @Input() override theme: BtnTextStyle = 'neutral';
}
