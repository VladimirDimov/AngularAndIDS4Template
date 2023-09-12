import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/common/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  check = {
    isAuthenticated: this.authenticationService.isAuthenticated$,
  };

  name: string | null = null;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.InitAuthentication();
    this.authenticationService.isInRole('role1');
    this.name = this.authenticationService.getFullName();
  }

  login() {
    this.authenticationService.Login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
