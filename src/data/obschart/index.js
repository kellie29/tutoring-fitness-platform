// @flow

import { type AppData } from '../index';

import theme from './theme';
import occupations from './occupations';
import subscriptions from './subscriptions';
import i18n from './18n';
import TermsOfService from './assets/TermsOfService.md';
import EndUserLicenseAgreement from './assets/EndUserLicenseAgreement.md';

const obschartData: AppData = {
  showBetaWarning: true,
  noLanding: false,
  dashboardPath: '/dashboard',
  noLegalities: false,
  allowSignup: true,
  mobileApp: {
    urlScheme: 'com.deepscope.obschart',
    androidPackageName: 'com.deepscope.obschart',
    iosBundleId: 'com.deepscope.obschart',
    iosAppStoreId: '1453734085',
  },
  EndUserLicenseAgreement,
  TermsOfService,
  ...theme,
  occupations,
  subscriptions,
  i18n,
};

export default obschartData;
