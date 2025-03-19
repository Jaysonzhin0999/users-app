import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '@shared/users.service';
import { User } from '@shared/users.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {
  users: User[] = [];
  showPassword: boolean[] = [];
  showDeleteModal = false;
  userIdToDelete: string | null = null;
  currentPage = 1;
  usersPerPage = 5;

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.showPassword = new Array(users.length).fill(false);
    });
  }

  togglePassword(index: number) {
    this.showPassword[index] = !this.showPassword[index];
  }

  openDeleteModal(id: string) {
    this.userIdToDelete = id;
    this.showDeleteModal = true;
  }

  closeModal() {
    this.showDeleteModal = false;
    this.userIdToDelete = null;
  }

  confirmDelete() {
    if (this.userIdToDelete !== null) {
      this.deleteUser(this.userIdToDelete);
    }
    this.closeModal();
  }

  // Pagination logic
  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    return this.users.slice(startIndex, startIndex + this.usersPerPage);
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.users.length / this.usersPerPage)) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.usersPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  deleteUser(id: string) {
    console.log(`Delete function triggered for ID: ${id}`);

    this.userService.deleteUser(id).subscribe(
      () => {
        console.log(`User with ID ${id} deleted successfully.`);
        this.users = this.users.filter(user => user.id !== id);
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
