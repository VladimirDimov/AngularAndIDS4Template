import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieService.get('');
  }

  title = 'AuthTemplate';
}
