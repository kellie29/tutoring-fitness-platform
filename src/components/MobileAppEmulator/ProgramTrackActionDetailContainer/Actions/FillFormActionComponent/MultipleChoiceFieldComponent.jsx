// @flow

import * as React from 'react';
import { View } from 'react-native';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import { type FieldComponentProps } from '.';
import styles from './styles';

export default function MultipleChoiceFieldComponent(props: FieldComponentProps) {
  const { data, response } = props;
  const { title, choices, required } = data;

  const [currentValue, setCurrentValue] = React.useState(response);

  const handleChange = (event) => {
    const { value } = event.target;
    setCurrentValue(currentValue === value ? null : value);
  };

  React.useEffect(() => {
    setCurrentValue(response);
  }, [response]);

  return (
    <View style={styles.field}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {title}
        {required ? '*' : ''}
      </Typography>
      <FormControl component="fieldset" style={{ marginLeft: 12, marginRight: 12 }}>
        <RadioGroup aria-label="Gender" name="gender1" value={currentValue} onChange={handleChange}>
          {choices.map((choice, i) => (
            <FormControlLabel
              key={i}
              value={i.toString()}
              control={<Radio color="primary" />}
              label={choice.title}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </View>
  );
}
