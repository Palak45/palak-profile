import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const isWhitespace = (control.value || '').match(/\s/g);
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
}
