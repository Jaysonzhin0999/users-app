import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '@shared/users.service';
import { User } from '@shared/users.model';


@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {
  users: User[] = [];

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id);
    }
  }
}
