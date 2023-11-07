import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  accessToken: any;

  constructor() {
    console.log('intercept');
    
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = request.clone();
    setTimeout(() => {
      this.accessToken = JSON.parse(localStorage.getItem('login') || 'null')?.data?.token;
      if (  this.accessToken) {
        console.log('access',  this.accessToken);
        newReq = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' +this.accessToken),
        });
      }
    }, 5000);
   
    return next.handle(newReq);
  }
}
