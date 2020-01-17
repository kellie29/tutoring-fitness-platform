// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link, type ContextRouter } from 'react-router-dom';
import { Paper, Hidden } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import Logo from '../Logo';
import useAsyncTask from '../useAsyncTask';
import { useDispatchers } from '../../store';
import DashboardFrame from '../DashboardFrame';
import useFormatMessage from '../useFormatMessage';
import appData from '../../data';

import { type LoginPageCreateSessionMutation } from './__generated__/LoginPageCreateSessionMutation.graphql';
import loginImage from './loginImage.jpg';

const useMutation = createMutation<LoginPageCreateSessionMutation>(graphql`
  mutation LoginPageCreateSessionMutation($input: CreateSessionInput!) {
    createSession(input: $input) {
      token
      session {
        id
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function LoginPage(props: Props) {
  const { history, location } = props;

  const s = useFormatMessage();
  const dispatchers = useDispatchers();
  const [email, emailInputProps] = useInputValue('');
  const [password, passwordInputProps] = useInputValue('');
  const createSession = useMutation();
  const loginTask = useAsyncTask(async () => {
    const createSessionResponse = await createSession({
      input: {
        email,
        password,
      },
    });

    dispatchers.login(createSessionResponse.createSession.token);
    // const to = (location.state && location.state.from.pathname) || '/dashboard/';
    const to = '/dashboard/';
    history.replace(to);
  });

  const onLoginFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      loginTask();
    },
    [loginTask],
  );

  return (
    <>
      <PageHelmet title={s('login.title')} />
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
                backgroundImage: `url('${loginImage}')`,
                backgroundSize: 'cover',
              }}
            />
          </Hidden>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              placeItems: 'center',
            }}
          >
            <Logo color="white" />
            <Paper
              style={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                placeItems: 'center',
                marginTop: 32,
                padding: '32px 32px',
                width: '100%',
                maxWidth: 380,
              }}
            >
              <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                {s('login.welcomeBack')}
              </Typography>
              {appData.allowSignup && (
                <Typography variant="subtitle1" gutterBottom>
                  {s('login.areYouNew', {
                    signupLink: (
                      <Link
                        to={{
                          pathname: '/dashboard/signup',
                          state: { from: location.state && location.state.from },
                        }}
                      >
                        {s('login.signup')}
                      </Link>
                    ),
                  })}
                </Typography>
              )}
              <div style={{ flexBasis: 48 }} />
              <form
                onSubmit={onLoginFormSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder={s('login.emailLabel')}
                  autoComplete="email"
                  {...emailInputProps}
                  // InputProps={{
                  //   style: {
                  //     color: 'white',
                  //   },
                  // }}
                  // FieldsetProps={{
                  //   style: {
                  //     borderColor: 'red',
                  //     borderStyle: 'solid',
                  //     borderWidth: '1',
                  //   },
                  // }}
                />
                <div style={{ height: 16 }} />
                <TextField
                  variant="outlined"
                  placeholder={s('login.passwordLabel')}
                  type="password"
                  autoComplete="current-password"
                  {...passwordInputProps}
                  // InputProps={{
                  //   style: {
                  //     color: 'white',
                  //     borderColor: 'white',
                  //   },
                  // }}
                />
                <div style={{ height: 16 }} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    placeContent: 'center',
                    placeItems: 'center',
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    {s('login.forgotPassword', {
                      resetPasswordLink: (
                        <Link
                          to={{
                            pathname: '/dashboard/request-password-reset',
                            state: { from: location.state && location.state.from },
                          }}
                        >
                          {s('login.resetPassword')}
                        </Link>
                      ),
                    })}
                  </Typography>
                </div>
                <div style={{ height: 16 }} />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ color: '#ffffff', fontWeight: 800 }}
                >
                  {s('login.submit')}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </DashboardFrame>
    </>
  );
}
