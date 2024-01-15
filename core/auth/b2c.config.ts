/* eslint-disable max-len */
import { environment } from '@env';

/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignInWithPasswordReset: 'B2C_1A_signup_signin_Custom_SelfServicePasswordReset',
  },
  authorities: {
    signUpSignInWithPasswordReset: {
      authority: `https://${environment.azure.autohrityBaseUrl}/${environment.azure.tentantDomainName}/B2C_1A_signup_signin_Custom_SelfServicePasswordReset`,
    },
  },
  authorityDomain: `${environment.azure.autohrityBaseUrl}`,
};

/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
  scopes: environment.azure.scopes,
  uri: environment.apiUrl,
};
