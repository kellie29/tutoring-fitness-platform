// @flow

import * as React from 'react';
import { View, TextInput } from 'react-native';
import Typography from '@material-ui/core/Typography';

import { type FieldComponentProps } from '.';
import styles from './styles';

export default function TextFieldComponent(props: FieldComponentProps) {
  const { data, response } = props;
  const { title, required } = data;

  return (
    <View style={styles.field}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {title}
        {required ? '*' : ''}
      </Typography>
      <TextInput style={styles.inputAsText} selectionColor="black" value={response || ''} />
    </View>
  );
}
