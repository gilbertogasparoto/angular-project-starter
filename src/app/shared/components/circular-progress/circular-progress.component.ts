import { Component, Input } from '@angular/core';
import { ColorsService } from '../../../core/services/colors.service';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrl: './circular-progress.component.scss'
})
export class CircularProgressComponent {
  @Input() percentage = 0;
  @Input() size = 140;
  @Input() stroke = 12;
  @Input() color = 'secondary';

  constructor(private colorsService: ColorsService) { }

  get radius(): number {
    return (this.size - this.stroke) / 2;
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get dashOffset(): number {
    if (this.percentage < 0) {
      this.percentage = 0;
    }

    if (this.percentage > 100) {
      this.percentage = 100;
    }
    return this.circumference * (1 - this.percentage / 100);
  }

  get strokeColor(): string {
    return this.colorsService.getColor(this.color);
  }
}
