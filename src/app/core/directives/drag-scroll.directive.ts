import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[drag-scroll]',
})
export class DragScrollDirective {
  private startX: number = 0;
  private startScrollLeft: number = 0;
  private isDragging: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.startX = event.pageX;
    this.startScrollLeft = this.el.nativeElement.scrollLeft;
    this.isDragging = true;

    this.renderer.addClass(this.el.nativeElement, 'grabbing');
    this.el.nativeElement.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this)
    );
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const moveX = this.startX - event.pageX;
      this.el.nativeElement.scrollLeft = this.startScrollLeft + moveX;
    }
  }

  private onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeClass(this.el.nativeElement, 'grabbing');
      this.el.nativeElement.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }
}
