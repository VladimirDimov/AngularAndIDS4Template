import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../common/authentication.service';
import { AuthCache } from '../../common/auth.cache';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHomeAComponent } from './admin-home/admin-home-a/admin-home-a.component';
import { AdminHomeBComponent } from './admin-home/admin-home-b/admin-home-b.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: 'a', component: AdminHomeAComponent },
      { path: 'b', component: AdminHomeBComponent },
    ],
  },
];

@NgModule({
  declarations: [AdminHomeComponent, AdminHomeAComponent, AdminHomeBComponent],
  imports: [RouterModule.forChild(adminRoutes)],
  providers: [],
  bootstrap: [],
})
export class AdminModule {
  constructor() {}
}
