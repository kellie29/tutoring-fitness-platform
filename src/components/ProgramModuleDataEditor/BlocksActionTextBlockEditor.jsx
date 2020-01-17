// @flow

import * as React from 'react';
import ShortTextIcon from '@material-ui/icons/ShortText';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import {
  TextField,
  IconButton,
  Snackbar,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import copy from 'clipboard-copy';

import { type BlocksActionTextBlock } from '../../helpers/programModuleData';
import RichTextEditor, { createValueFromString } from '../RichTextEditor';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';

type Props = {
  data: BlocksActionTextBlock | null,
  onChange: (data: BlocksActionTextBlock | null) => void,
};

export default function BlocksActionTextBlockEditor(props: Props) {
  const { data, onChange } = props;
  const [uploadImgURL, setuploadImgUrl] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);

  const [value, setValue] = React.useState(
    createValueFromString(data ? data.content : '', 'markdown'),
  );
  const onDrop = (picture) => {
    if (picture.length > 0) {
      const reader = new FileReader();
      // eslint-disable-next-line func-names
      reader.onloadend = function() {
        setUploading(true);
        axios
          .post(
            'http://localhost:8000/uploadimage',
            { data: reader.result },
            {
              headers: { 'X-Requested-With': 'XMLHttpRequest' },
            },
          )
          .then((response) => {
            setuploadImgUrl(response.data);
            copy(response.data);
            setUploading(false);
            setOpen(true);
          });
      };
      reader.readAsDataURL(picture[0]);
    }
  };

  const onValueChange = React.useCallback(
    (nextValue) => {
      setValue(nextValue);
      onChange({
        ...data,
        content: nextValue.toString('markdown'),
      });
    },
    [data, onChange],
  );

  if (!data) {
    onChange({ type: 'text', content: '' });
    return null;
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BlocksActionBlockEditor icon={<ShortTextIcon />}>
      <RichTextEditor value={value} onChange={onValueChange} />
      <ImageUploader
        buttonText="Create image link"
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={10485760}
        label="Max file size: 10mb"
      />
      <TextField disabled id="standard-disabled" label="ImageURL" value={uploadImgURL} />
      <Dialog open={uploading} fullWidth>
        <DialogContent>
          <DialogContentText gutterBottom>Image Uploading...</DialogContentText>
          <LinearProgress />
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        message={
          <span id="message-id">
            Successfully created image url and copied to clipboard, you can paste this into the text
            editor
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </BlocksActionBlockEditor>
  );
}
