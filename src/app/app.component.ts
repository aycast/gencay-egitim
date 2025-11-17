import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { ModalformComponent } from './components/modalform/modalform.component';
import { MarkAsTouchedComponent } from './components/mark-as-touched/mark-as-touched.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { ReadUserComponent } from './components/users/read-user/read-user.component'; 
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DependencyInjectBasic } from './diproductservices/dependency-inject-basic';

@Component({
  selector: 'app-root',
  providers: [DependencyInjectBasic],
  // {provide: ProductService, useClass: ProductService} //Type Token
  // {provide: "productService", useClass: ProductService} //String Token
  template: `
  <app-example data="merhaba"></app-example><br>
  <app-modalform></app-modalform>
  <div class="mat-card">
    <header class="card-header">
        <h3>Template Form</h3> <br>
      </header>
    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
    <input type="text" name="name" placeholder="Name" ngModel /> <br>
    <input type="text" name="surname" placeholder="Surname" ngModel/> <br>
    <input type="email" name="email"  placeholder="Email" ngModel/> <br>
    <input type="phone" name="phone" placeholder="Phone" /> <br>

    <div ngModelGroup="address">
        <input type="text" name="city" placeholder="City" ngModel/> <br>
        <input type="text" name="country" placeholder="Country" ngModel/> <br>
        <input type="text" name="zip" placeholder="Zip" ngModel/> <br>
    </div>

    <button type="submit">Submit</button>
    </form>
  </div>
   <app-mark-as-touched></app-mark-as-touched><br>

   <app-create-user></app-create-user>
   <app-read-user></app-read-user>


   <a routerLink="home">Home</a> | <a routerLink="about">About</a> | <a routerLink="contact">Contact</a><br>
    <router-outlet></router-outlet>

    <a routerLink="product">Product</a><br>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet,RouterModule, ExampleComponent,ModalformComponent,MarkAsTouchedComponent,ReadUserComponent,CreateUserComponent, FormsModule, ReactiveFormsModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egitim';
  @ViewChild('myForm', { static: true }) myForm!: NgForm;
  
    onSubmit(data) {
      console.log(this.myForm.value);
      console.log(`Value : ${this.myForm.value }`);
      console.log(`Valid : ${this.myForm.valid }`);
      
      console.log(`touched : ${this.myForm.touched }`);
      console.log(`submitted : ${this.myForm.submitted }`);
      console.log(data);
    }
    constructor(private diBasic:DependencyInjectBasic){
      console.log("App Component constructor çalıştı" ,diBasic.getProducts);
      ;
    }
}
