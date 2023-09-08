import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable()
export class AuthenticationService {
  constructor(private oauthService: OAuthService) {}

  get isAuthenticated(): boolean {
    return !!this.oauthService.getAccessToken();
  }

  public InitAuthentication() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public Login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
    this.oauthService.revokeTokenAndLogout();
  }
}
