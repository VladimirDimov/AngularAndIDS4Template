import { Injectable, Input } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { BehaviorSubject, Observable, Subject, from, map, of, tap } from 'rxjs';
import { AuthCache } from './auth.cache';

@Injectable()
export class AuthenticationService {
  public _isAuthenticated = new Subject<boolean>();

  constructor(
    private oauthService: OAuthService,
    private authCache: AuthCache
  ) {}

  public get isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated;
  }

  public get isAuthenticated(): boolean {
    return !!this.oauthService.getAccessToken();
  }

  public InitAuthentication() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then((x) => {
      this._isAuthenticated.next(this.isAuthenticated);
    });
    this.updateClaimsCache();
  }

  public Login() {
    this.oauthService.initCodeFlow();
    this._isAuthenticated.next(this.isAuthenticated);
    this.updateClaimsCache();
  }

  public logout() {
    this.oauthService.logOut({
      test: 123,
    });
  }

  public isInRole(role: string): boolean {
    return this.authCache.claims?.role?.indexOf(role) > -1;
  }

  public isInRoles(roles: string[]): boolean {
    for (const role of roles) {
      if (!this.isInRole(role)) return false;
    }

    return true;
  }

  public getFullName(): Observable<string | null> {
    return this.authCache.claims$.pipe(map((c) => c?.name || null));
  }

  public updateAccessToken(accessToken: string) {
    const middlePart = accessToken.substring(
      accessToken.indexOf('.') + 1,
      accessToken.lastIndexOf('.')
    );
    const decoded = atob(middlePart);
    const claimsObj = JSON.parse(decoded);
    this.authCache.updateCache(claimsObj);
  }

  private updateClaimsCache(): void {
    const accessToken = this.oauthService.getAccessToken();

    if (!accessToken) return;

    this.updateAccessToken(accessToken);
  }
}
