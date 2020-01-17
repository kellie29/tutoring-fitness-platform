// @flow

import { REHYDRATE } from 'redux-persist';

import { analyticsEnabled, gaMeasurementId, gaUserIdEnabled } from '../../config';

import { type Action } from '..';

export default function trackingMiddleware() {
  return (next: $FlowFixMe) => (action: Action) => {
    if (!analyticsEnabled) {
      return next(action);
    }

    switch (action.type) {
      // $FlowFixMe
      case REHYDRATE: {
        if (!action.payload) {
          break;
        }
        const { trackingEnabled, userAuthenticationToken } = action.payload;
        window[`ga-disable-${gaMeasurementId}`] = !trackingEnabled;
        if (gaUserIdEnabled) {
          window.gtag('config', gaMeasurementId, {
            user_id: userAuthenticationToken,
          });
        }
        break;
      }
      case 'LOGIN': {
        const { authenticationToken } = action.payload;
        if (gaUserIdEnabled) {
          window.gtag('config', gaMeasurementId, {
            user_id: authenticationToken,
          });
        }
        break;
      }
      case 'LOGOUT': {
        if (gaUserIdEnabled) {
          window.gtag('config', gaMeasurementId, {
            user_id: null,
          });
        }
        break;
      }
      case 'setTrackingEnabled': {
        const trackingEnabled = action.payload;
        window[`ga-disable-${gaMeasurementId}`] = !trackingEnabled;
        break;
      }
      case 'trackEvent': {
        const { name, parameters } = action.payload;

        window.gtag('event', name, parameters);
        break;
      }
      case 'trackView': {
        const { path } = action.payload;

        window.gtag('config', gaMeasurementId, { page_path: path });
        break;
      }
      default: {
        break;
      }
    }
    return next(action);
  };
}
