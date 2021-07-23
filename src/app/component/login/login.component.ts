import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string;
  pwd: string;
  convertedPwd: string;

  constructor(private auth: AuthService, private router: Router) { 
    this.id = "";
    this.pwd = "";
    this.convertedPwd = "";
  }


  ngOnInit(): void {
  }

  login() {
    const digestMessage = async () => {
      const msgUint8 = new TextEncoder().encode(this.pwd);
      const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const result: string = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      this.convertedPwd = result;
      
      this.auth.postLogin(this.id, this.convertedPwd)
        .subscribe(
          data => {
            this.router.navigate(['/main'])
          }
        );
    }
    digestMessage();
  }
}
