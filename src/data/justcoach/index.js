// @flow

import invariant from 'invariant';

import { type AppData } from '../index';
import subscriptions from '../obschart/subscriptions';

import occupations from './occupations';
import i18n from './i18n';
import theme from './theme';
import TermsOfService from './assets/TermsOfService.md';
import EndUserLicenseAgreement from './assets/EndUserLicenseAgreement.md';

const personalTrainerOccupation = occupations.find(
  (occupation) => occupation.id === 'Personal trainer',
);
invariant(personalTrainerOccupation, 'Expected "personalTrainerOccupation"');

const justcoachData: AppData = {
  showBetaWarning: false,
  noLanding: true,
  dashboardPath: '/dashboard',
  noLegalities: true,
  allowSignup: false,
  mobileApp: {
    urlScheme: 'com.justcoach.mobile',
    androidPackageName: 'com.justcoach.mobile',
    iosBundleId: 'com.justcoach.mobile',
    iosAppStoreId: '1489164039',
  },
  EndUserLicenseAgreement,
  TermsOfService,
  ...theme,
  occupations: [personalTrainerOccupation],
  subscriptions,
  i18n,
};

export default justcoachData;
