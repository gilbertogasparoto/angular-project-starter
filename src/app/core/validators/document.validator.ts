import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfCnpjValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const value = control.value.replace(/\D/g, '');

    if (value.length === 11) {
        return validateCPF(value) ? null : { invalidCPF: true };
    } else if (value.length === 14) {
        return validateCNPJ(value) ? null : { invalidCNPJ: true };
    }

    return { invalidLength: true };
}

function validateCPF(cpf: string): boolean {
    if (!cpf || cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;

    if (firstDigit !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;

    return secondDigit === parseInt(cpf.charAt(10));
}

function validateCNPJ(cnpj: string): boolean {
    if (!cnpj || cnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cnpj)) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
        sum += +numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== +digits.charAt(0)) return false;

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
        sum += +numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    return result === +digits.charAt(1);
}
