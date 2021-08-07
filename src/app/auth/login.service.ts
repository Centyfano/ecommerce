import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginUser } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

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
        this.authService.login();
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
    return throwError(error.error.detail);
  }
}
