// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Paper, Hidden } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import Logo from '../Logo';
import useAsyncTask from '../useAsyncTask';
import DashboardFrame from '../DashboardFrame';
import loginImage from '../LoginPage/loginImage.jpg';
import useAlert from '../useAlert';

import { type RequestPasswordResetPageRequestPasswordResetMutation } from './__generated__/RequestPasswordResetPageRequestPasswordResetMutation.graphql';

const useMutation = createMutation<RequestPasswordResetPageRequestPasswordResetMutation>(graphql`
  mutation RequestPasswordResetPageRequestPasswordResetMutation(
    $input: RequestPasswordResetInput!
  ) {
    requestPasswordReset(input: $input) {
      email
    }
  }
`);

export default function RequestPasswordResetPage() {
  const alert = useAlert();
  const [email, emailInputProps] = useInputValue('');
  const requestPasswordReset = useMutation();
  const requestPasswordResetTask = useAsyncTask(async () => {
    await requestPasswordReset({
      input: {
        email,
      },
    });

    await alert(`Password reset instructions were successfully sent to "${email}".`);
  });

  const onLoginFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      requestPasswordResetTask();
    },
    [requestPasswordResetTask],
  );

  return (
    <>
      <PageHelmet title="Request Password Reset" />
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
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ color: '#ffffff', fontWeight: 800 }}
                >
                  Send Reset Email
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </DashboardFrame>
    </>
  );
}
