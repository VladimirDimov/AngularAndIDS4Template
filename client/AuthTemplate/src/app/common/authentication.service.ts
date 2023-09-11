import { Injectable, Input } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Observable, Subject, from, of } from 'rxjs';

@Injectable()
export class AuthenticationService {
  public _isAuthenticated = new Subject<boolean>();

  constructor(private oauthService: OAuthService) {}

  public get isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated;
  }

  public InitAuthentication() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then((x) => {
      this._isAuthenticated.next(!!this.oauthService.getAccessToken());
    });
  }

  public Login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut({
      test: 123,
    });
    // this.oauthService.revokeTokenAndLogout();
  }
}
