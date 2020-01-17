// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import BlocksActionComponent from './Actions/BlocksActionComponent';
import ReadActionComponent from './Actions/ReadActionComponent';
import ReadBlocksActionComponent from './Actions/ReadBlocksActionComponent';
import MultiStepActionComponent from './Actions/MultiStepActionComponent';
import FillFormActionComponent from './Actions/FillFormActionComponent';
import ReferenceActionComponent from './Actions/ReferenceActionComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lastResponseText: {
    fontSize: 12,
    marginVertical: 4,
    textAlign: 'center',
  },
});

type Props = {
  headerView?: any,
  action: any,
  response?: any | null,
};

export default function ProgramTrackActionDetailContainer(props: Props) {
  const { headerView = undefined, action, response } = props;

  let content;
  const contentProps = {
    action,
    pointerEvents: 'box-only',
    response,
  };

  switch (action.type) {
    case 'blocks': {
      content = <BlocksActionComponent {...contentProps} />;
      break;
    }
    case 'read': {
      content = <ReadActionComponent {...contentProps} />;
      break;
    }
    case 'readBlocks': {
      content = <ReadBlocksActionComponent {...contentProps} />;
      break;
    }
    case 'fillForm': {
      content = <FillFormActionComponent {...contentProps} />;
      break;
    }
    case 'multiStep': {
      content = <MultiStepActionComponent {...contentProps} />;
      break;
    }
    case 'reference': {
      content = <ReferenceActionComponent {...contentProps} />;
      break;
    }
    default: {
      throw new Error(`Invalid action type ${action.type}`);
    }
  }

  return (
    <View style={styles.container}>
      {headerView}
      {content}
    </View>
  );
}
