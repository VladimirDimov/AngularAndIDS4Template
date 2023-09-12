import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  name$: Observable<string | null> = this.authenticationService.getFullName();

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.InitAuthentication();
    this.authenticationService.isInRole('role1');
  }

  login() {
    this.authenticationService.Login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
