// @flow

import * as React from 'react';
import { View } from 'react-native';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { type FieldComponentProps } from '.';
import styles from './styles';

export default function ImageFieldComponent(props: FieldComponentProps) {
  const { data, response } = props;
  const { title, required } = data;

  return (
    <View style={styles.field}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {title}
        {required ? '*' : ''}
      </Typography>
      <Button variant="text" autoCapitalize="none">
        {response ? (
          <img style={{ width: 96, height: 96 }} alt="response" src={response} />
        ) : (
          <Typography variant="body1" color="primary">
            Select an image
          </Typography>
        )}
      </Button>
    </View>
  );
}
