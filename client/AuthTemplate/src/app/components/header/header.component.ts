import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/common/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.InitAuthentication();
  }

  login() {
    this.authenticationService.Login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
