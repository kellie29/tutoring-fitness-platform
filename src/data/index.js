// @flow

import * as React from 'react';

import { appData as appDataName } from '../config';

import obschart from './obschart';
import justcoach from './justcoach';

export type Occupation = $ReadOnly<{|
  id: string,
  name: string,
  tags: $ReadOnlyArray<string>,
|}>;

export type Subscription = $ReadOnly<{|
  slug: string,
  name: string,
  price: string,
  text: string,
  features: Array<string>,
  buttonText: string,
  link: string,
  buttonSubtext?: string,
|}>;

// ISO 639-1: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
type SupportedLanguages = 'en';
type I18n = {
  +[language: SupportedLanguages]: { +[key: string]: string },
};

export type AppData = $ReadOnly<{|
  showBetaWarning: boolean,
  noLanding: boolean,
  dashboardPath: string,
  noLegalities: boolean,
  allowSignup: boolean,
  mobileApp: $ReadOnly<{|
    urlScheme: string,
    androidPackageName: string,
    iosBundleId: string,
    iosAppStoreId: string,
  |}>,
  EndUserLicenseAgreement: React.AbstractComponent<any>,
  TermsOfService: React.AbstractComponent<any>,
  logo:
    | 'obschart'
    | $ReadOnly<{|
        fullBlack: string,
        fullWhite: string,
        shortBlack: string,
        shortWhite: string,
      |}>,
  stylesheets: $ReadOnlyArray<string>,
  types: $ReadOnly<{|
    title: string,
    subtitle: string,
    body: string,
  |}>,
  colors: $ReadOnly<{|
    primary: string,
    secondary: string,
    background: string,
  |}>,
  occupations: $ReadOnlyArray<Occupation>,
  subscriptions: $ReadOnlyArray<Subscription>,
  i18n: I18n,
|}>;

const appData: AppData = {
  obschart,
  justcoach,
}[appDataName];

export default appData;
