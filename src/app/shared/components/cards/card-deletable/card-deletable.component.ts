import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-deletable',
  templateUrl: './card-deletable.component.html',
  styleUrl: './card-deletable.component.scss'
})
export class CardDeletableComponent {
  dragging = false;
  startX = 0;
  currentX = 0;
  translateX = 0;
  maxSwipe = -74;

  @Output() ondelete: EventEmitter<void> = new EventEmitter()


  onDragStart(event: MouseEvent | TouchEvent) {
    this.dragging = true;
    this.startX = this.getX(event);
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    this.currentX = this.getX(event);
    const deltaX = this.currentX - this.startX;

    this.translateX = Math.max(this.maxSwipe, Math.min(0, deltaX));

    const card = (event.target as HTMLElement).closest('.swipe-card') as HTMLElement;
    if (card) {
      card.style.transform = `translateX(${this.translateX}px)`;
    }
  }

  onDragEnd(event: MouseEvent | TouchEvent) {
    this.dragging = false;
    const card = (event.target as HTMLElement).closest('.swipe-card') as HTMLElement;
    if (!card) return;

    if (this.translateX <= this.maxSwipe / 2) {
      card.style.transform = `translateX(${this.maxSwipe}px)`;
      this.translateX = this.maxSwipe;
    } else {
      card.style.transform = 'translateX(0)';
      this.translateX = 0;
    }
  }

  getX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }

  deleteItem(): void {
    this.ondelete.emit();
  }
}
