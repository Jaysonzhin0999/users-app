import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ViewUsersComponent } from './users/components/view-users/view-users.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { EditUserComponent } from './users/components/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: ViewUsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent }
];

export default routes; 
