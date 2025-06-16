import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) { }

  open(component: any, size: string = 'md', options?: NgbModalOptions) {
    const modalOptions: NgbModalOptions = {
      modalDialogClass: 'modal-dialog-centered',
      scrollable: true,
      size,
      ...options,
    };
    const modalRef = this.modalService.open(component, modalOptions);
    return modalRef;
  }

  close() {
    this.modalService.dismissAll();
  }
}
