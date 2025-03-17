import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'users-app';

  constructor(private router: Router) {}

  logMessage(message: string) {
    console.log(message);
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
