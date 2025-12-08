import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(passwordField: string, confirmField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const passwordControl = formGroup.get(passwordField);
        const confirmControl = formGroup.get(confirmField);

        if (!passwordControl || !confirmControl) return null;

        const password = passwordControl.value;
        const confirm = confirmControl.value;

        if (confirm && password !== confirm) {
            confirmControl.setErrors({
                ...confirmControl.errors,
                fieldMismatch: true,
            });
        } else {
            if (confirmControl.errors) {
                const { fieldMismatch, ...otherErrors } = confirmControl.errors;
                if (Object.keys(otherErrors).length === 0) {
                    confirmControl.setErrors(null);
                } else {
                    confirmControl.setErrors(otherErrors);
                }
            }
        }

        return null;
    };
}

export const passwordRequirements = [
    { key: 'minLength', label: 'No mínimo 8 caracteres', test: (v: string) => v.length >= 8 },
    { key: 'uppercase', label: 'Pelo menos 1 letra maiúscula', test: (v: string) => /[A-Z]/.test(v) },
    { key: 'lowercase', label: 'Pelo menos 1 letra minúscula', test: (v: string) => /[a-z]/.test(v) },
    { key: 'number', label: 'Pelo menos 1 número', test: (v: string) => /\d/.test(v) },
    { key: 'special', label: 'Pelo menos 1 caractere especial', test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v) },
];

export function passwordRequirementsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value || '';

        if (!value) return null;

        const failed = passwordRequirements
            .filter(r => !r.test(value))
            .map(r => r.key);

        if (failed.length === 0) return null;

        const errors = failed.reduce((acc, key) => ({ ...acc, [key]: true }), {});
        return errors;
    };
}