import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrl: './empty-data.component.scss'
})
export class EmptyDataComponent {
  @Input() title: string = "Nenhum dado encontrado";
  @Input() text?: string;
  @Input() searchTerm: string | null = null;
}
