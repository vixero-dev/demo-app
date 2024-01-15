import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalInterceptor,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';

import { SharedModule } from '@shared/shared.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MSALGuardConfigFactory, MSALInstanceFactory, MSALInterceptorConfigFactory } from './auth/msal.config';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [SidenavComponent, NavbarComponent],
  imports: [RouterModule, HttpClientModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
  exports: [SidenavComponent, NavbarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
