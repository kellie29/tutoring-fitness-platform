// @flow

import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Typography from '@material-ui/core/Typography';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});

type Props = {
  action: any,
  style?: any,
};

export default function ReadActionComponent(props: Props) {
  const { action, style = {}, ...restProps } = props;
  const { content } = action;

  return (
    <ScrollView
      style={[style, styles.container]}
      // $FlowFixMe
      {...restProps}
    >
      <Typography variant="body2" key={0}>
        {content}
      </Typography>
    </ScrollView>
  );
}
