// @flow

import * as React from 'react';
import { Link, type ContextRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import countries from 'i18n-iso-countries';
import enCountries from 'i18n-iso-countries/langs/en.json';
import invariant from 'invariant';
import { FormControlLabel, Checkbox, Hidden } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import { graphql, createQuery, createMutation, useCreateSessionMutation } from '../../api';
import Select from '../Select2';
import Logo from '../Logo';
import occupationOptions from '../occupationOptions';
import useAsyncTask from '../useAsyncTask';
import { useDispatchers } from '../../store';
import DashboardFrame from '../DashboardFrame';
import useFormatMessage from '../useFormatMessage';
import appData from '../../data';

import { type SignupPageQuery } from './__generated__/SignupPageQuery.graphql';
import { type SignupPageCreateUserMutation } from './__generated__/SignupPageCreateUserMutation.graphql';

countries.registerLocale(enCountries);

const enCountryNames = countries.getNames('en');
const countryOptions = Object.keys(enCountryNames).map((key) => ({
  value: countries.alpha2ToAlpha3(key),
  label: enCountryNames[key],
}));

const useCreateUserMutation = createMutation<SignupPageCreateUserMutation>(graphql`
  mutation SignupPageCreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
      }
    }
  }
`);

const useQuery = createQuery<SignupPageQuery>(graphql`
  query SignupPageQuery {
    requesterCountry
  }
`);

type Props = {
  ...ContextRouter,
};

export default function SignupPage(props: Props) {
  const { history, location } = props;

  const s = useFormatMessage();
  const dispatchers = useDispatchers();
  const query = useQuery();
  const [name, nameInputProps] = useInputValue('');
  const [country, setCountry] = React.useState('');
  const [occupation, setOccupation] = React.useState(occupationOptions[0].value);
  const [email, emailInputProps] = useInputValue('');
  const [password, passwordInputProps] = useInputValue('');
  const [passwordConfirmation, passwordConfirmationInputProps] = useInputValue('');
  const passwordConfirmationInputRef = React.useRef<HTMLInputElement | null>(null);
  const passwordConfirmationInput = passwordConfirmationInputRef.current;
  const createUser = useCreateUserMutation();
  const createSession = useCreateSessionMutation();
  const signupTask = useAsyncTask(async () => {
    invariant(country, 'Expected "country"');
    invariant(occupation, 'Expected "occupation"');

    await createUser({
      input: {
        name,
        country,
        occupation,
        email,
        password,
      },
    });

    const createSessionResponse = await createSession({
      input: {
        email,
        password,
      },
    });

    dispatchers.login(createSessionResponse.createSession.token);
    // const to = (location.state && location.state.from) || '/dashboard/';
    const to = '/dashboard/';
    history.replace(to);
  });

  React.useEffect(() => {
    if (!query.props) {
      return;
    }

    const { requesterCountry } = query.props;

    if (!requesterCountry || !enCountryNames[requesterCountry]) {
      return;
    }

    setCountry(countries.alpha2ToAlpha3(requesterCountry));
  }, [query.props]);

  const onSignupFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      if (!country || !occupation) return;

      signupTask();
    },
    [country, occupation, signupTask],
  );

  if (passwordConfirmationInput) {
    if (password !== passwordConfirmation) {
      passwordConfirmationInput.setCustomValidity('Please enter matching passwords.');
    } else {
      passwordConfirmationInput.setCustomValidity('');
    }
  }

  return (
    <>
      <PageHelmet title={s('signup.title')} />
      <DashboardFrame>
        <Grid
          container
          alignItems="stretch"
          justify="center"
          style={{
            flexGrow: 1,
            backgroundColor: appData.colors.background,
            overflow: 'hidden',
            overflowY: 'auto',
          }}
        >
          <Hidden smDown>
            <Grid
              item
              md={5}
              style={{
                padding: 32,
                color: '#ffffff',
                placeContent: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" gutterBottom>
                {s('signup.welcome')}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {s('signup.freeAccount')}
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              placeItems: 'center',
              padding: 32,
              backgroundColor: '#ffffff',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                placeItems: 'center',
                width: '100%',
                maxWidth: 380,
              }}
            >
              <Logo />
              <div style={{ height: 24 }} />
              <form
                onSubmit={onSignupFormSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <TextField
                  variant="outlined"
                  label={s('signup.fullNameLabel')}
                  name="name"
                  autoComplete="name"
                  required
                  {...nameInputProps}
                />
                <div style={{ height: 16 }} />
                <Select
                  label={s('signup.countryLabel')}
                  required
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                >
                  <option value="" />
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {occupationOptions.length > 1 && (
                  <>
                    <div style={{ height: 16 }} />
                    <Select
                      label={s('signup.occupationLabel')}
                      required
                      value={occupation}
                      onChange={(event) => setOccupation(event.target.value)}
                    >
                      <option value="" />
                      {occupationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </>
                )}
                <div style={{ height: 16 }} />
                <TextField
                  variant="outlined"
                  label={s('signup.emailLabel')}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  {...emailInputProps}
                />
                <div style={{ height: 16 }} />
                <TextField
                  variant="outlined"
                  label={s('signup.passwordLabel')}
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  {...passwordInputProps}
                />
                <div style={{ height: 16 }} />
                <TextField
                  variant="outlined"
                  inputRef={passwordConfirmationInputRef}
                  label={s('signup.confirmPasswordLabel')}
                  type="password"
                  autoComplete="new-password"
                  required
                  {...passwordConfirmationInputProps}
                />
                {!appData.noLegalities && (
                  <>
                    <div style={{ height: 16 }} />
                    <FormControlLabel
                      control={<Checkbox required value="eulaChecked" color="primary" />}
                      label={s('signup.eulaCheckLabel', {
                        eulaLink: (
                          <Link to="/eula" target="_blank">
                            {s('signup.eula')}
                          </Link>
                        ),
                      })}
                    />
                    <div style={{ height: 16 }} />
                    <Typography variant="body2">
                      {s('signup.privacyAndTosLabel', {
                        tosLink: (
                          <Link to="/tos" target="_blank">
                            {s('signup.tos')}
                          </Link>
                        ),
                        privacyLink: (
                          <Link to="/privacy" target="_blank">
                            {s('signup.privacy')}
                          </Link>
                        ),
                      })}
                    </Typography>
                  </>
                )}
                <div style={{ height: 16 }} />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ color: '#ffffff', fontWeight: 800 }}
                >
                  {s('signup.submit')}
                </Button>
              </form>
              <div style={{ height: 48 }} />
              <div style={{ textAlign: 'center' }}>
                <Typography>Already have an account?</Typography>
                <Typography>
                  <Link
                    to={{
                      pathname: '/dashboard/login',
                      state: { from: location.state && location.state.from },
                    }}
                  >
                    {s('signup.login')}
                  </Link>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </DashboardFrame>
    </>
  );
}
