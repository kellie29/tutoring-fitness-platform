// @flow

import * as React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { IntlProvider } from 'react-intl';
import { RelayEnvironmentProvider } from 'relay-hooks';

import useTracker from './components/useTracker';
import appData from './data';
import TwilioClientProvider from './components/ChatPage/TwilioClientProvider';

const theme = createMuiTheme({
  typography: {
    fontFamily: appData.types.body,
    h1: {
      fontFamily: appData.types.title,
    },
    h2: {
      fontFamily: appData.types.title,
    },
    h3: {
      fontFamily: appData.types.title,
    },
    h4: {
      fontFamily: appData.types.title,
    },
    h5: {
      fontFamily: appData.types.title,
    },
    h6: {
      fontFamily: appData.types.title,
    },
  },
  palette: {
    primary: {
      main: appData.colors.primary,
    },
    secondary: {
      main: appData.colors.secondary,
    },
    background: {
      // main: appData.colors.background,
      main: appData.colors.secondary,
    },
    warning: {
      main: 'rgb(255, 160, 0)',
    },
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'capitalize',
      },
      contained: {
        fontWeight: 600,
        textTransform: 'capitalize',
        boxShadow: 'none',
      },
      outlined: {
        fontWeight: 600,
        textTransform: 'capitalize',
      },
      containedPrimary: {
        color: '#ffffff',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 14,
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        color: '#0059d6',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
      elevation8: {
        backgroundColor: '#ECF2FC',
        boxShadow:
          '0px 5px 5px -3px rgba(168, 191, 224 ,0.6), 0px 8px 10px 1px rgba(168, 191, 224 ,0.52), 0px 3px 14px 2px rgba(168, 191, 224 ,0.48)',
      },
    },
  },
});

const LocationTracker = function LocationTracker() {
  const location = useLocation();
  const tracker = useTracker();

  React.useEffect(() => {
    tracker.trackView(location.pathname);
  }, [location.pathname, tracker]);

  return null;
};

type Props = {
  store: any,
  relayEnvironment: any,
  locale: any,
  children: React.Node,
};

export default function Provider(props: Props) {
  const { store, relayEnvironment, locale, children } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <LocationTracker />
          <IntlProvider
            locale={locale}
            // $FlowFixMe
            messages={appData.i18n.en}
            defaultLocale="en-US"
          >
            <RelayEnvironmentProvider environment={relayEnvironment}>
              <ThemeProvider theme={theme}>
                <TwilioClientProvider>{children}</TwilioClientProvider>
              </ThemeProvider>
            </RelayEnvironmentProvider>
          </IntlProvider>
        </ReduxProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
