import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-user',
  imports: [],
  template: `
  <input type="text" placeholder="İsim" #txtName />
  <button (click)="userCreate(txtName.value)">Create User</button>
  
  `,
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  constructor(private userService:UserService) { }
  userCreate(txtName:string) {
    this.userService.addUser(txtName);
  }
}
