// @flow

import * as React from 'react';
import { View } from 'react-native';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { type FieldComponentProps } from '.';
import styles from './styles';

export default function ScaleFieldComponent(props: FieldComponentProps) {
  const { data, response } = props;
  const { title, min, max, step, required } = data;

  const [currentValue, setCurrentValue] = React.useState(Number(response || min));

  const handleChange = (event, value) => {
    setCurrentValue(value);
  };

  return (
    <View style={styles.field}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {title}
        {required ? '*' : ''}
      </Typography>
      <View style={styles.scaleLabelsContainer}>
        <Typography variant="body1" align="left">
          {min}
        </Typography>
        <Typography variant="body1" color="primary">
          {currentValue}
        </Typography>
        <Typography variant="body1" align="right">
          {max}
        </Typography>
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        <Slider
          min={Number(min)}
          max={Number(max)}
          step={Number(step)}
          onChange={handleChange}
          value={currentValue}
        />
      </View>
    </View>
  );
}
