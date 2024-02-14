
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  private apiKey = 'fca_live_9quS7S1ylqd1uLd4hMmtzWl8lyZUD2E22xllfbU5'; // Replace with your actual API key

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setParams: {
        apikey: this.apiKey,
      },
    });

    return next.handle(modifiedRequest);
  }
}