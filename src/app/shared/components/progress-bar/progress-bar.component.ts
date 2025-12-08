import { Component, Input } from '@angular/core';
import { ColorsService } from '../../../core/services/colors.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() color: string = 'primary';

  constructor(private colorsService: ColorsService) { }

  getStyles() {
    const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    return {
      'background-color': this.colorsService.getColor(this.color),
      'width': `${percent}%`
    };
  }
}
