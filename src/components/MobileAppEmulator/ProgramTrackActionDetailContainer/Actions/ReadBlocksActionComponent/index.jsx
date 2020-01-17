// @flow
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Typography } from '@material-ui/core';

import { contentWidth } from '../../../IphoneFrame';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
  },
  video: {
    marginVertical: 8,
  },
});

type Props = {
  action: any,
  style?: any,
};

export default function ReadBlocksActionComponent(props: Props) {
  const { action, style = {}, ...restProps } = props;

  const width = contentWidth - 32;

  const components = [];
  action.blocks.forEach((block, index: number) => {
    switch (block.type) {
      case 'text': {
        components.push(
          <Typography key={index} variant="body2" align="justify">
            {block.content}
          </Typography>,
        );
        break;
      }
      default:
      case 'youTubeVideo': {
        const height = (width * 9) / 16;
        components.push(
          <iframe
            key={index}
            style={{ marginTop: 16, marginBottom: 16, borderWidth: 1 }}
            title="YouTube"
            width={width.toString()}
            height={height.toString()}
            src={`https://www.youtube.com/embed/${block.videoId}`}
          ></iframe>,
        );
        break;
      }
    }
  });
  return (
    <ScrollView
      style={[styles.container, style]}
      // $FlowFixMe
      {...restProps}
    >
      {components}
    </ScrollView>
  );
}
