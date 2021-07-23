import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<any>;
  // user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : {});
    // this.user = this.userSubject.asObservable();
  }

  // public get userValue(): any {
  //   return this.userSubject.value;
  // }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postLogin(id: string, pwd: string) {
    return this.http.post<User[]>("http://192.168.0.3:5000/accounts/signin", { "accountID": id, "password": pwd }, this.httpOptions)
      .pipe(
        map((data: any) => {
          localStorage.setItem("user", JSON.stringify(data));
          this.userSubject.next(data);
          return data;
        })
      )
  }
}

export interface User {
  id: string;
  pwd: string;
}