// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import invariant from 'invariant';
import { Grid, TextField, Tooltip } from '@material-ui/core';
import countries from 'i18n-iso-countries';
import enCountries from 'i18n-iso-countries/langs/en.json';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useAsyncTask from '../useAsyncTask';
import AlertDialog from '../AlertDialog';
import { graphql, createQuery, createMutation } from '../../api';
import occupationOptions from '../occupationOptions';
import Select from '../Select2';
import useInputValue from '../useInputValue';
import { useDispatchers } from '../../store';
import LoadingView from '../LoadingView';
import ViewPageHeader from '../ViewPageHeader';
import PresentableAvatarInput from '../PresentableAvatarInput';

import { type ProfilePageQuery } from './__generated__/ProfilePageQuery.graphql';
import { type ProfilePageUpdateUserMutation } from './__generated__/ProfilePageUpdateUserMutation.graphql';
import NewPasswordDialog from './NewPasswordDialog';

export const useUpdateUserMutation = createMutation<ProfilePageUpdateUserMutation>(graphql`
  mutation ProfilePageUpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        name
        country
        occupation
        email
        image {
          id
          width
          height
          aspectRatio
          url
        }
      }
    }
  }
`);

countries.registerLocale(enCountries);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(0.5),
  },
}));

const enCountryNames = countries.getNames('en');
const countryOptions = Object.keys(enCountryNames).map((key) => ({
  value: countries.alpha2ToAlpha3(key),
  label: enCountryNames[key],
}));

const useQuery = createQuery<ProfilePageQuery>(graphql`
  query ProfilePageQuery {
    currentSession {
      user {
        ...PresentableAvatarInput_presentable
        id
        name
        country
        occupation
        email
        image {
          id
        }
      }
    }
  }
`);

export default createDashboardPage<any>(function ProfilePage() {
  const query = useQuery();
  const user = query.props?.currentSession?.user;
  const classes = useStyles();
  const dispatchers = useDispatchers();
  const [photoFile, setPhotoFile] = React.useState(null);
  const [discardDialogOpen, setDiscardDialogOpen] = React.useState(false);
  const [country, setCountry] = React.useState('');
  const [occupation, setOccupation] = React.useState('');
  const [name, nameInputProps, setName] = useInputValue('');
  const [email, emailInputProps, setEmail] = useInputValue('');
  const updateUser = useUpdateUserMutation();
  const updateUserTask = useAsyncTask(async () => {
    invariant(user, 'Expected "user"');
    invariant(country, 'Expected "country"');
    invariant(occupation, 'Expected "occupation"');
    await updateUser({
      input: {
        id: user.id,
        image: photoFile ?? undefined,
        name,
        email,
        country,
        occupation,
      },
    });
  });
  const updateUserPasswordTask = useAsyncTask(async (password) => {
    invariant(user, 'Expected "user"');
    updateUser({
      input: {
        id: user.id,
        password,
      },
    });
  });

  const onLogoutClick = React.useCallback(() => dispatchers.logout(), [dispatchers]);

  const onDiscardDialogOpen = React.useCallback(() => setDiscardDialogOpen(true), []);
  const onDiscardDialogClose = React.useCallback(() => setDiscardDialogOpen(false), []);

  const resetState = React.useCallback(() => {
    invariant(user, 'Expected "user"');
    setPhotoFile(null);
    setCountry(user.country);
    setOccupation(user.occupation);
    setName(user.name);
    setEmail(user.email);
  }, [user, setName, setEmail]);

  const onSaveClick = React.useCallback(
    (event) => {
      event.preventDefault();
      updateUserTask();
    },
    [updateUserTask],
  );

  const onSavePassword = React.useCallback(
    (password: string) => {
      updateUserPasswordTask(password);
    },
    [updateUserPasswordTask],
  );

  const onDiscardConfirm = React.useCallback(() => {
    resetState();
    onDiscardDialogClose();
  }, [onDiscardDialogClose, resetState]);

  const changesApplied = React.useCallback(() => {
    invariant(user, 'Expected "user"');
    return (
      photoFile ||
      name !== user.name ||
      email !== user.email ||
      (country && country !== user.country) ||
      (occupation && occupation !== user.occupation)
    );
  }, [country, email, name, occupation, photoFile, user]);

  React.useEffect(() => {
    if (!user) return;
    resetState();
  }, [resetState, user]);

  if (!query.props) {
    return <LoadingView />;
  }

  invariant(user, 'Expected "user"');

  return (
    <>
      <PageHelmet title="Profile" />
      <ViewPageHeader
        titleContent="Profile"
        actions={[
          ...(changesApplied()
            ? [
                {
                  key: 'edit',
                  type: 'callback',
                  label: 'Discard',
                  callback: onDiscardDialogOpen,
                },
              ]
            : []),
          {
            key: 'logout',
            type: 'callback',
            label: 'Logout',
            callback: onLogoutClick,
            primary: true,
          },
        ]}
      />
      <div className={classes.root}>
        <DashboardPageBody>
          <form
            onSubmit={onSaveClick}
            style={{
              background: 'white',
              padding: 36,
              borderRadius: 4,
            }}
          >
            <Grid container direction="row" alignContent="center">
              <Grid item xs={12} md={4} style={{ display: 'flex', placeContent: 'center' }}>
                {!user.image ? (
                  <Tooltip open title="Add a logo to complete your profile" placement="left">
                    <div>
                      <PresentableAvatarInput
                        presentable={user}
                        imageFile={photoFile}
                        onImageFileChange={setPhotoFile}
                        avatarStyle={{ width: 140, height: 140 }}
                      />
                    </div>
                  </Tooltip>
                ) : (
                  <PresentableAvatarInput
                    presentable={user}
                    imageFile={photoFile}
                    onImageFileChange={setPhotoFile}
                    avatarStyle={{ width: 140, height: 140 }}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={8}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    variant="outlined"
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    error={false}
                    {...nameInputProps}
                  />
                  <div style={{ flexBasis: 16 }} />
                  <TextField
                    variant="outlined"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    error={false}
                    {...emailInputProps}
                  />
                  <div style={{ flexBasis: 16 }} />
                  <Select
                    label="Country"
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
                      <div style={{ flexBasis: 16 }} />
                      <Select
                        label="Occupation"
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
                </div>
              </Grid>
            </Grid>
            <div style={{ height: 32 }} />
            <div style={{ textAlign: 'right' }}>
              <AlertDialog
                message="All changes will be lost."
                onClose={onDiscardDialogClose}
                onConfirm={onDiscardConfirm}
                open={discardDialogOpen}
              />
              <NewPasswordDialog className={classes.button} save={onSavePassword} />
              <Button
                size="small"
                variant="contained"
                type="submit"
                disabled={!changesApplied()}
                className={classes.button}
                style={{ color: '#fff' }}
                color="primary"
              >
                Save
              </Button>
            </div>
          </form>
        </DashboardPageBody>
      </div>
    </>
  );
});
