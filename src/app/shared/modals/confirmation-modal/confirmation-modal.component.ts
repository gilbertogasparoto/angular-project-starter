import { Component, Input } from '@angular/core';
import { ModalType } from '../../../core/services/confirmation.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() confirmText = 'Confirmar';
  @Input() cancelText?: string;
  @Input() type: ModalType = 'info';

  constructor(public activeModal: NgbActiveModal) { }

  get btnTheme() {
    switch (this.type) {
      case 'warning': return 'warning';
      case 'danger': return 'danger';
      default: return 'primary';
    }
  }

  get iconClass() {
    switch (this.type) {
      case 'warning': return 'bi bi-exclamation-triangle-fill text-warning';
      case 'danger': return 'bi bi-x-circle-fill text-danger';
      default: return 'bi bi-info-circle-fill text-primary';
    }
  }

  confirm() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.dismiss(false);
  }
}
