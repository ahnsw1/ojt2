import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ojt2';

  user: any;

  constructor(private authService: AuthService) {
    this.authService.userSubject.subscribe(x => this.user = x);
  }
}
