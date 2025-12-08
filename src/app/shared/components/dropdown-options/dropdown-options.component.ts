import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrl: './dropdown-options.component.scss'
})
export class DropdownOptionsComponent {
  @ViewChild('toggle', { read: ElementRef }) toggle!: ElementRef<HTMLElement>;
  @ViewChild('menu', { read: ElementRef }) menu!: ElementRef<HTMLElement>;
  @ViewChild('host', { read: ElementRef }) host!: ElementRef<HTMLElement>;

  private popperInstance: any | null = null;
  private isOpen = false;
  private originalParent!: Node;
  private originalNextSibling: Node | null = null;
  private documentClickUnlisten!: () => void;

  constructor(private renderer: Renderer2, private hostRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.originalParent = this.menu.nativeElement.parentNode as Node;
    this.originalNextSibling = this.menu.nativeElement.nextSibling;
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.isOpen) return;

    this.renderer.appendChild(document.body, this.menu.nativeElement);

    this.renderer.setStyle(this.menu.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.menu.nativeElement, 'display', 'block');
    this.renderer.addClass(this.menu.nativeElement, 'show');

    this.popperInstance = createPopper(
      this.toggle.nativeElement,
      this.menu.nativeElement,
      {
        placement: 'bottom-end',
        modifiers: [
          { name: 'preventOverflow', options: { boundary: document.body } },
          { name: 'offset', options: { offset: [0, 8] } }
        ]
      }
    );

    this.documentClickUnlisten = this.renderer.listen('document', 'click', (ev: Event) => {
      const target = ev.target as Node;
      if (!this.host.nativeElement.contains(target) && !this.menu.nativeElement.contains(target)) {
        this.close();
      }
    });

    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;

    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }

    this.renderer.removeClass(this.menu.nativeElement, 'show');
    this.renderer.setStyle(this.menu.nativeElement, 'display', 'none');

    if (this.originalNextSibling && this.originalNextSibling.parentNode === this.originalParent) {
      this.renderer.insertBefore(this.originalParent, this.menu.nativeElement, this.originalNextSibling);
    } else {
      this.renderer.appendChild(this.originalParent, this.menu.nativeElement);
    }

    if (this.documentClickUnlisten) {
      this.documentClickUnlisten();
      this.documentClickUnlisten = undefined as any;
    }

    this.isOpen = false;
  }

  ngOnDestroy(): void {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
    if (this.isOpen) {
      try {
        if (this.originalParent) {
          this.renderer.appendChild(this.originalParent, this.menu.nativeElement);
        }
      } catch { }
    }
    if (this.documentClickUnlisten) {
      this.documentClickUnlisten();
    }
  }
}
