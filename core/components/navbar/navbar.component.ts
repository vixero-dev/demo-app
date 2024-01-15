import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  logoutSpinnerName = 'logoutSpinner';

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) {}

  logout(): void {
    this.spinner.show(this.logoutSpinnerName);
    this.authService.logout();
  }
}
