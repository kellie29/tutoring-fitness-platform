// @flow

import * as React from 'react';

import { useDispatch } from '../store';

type Tracker = $ReadOnly<{|
  trackView: (path: string) => void,
  trackEvent: (name: string, parameters: any) => void,
  trackTiming: (name: string, milliseconds: number) => void,
|}>;

export default function useTracker(): Tracker {
  const dispatch = useDispatch();

  const tracker = React.useMemo(() => {
    const trackEvent = (name, parameters) => {
      dispatch({ type: 'trackEvent', payload: { name, parameters } });
    };
    const trackView = (path) => {
      dispatch({ type: 'trackView', payload: { path } });
    };
    const trackTiming = (name, milliseconds) => {
      dispatch({
        type: 'trackEvent',
        payload: { name: 'timing_complete', parameters: { name, value: Math.round(milliseconds) } },
      });
    };

    return {
      trackView,
      trackEvent,
      trackTiming,
    };
  }, [dispatch]);

  return tracker;
}
