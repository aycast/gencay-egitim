import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule ,Validators} from '@angular/forms';
//import { capitalLetterValidator } from '../../validations/validfonk';
@Component({
  selector: 'app-mark-as-touched',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="mat-card">
    <header class="card-header">
      <h3>Form Durum Kontrolü</h3>
      <p class="muted">Reactive form örneği — doğrulama ve state gösterimi</p>
    </header>

    <form [formGroup]="touchedform" class="form">
      <label class="form-row">
        <span class="label">İsim</span>
        <input class="input" type="text" formControlName="name" placeholder="Name" />
      </label>
      <div class="error" *ngIf="!name?.valid && (name?.dirty || name?.touched)">
        İsim gereklidir! {{ name?.errors | json }}
      </div>

      <label class="form-row">
        <span class="label">Soyisim</span>
        <input class="input" type="text" formControlName="surname" placeholder="Surname" />
      </label>
      <div class="error" *ngIf="!surname?.valid && (surname?.dirty || surname?.touched)">
        Soyisim gereklidir ve en az 3 karakter olmalıdır! {{ surname?.errors | json }}
      </div>

      <label class="form-row">
        <span class="label">Email</span>
        <input class="input" type="email" formControlName="email" placeholder="Email" />
      </label>
      <div class="error" *ngIf="!email?.valid && (email?.dirty || email?.touched)">
        Geçerli bir email giriniz! {{ email?.errors | json }}
      </div>

      <div class="actions">
        <button class="btn" (click)="markAsTouched()" type="button">Mark As Touched</button>
        <button class="btn outline" (click)="markAllAsTouched()" type="button">Mark All</button>
        <button class="btn outline" (click)="markAsUntouched()" type="button">Untouch</button>
      </div>

      <div class="actions">
        <button class="btn warning" (click)="markAsDirty()" type="button">Dirty</button>
        <button class="btn" (click)="markAsPristine()" type="button">Pristine</button>
      </div>

      <div class="actions">
        <button class="btn danger" (click)="disable()" type="button">Disable</button>
        <button class="btn" (click)="enable()" type="button">Enable</button>
      </div>
    </form>

    <section class="status">
      <div>Form touched: <strong>{{ touchedform.touched }}</strong></div>
      <div>Form dirty: <strong>{{ touchedform.dirty }}</strong></div>
      <div>Form pristine: <strong>{{ touchedform.pristine }}</strong></div>
      <div>'name' control touched: <strong>{{ touchedform.get('name')?.touched }}</strong></div>
      <div>'name' control dirty: <strong>{{ touchedform.get('name')?.dirty }}</strong></div>
    </section>
  </div>
  `,
  styleUrls: ['./mark-as-touched.component.scss']
})
export class MarkAsTouchedComponent {
  touchedform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.touchedform = formBuilder.group({
      name: ['', Validators.required],
      surname: ['',[Validators.required,Validators.minLength(3)]],
      email: ['']
    });
  }
  get name() {
    return this.touchedform.get('name') ;
  }
  get surname() {
    return this.touchedform.get('surname') ;
  }
  get email() {
    return this.touchedform.get('email') ;
  }
  markAsTouched() {
    this.touchedform.markAsTouched();
    this.touchedform.get('name')?.markAsTouched();
  }

  markAllAsTouched() {
    this.touchedform.markAllAsTouched();
  }

  markAsUntouched() {
    this.touchedform.markAsUntouched();
    this.touchedform.get('name')?.markAsUntouched();
  }

  markAsDirty() {
    // mark only the 'name' control as dirty for demo
    this.touchedform.get('name')?.markAsDirty();
  }

  markAsPristine() {
    this.touchedform.get('name')?.markAsPristine();
  }

  disable() {
    this.touchedform.disable();
  }

  enable() {
    this.touchedform.enable();
  }
}
