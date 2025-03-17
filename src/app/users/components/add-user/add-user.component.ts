import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@shared/users.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent  {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9._-]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      console.log("Form Submitted Successfully:", this.userForm.value);

      this.userService.addUser(this.userForm.value).subscribe({
        next: (user) => {
          console.log("User added successfully:", user);
          this.router.navigate(['/users']);
        },
        error: (err) => console.error("Error adding user:", err)
      });
    } else {
      console.error("Form is invalid:", this.userForm.errors);
      console.log("Form Controls:", this.userForm.controls);
    }
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
