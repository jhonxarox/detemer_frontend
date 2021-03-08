import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let apiService = this.injector.get(ApiService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Demeter ${apiService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
