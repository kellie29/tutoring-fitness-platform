// @flow
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';

import useInputValue from '../useInputValue';
import AlertDialog from '../AlertDialog';

type Props = {
  save: (password: string) => void,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export default function NewPasswordDialog(props: Props) {
  const { save } = props;
  const [password, passwordInputProps, setPassword] = useInputValue('');
  const [
    passwordConfirmation,
    passwordConfirmationInputProps,
    setPasswordConfirmation,
  ] = useInputValue('');
  const classes = useStyles();

  const [passwordConfirmationDialogOpen, setPasswordConfirmationDialogOpen] = React.useState(false);
  const onConfirmPassword = () => setPasswordConfirmationDialogOpen(true);
  const onCancelPassword = () => setPasswordConfirmationDialogOpen(false);

  const [passwordDialogOpen, setPasswordDialogOpen] = React.useState(false);
  const onChangePasswordOpen = () => setPasswordDialogOpen(true);

  const resetInputs = () => {
    setPassword('');
    setPasswordConfirmation('');
  };

  const onChangePasswordClose = () => {
    setPasswordDialogOpen(false);
    resetInputs();
  };

  const onChangePassword = () => {
    save(password);
    setPasswordDialogOpen(false);
    setPasswordConfirmationDialogOpen(false);
    resetInputs();
  };

  return (
    <>
      <Button
        className={classes.button}
        size="small"
        variant="outlined"
        color="secondary"
        onClick={onChangePasswordOpen}
      >
        Change Password
      </Button>
      <Dialog
        open={passwordDialogOpen}
        onClose={onChangePasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="New password"
            type="password"
            fullWidth
            error={password !== passwordConfirmationInputProps}
            {...passwordInputProps}
          />
          <TextField
            margin="dense"
            id="validate-password"
            label="Confirm new password"
            type="password"
            fullWidth
            error={password !== passwordConfirmation}
            {...passwordConfirmationInputProps}
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            size="small"
            onClick={onChangePasswordClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            size="small"
            onClick={onConfirmPassword}
            color="primary"
            disabled={!password || password !== passwordConfirmation}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        message="You are about to change your password."
        onClose={onCancelPassword}
        onConfirm={onChangePassword}
        open={passwordConfirmationDialogOpen}
      />
    </>
  );
}
