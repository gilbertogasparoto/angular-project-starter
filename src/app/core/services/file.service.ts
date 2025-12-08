import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { ImageEditorModalComponent } from '../../shared/modals/image-editor-modal/image-editor-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private modalService: ModalService
  ) { }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  base64ToFile(base64: string, fileName: string, mimeType?: string): File {
    const arr = base64.split(',');
    const mime = mimeType || arr[0].match(/:(.*?);/)?.[1] || '';
    const bstr = atob(arr[1]);
    const u8arr = new Uint8Array(bstr.length);

    for (let i = 0; i < bstr.length; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    return new File([u8arr], fileName, { type: mime });
  }

  fileToBlob(file: File): Promise<Blob> {
    return Promise.resolve(new Blob([file], { type: file.type }));
  }

  blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async uploadAndEdit(allowedTypes: string[] = ['image/jpeg', 'image/png'], aspectRatio?: number): Promise<string | null> {
    const file = await this.selectFile(allowedTypes);
    if (!file) return null;

    const image = await this.uploadFile(file, allowedTypes);
    if (!image) return null;

    const editedImage = await this.openEditor(image, aspectRatio);
    return editedImage;
  }

  private selectFile(allowedTypes: string[]): Promise<File | null> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = allowedTypes.join(',');

      input.onchange = (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0] || null;
        resolve(file);
      };

      input.click();
    });
  }

  uploadFile(file: File, allowedTypes: string[]): Promise<string | null> {
    return new Promise((resolve) => {
      if (!allowedTypes.includes(file.type)) {
        resolve(null);
        return;
      }

      this.fileToBase64(file).then((imageBase64) => {
        resolve(imageBase64);
      });
    });
  }

  private openEditor(image: string, aspectRatio?: number): Promise<string | null> {
    return new Promise((resolve) => {
      const modalRef = this.modalService.open(ImageEditorModalComponent, 'lg', { centered: true });
      modalRef.componentInstance.image = image;
      modalRef.componentInstance.aspectRatio = aspectRatio;

      modalRef.componentInstance.edited.subscribe((editedImage: string) => {
        resolve(editedImage);
        modalRef.close();
      });

      modalRef.componentInstance.cancel.subscribe(() => {
        resolve(null);
        modalRef.close();
      });
    });
  }

  downloadBlobResponse(res: Blob, fileName: string, type?: string): void {
    const blob = new Blob([res], { type: type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
