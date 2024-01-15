import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';

import { FeaturesModule } from './features/features.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'static-data/work-areas',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [MsalGuard],
    loadChildren: (): Promise<FeaturesModule> => import('./features/features.module').then((m) => m.FeaturesModule),
  },
  {
    /**
     * Needed for login on page load for PathLocationStrategy.
     * See FAQ for details:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular/docs/FAQ.md
     */
    path: 'auth',
    component: MsalRedirectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
