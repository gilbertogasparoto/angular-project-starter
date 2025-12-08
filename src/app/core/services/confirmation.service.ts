import { Injectable } from '@angular/core';
import { ConfirmationModalComponent } from '../../shared/modals/confirmation-modal/confirmation-modal.component';
import { ModalService } from './modal.service';

export type ModalType = 'info' | 'warning' | 'danger';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private modalService: ModalService) { }

  private open(
    message: string,
    title: string,
    type: ModalType,
    confirmText: string,
    cancelText?: string
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationModalComponent, 'sm', {
      backdrop: 'static',
      keyboard: false,
      centered: true
    });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.confirmText = confirmText;
    modalRef.componentInstance.cancelText = cancelText;

    return modalRef.result;
  }

  info(message: string, title = 'Informação', confirmText = 'OK'): Promise<boolean> {
    return this.open(message, title, 'info', confirmText);
  }

  warning(
    message: string,
    title = 'Atenção',
    confirmText = 'Sim',
    cancelText = 'Cancelar'
  ): Promise<boolean> {
    return this.open(message, title, 'warning', confirmText, cancelText);
  }

  danger(
    message: string,
    title = 'Confirmação',
    confirmText = 'Excluir',
    cancelText = 'Cancelar'
  ): Promise<boolean> {
    return this.open(message, title, 'danger', confirmText, cancelText);
  }

  confirm(
    type: ModalType = 'info',
    message: string,
    title = 'Confirmação',
    confirmText = 'OK',
    cancelText?: string
  ): Promise<boolean> {
    return this.open(message, title, type, confirmText, cancelText);
  }
}
