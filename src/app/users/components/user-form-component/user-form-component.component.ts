import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss'],
})
export class UserFormComponent {
  @Input() userForm!: FormGroup; 
  @Input() formTitle!: string; 
  @Input() submitLabel!: string; 
  
  @Output() formSubmit = new EventEmitter<void>(); 
  @Output() cancel = new EventEmitter<void>(); 

  onSubmit() {
    if (this.userForm.valid) {
      this.formSubmit.emit();
    }
  }
}
