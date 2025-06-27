import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  getHttpError(err: any, fallbackMessage: string = 'Erro desconhecido.'): string {
    if (typeof err?.error === 'string') {
      return err.error;
    } else if (err?.error?.message) {
      return err.error.message;
    } else if (err?.message) {
      return err.message;
    } else {
      return fallbackMessage;
    }
  }

  getFieldErrors(control?: AbstractControl): string[] {
    const errors: string[] = [];

    if (control?.hasError('required')) {
      errors.push('Campo obrigatório.');
    }

    if (control?.hasError('email')) {
      errors.push('Email inválido.');
    }

    if (control?.hasError('minlength')) {
      const err = control.getError('minlength');
      errors.push(`Campo deve ter no mínimo ${err.requiredLength} caracteres.`);
    }

    if (control?.hasError('maxlength')) {
      const err = control.getError('maxlength');
      errors.push(`Campo deve ter no máximo ${err.requiredLength} caracteres.`);
    }

    if (control?.hasError('min')) {
      const err = control.getError('min');
      errors.push(`Valor deve ser no mínimo ${err.min}.`);
    }

    if (control?.hasError('max')) {
      const err = control.getError('max');
      errors.push(`Valor deve ser no máximo ${err.max}.`);
    }

    if (control?.hasError('pattern')) {
      errors.push(`O formato do campo é inválido.`);
    }

    return errors;
  }
}
