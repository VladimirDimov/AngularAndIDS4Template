import { Component, OnInit } from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './common/auth-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  title = 'AuthTemplate';
}
