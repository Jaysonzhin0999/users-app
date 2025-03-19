import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '@shared/users.service';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form-component/user-form-component.component';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule,CommonModule,UserFormComponent],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private UsersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required]
    });

    this.loadUserData();
  }

  loadUserData() {
    this.UsersService.getUserById(this.userId).subscribe(
      (user) => {
        this.userForm.patchValue(user);
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  updateUser() {
    if (this.userForm.invalid) return;


    const updatedUser = {
      id: this.userId, 
      ...this.userForm.value 
    };

    this.UsersService.updateUser(updatedUser).subscribe(
      () => {
        alert('User updated successfully!');
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  cancel() {
    this.router.navigate(['/users']);
  }

  get f() {
    return this.userForm.controls;
  }
}
