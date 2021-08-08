import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginUser } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  redirectUrl: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private accessToken: any;

  getAccessToken() {
    return this.accessToken;
  }

  loginUser(user: LoginUser): Observable<LoginUser> {
    const url = 'https://ecommerce-apis.herokuapp.com/auth/login/';
    return this.http.post<LoginUser>(url, user, this.options).pipe(
      tap((e: any) => {
        this.accessToken = e.access;
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      console.error(error);
    }
    // Return an observable with a user-facing error message.
    const custom = 'Please check that correct data is entered';
    return throwError(error.error.detail || custom);
  }

  logoutUser(): void {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login')
  }
}
