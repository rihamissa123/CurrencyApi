import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith('https://api.fastforex.io/currencies?');

    if (isApiRequest) {
      request = request.clone({
        setParams: {
          'api_key': '8322402a13-a433c236a0-s0ntxt'
        }
      });
    }

    return next.handle(request);
  }
}