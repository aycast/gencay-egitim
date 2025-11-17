import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modalform',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <div class="mat-card">
  <header class="card-header">
    
    <h3>Modal Form Component</h3><br>
  </header>
    <form [formGroup]="modalform" (ngSubmit)="onSubmit()">
      <input formControlName="school" type="text" placeholder="School" /> <br>
      <input formControlName="city" type="text" placeholder="City" /> <br>
      <input formControlName="email" type="email" placeholder="Email" /> <br>
      <input formControlName="phone" type="phone" placeholder="Phone" /> <br>

      <div formGroupName="address">
        <input type="text" formControlName="faculty" placeholder="Faculty" /> <br>
        <input type="text" formControlName="departmant" placeholder="Departmant" /> <br>
        <input type="text" formControlName="agno" placeholder="Agno" /> <br>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
`,
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent {
  modalform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.modalform = formBuilder.group({
      school: [''],
      city: [''],
      email: [''],
      phone: [''],
      address:formBuilder.group({
          faculty: [''],
          departmant: [''],
          agno: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.modalform.value);
  }
}
