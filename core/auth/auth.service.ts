import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private msalService: MsalService) {}

  checkAndSetActiveAccount(): void {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    const activeAccount = this.msalService.instance.getActiveAccount();

    if (!activeAccount && this.msalService.instance.getAllAccounts().length > 0) {
      const accounts = this.msalService.instance.getAllAccounts();

      const account = accounts[0];

      this.msalService.instance.setActiveAccount(account);
    }
  }

  logout(): void {
    this.msalService.logout();
  }
}
