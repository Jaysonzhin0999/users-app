import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@shared/users.model';
import { take, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.getUsers().pipe(
      take(1),
      switchMap((users: User[]) => {
        const maxId = users.length > 0 
          ? Math.max(...users.map((u: User) => Number(u.id))) 
          : 0;
        
        const newUser: User = { ...user, id: String(maxId + 1) }; 
        return this.http.post<User>(this.apiUrl, newUser);
      })
    );
  }
  
  updateUser(updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${updatedUser.id}`, updatedUser);
  }


  deleteUser(id: string): Observable<void> {
    console.log(`Sending DELETE request for ID: ${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  
}
