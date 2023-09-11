import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationService } from './common/authentication.service';
import {
  IfIsInRoleDirective as IfIsInRoleDirective,
  IfLoggedInDirective,
  IfLoggedOutDirective,
} from './directives/auth.directives';
import { AuthCache } from './common/auth.cache';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfLoggedInDirective,
    IfLoggedOutDirective,
    IfIsInRoleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [AuthenticationService, AuthCache],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
