// @flow

import invariant from 'invariant';

export const dashboardEnabled = true;

invariant(process.env.REACT_APP_NAME, 'Expected REACT_APP_NAME envvar');
export const appName = process.env.REACT_APP_NAME;

invariant(process.env.REACT_APP_VERSION, 'Expected REACT_APP_VERSION envvar');
export const appVersion = process.env.REACT_APP_VERSION;

invariant(process.env.REACT_APP_DATA, 'Expected REACT_APP_DATA envvar');
export const appData = process.env.REACT_APP_DATA;

invariant(process.env.REACT_APP_ANALYTICS_ENABLED, 'Expected REACT_APP_ANALYTICS_ENABLED envvar');
export const analyticsEnabled = process.env.REACT_APP_ANALYTICS_ENABLED;

invariant(process.env.REACT_APP_GA_MEASUREMENT_ID, 'Expected REACT_APP_GA_MEASUREMENT_ID envvar');
export const gaMeasurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const gaUserIdEnabled = false;

invariant(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  'Expected REACT_APP_STRIPE_PUBLISHABLE_KEY envvar',
);
export const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

invariant(process.env.REACT_APP_API_URL, 'Expected REACT_APP_API_URL envvar');
export const apiUrl = process.env.REACT_APP_API_URL;

export default {
  youtubeApiKey: 'AIzaSyBcbDCd_sZkzx3eKTMMt1lMbX2wJoEtyNc',
};

invariant(process.env.REACT_APP_TWILIO_ACCOUNT_SID, 'Expected REACT_APP_TWILIO_ACCOUNT_SID envvar');
export const twilioAccountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;

invariant(
  process.env.REACT_APP_TWILIO_CHAT_SERVICE_SID,
  'Expected REACT_APP_TWILIO_CHAT_SERVICE_SID envvar',
);
export const twilioChatServiceSid = process.env.REACT_APP_TWILIO_CHAT_SERVICE_SID;
