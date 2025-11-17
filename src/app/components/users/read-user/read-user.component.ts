import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul>
    <li *ngFor="let name of userService.users">
      {{ name }}
    </li>
  </ul>
  `,
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent {
  constructor(public userService: UserService) {}

}
