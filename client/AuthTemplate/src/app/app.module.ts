import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService } from './common/authentication.service';
import {
  IfIsInRoleDirective as IfIsInRoleDirective,
  IfLoggedInDirective,
  IfLoggedOutDirective,
} from './directives/auth.directives';
import { AuthCache } from './common/auth.cache';
import { ProtectedPageComponent } from './components/protected-page/protected-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './common/guards/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ProtectedByRoleComponent } from './components/protected-by-role/protected-by-role.component';
import { roleGuard } from './common/guards/role.guard';
import { CookieModule, CookieService } from 'ngx-cookie';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';
import { adminRoutes } from './admin/components/admin.module';
import { AdminHomeAComponent } from './admin/components/admin-home/admin-home-a/admin-home-a.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'protected-page',
    component: ProtectedPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'protected-by-role-page',
    component: ProtectedByRoleComponent,
    canActivate: [roleGuard(['role1'])],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/components/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfLoggedInDirective,
    IfLoggedOutDirective,
    IfIsInRoleDirective,
    ProtectedPageComponent,
    ForbiddenComponent,
    ProtectedByRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(routes),
    CookieModule.withOptions(),
  ],
  providers: [
    AuthenticationService,
    AuthCache,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
