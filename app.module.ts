import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MsalRedirectComponent } from '@azure/msal-angular';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, SharedModule, BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
