import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationService } from './common/authentication.service';
import { IfLoggedInDirective } from './directives/auth.directives';

@NgModule({
  declarations: [AppComponent, HeaderComponent, IfLoggedInDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
