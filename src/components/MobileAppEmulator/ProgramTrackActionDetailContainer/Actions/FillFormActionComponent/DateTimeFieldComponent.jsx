// @flow

import * as React from 'react';
import { View, TextInput } from 'react-native';
import { format } from 'date-fns';
import { DateTime, Duration } from 'luxon';
import Typography from '@material-ui/core/Typography';

import { type FieldComponentProps } from '.';
import styles from './styles';

type Props = {
  ...$Exact<FieldComponentProps>,
  mode?: 'date' | 'time' | 'datetime',
};

export default function DateTimeFieldComponent(props: Props) {
  const { data, mode = 'datetime', response } = props;
  const { title, required } = data;

  let selectedDate = DateTime.local();
  if (response) {
    if (mode === 'time') {
      const currentTimeAsDuration = Duration.fromISO(response);
      selectedDate = new DateTime();
      selectedDate.hour = currentTimeAsDuration.hours;
      selectedDate.minute = currentTimeAsDuration.minutes;
    } else {
      const currentDateAsDateTime = DateTime.fromISO(response);
      selectedDate = currentDateAsDateTime.toJSDate();
    }
  }

  let formatString: string;
  if (mode === 'date') {
    formatString = 'DD/MM/YYYY';
  } else if (mode === 'time') {
    formatString = 'HH:mm';
  } else {
    formatString = 'DD/MM/YYYY, HH:mm';
  }

  const formattedSelectedDate = format(selectedDate, formatString);

  return (
    <View style={styles.field}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {title}
        {required ? '*' : ''}
      </Typography>
      <TextInput editable={false} value={formattedSelectedDate} style={styles.inputAsText} />
    </View>
  );
}
