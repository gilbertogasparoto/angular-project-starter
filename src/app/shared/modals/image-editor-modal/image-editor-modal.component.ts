import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { FileService } from '../../../core/services/file.service';

@Component({
  selector: 'app-image-editor-modal',
  templateUrl: './image-editor-modal.component.html',
  styleUrl: './image-editor-modal.component.scss'
})
export class ImageEditorModalComponent {
  @Input() image: string = '';
  @Input() aspectRatio?: number;

  @Output() edited = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  croppedImage: Blob | null = null;
  rotation: number = 0;
  zoom = 1;

  transform: ImageTransform = {
    scale: this.zoom
  };

  constructor(public activeModal: NgbActiveModal, private fileService: FileService) { }

  onCrop(event: ImageCroppedEvent) {
    if (event.blob) {
      this.croppedImage = event.blob;
    }
  }

  confirmCrop() {
    if (this.croppedImage) {
      this.fileService.blobToBase64(this.croppedImage).then(imageBase64 => {
        const image = imageBase64;
        this.edited.emit(image);
      })
    }
  }

  rotateLeft() {
    this.rotation = (this.rotation - 45) % 360;
  }

  rotateRight() {
    this.rotation = (this.rotation + 45) % 360;
  }

  onZoomChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.zoom = parseFloat(input.value);
    this.transform = { ...this.transform, scale: this.zoom };
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
