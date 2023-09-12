import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap, filter } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (
      req.url !== 'https://localhost:5001/connect/token' ||
      req.method !== 'POST'
    ) {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      tap((response: any) => {
        if (response.type === 0 || !response.body?.access_token) return;
        this.auth.updateAccessToken(response.body.access_token);
      })
    );
  }
}
