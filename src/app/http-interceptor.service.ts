import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.loginService.getAccessToken();
    const authReq = req.clone(
      // {
      // headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      // }
    );

    return next.handle(authReq)
  }
  handleError(error: HttpErrorResponse) {
    throw new Error('Method not implemented.');    
  }
}
