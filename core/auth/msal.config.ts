import { MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';

import { environment } from '@env';
import { apiConfig, b2cPolicies } from './b2c.config';

export function loggerCallback(logLevel: LogLevel, message: string): void {
  // eslint-disable-next-line no-console
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.azure.clientId,
      authority: b2cPolicies.authorities.signUpSignInWithPasswordReset.authority,
      redirectUri: '/',
      knownAuthorities: [b2cPolicies.authorityDomain],
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    system: {
      loggerOptions: {
        // uncomment 'loggerCallback' to add logging
        // loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(apiConfig.uri, apiConfig.scopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: [...apiConfig.scopes],
    },
  };
}
