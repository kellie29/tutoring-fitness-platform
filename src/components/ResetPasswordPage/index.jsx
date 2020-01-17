// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { type ContextRouter } from 'react-router-dom';
import { Paper, Hidden } from '@material-ui/core';
import invariant from 'invariant';

import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import { graphql, createMutation, useCreateSessionMutation } from '../../api';
import Logo from '../Logo';
import useAsyncTask from '../useAsyncTask';
import { useDispatchers } from '../../store';
import DashboardFrame from '../DashboardFrame';
import loginImage from '../LoginPage/loginImage.jpg';

import { type ResetPasswordPageResetPasswordMutation } from './__generated__/ResetPasswordPageResetPasswordMutation.graphql';

const useMutation = createMutation<ResetPasswordPageResetPasswordMutation>(graphql`
  mutation ResetPasswordPageResetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      user {
        id
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function ResetPasswordPage(props: Props) {
  const { history, location } = props;

  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const verificationCode = searchParams.get('verificationCode');
  const [password, passwordInputProps] = useInputValue('');
  const [passwordConfirmation, passwordConfirmationInputProps] = useInputValue('');
  const passwordConfirmationInputRef = React.useRef<HTMLInputElement | null>(null);
  const passwordConfirmationInput = passwordConfirmationInputRef.current;
  const dispatchers = useDispatchers();
  const resetPassword = useMutation();
  const createSession = useCreateSessionMutation();
  const resetPasswordTask = useAsyncTask(async () => {
    invariant(email, 'Expected "email"');
    invariant(verificationCode, 'Expected "verificationCode"');
    await resetPassword({
      input: {
        email,
        verificationCode,
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

  const onLoginFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      resetPasswordTask();
    },
    [resetPasswordTask],
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
      <PageHelmet title="Reset Password" />
      <DashboardFrame>
        <Grid
          container
          alignItems="stretch"
          justify="center"
          style={{
            flexGrow: 1,
            backgroundColor: '#1A253D',
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
              <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                Reset Password
              </Typography>
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
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  disabled
                />
                <div style={{ height: 16 }} />
                <TextField
                  variant="outlined"
                  label="Password"
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
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  required
                  {...passwordConfirmationInputProps}
                />
                <div style={{ height: 16 }} />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ color: '#ffffff', fontWeight: 800 }}
                >
                  Reset Password
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </DashboardFrame>
    </>
  );
}
