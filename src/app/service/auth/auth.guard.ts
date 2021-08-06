import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  UserLogIn: boolean = false;
  constructor(
    private router: Router, 
    private auth: AuthService){
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.userSubject.value.result) {
    }
    return true;

    alert("비밀번호를 확인해주세요");
    this.router.navigate(['/login']);
    return false;
  }
}
