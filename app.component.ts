import { Component, OnInit } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isIframe = false;
  globalSpinnerName = 'globalSpinnerName';

  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private msalBroadcastService: MsalBroadcastService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;

    this.spinner.show(this.globalSpinnerName);

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.authService.checkAndSetActiveAccount();
        this.spinner.hide(this.globalSpinnerName);
      });
  }
}
