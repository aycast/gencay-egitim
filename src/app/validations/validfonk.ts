import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validfonk {
    static capitalLetterValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value || typeof value !== 'string') {
            return null;
        }

        const ascii: string[] = [];
        for (let n = 65; n <= 90; n++) {
            ascii.push(String.fromCharCode(n));
        }

        if (ascii.indexOf(value[0]) === -1) {
            return { capitalLetter: true };
        }

        return null;
    }
}