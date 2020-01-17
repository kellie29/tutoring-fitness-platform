// @flow

import * as React from 'react';
import { View } from 'react-native';

import LoadingView from '../../../LoadingView';
import { graphql, createQuery } from '../../../../api';

import BlocksActionComponent from './BlocksActionComponent';
import ReadActionComponent from './ReadActionComponent';
import ReadBlocksActionComponent from './ReadBlocksActionComponent';
import MultiStepActionComponent from './MultiStepActionComponent';
import FillFormActionComponent from './FillFormActionComponent';
import { type ReferenceActionComponentQuery } from './__generated__/ReferenceActionComponentQuery.graphql';

const useQuery = createQuery<ReferenceActionComponentQuery>(graphql`
  query ReferenceActionComponentQuery($moduleId: ID) {
    programModule(id: $moduleId) {
      type
      data
    }
  }
`);

type Props = {
  action: any,
  style?: any,
  response?: any,
};

export default function ReferenceActionComponent(props: Props) {
  const { style = {}, action: referenceAction, ...restProps } = props;

  const query = useQuery({
    moduleId: referenceAction.actionModuleId,
  });
  const action = query.props?.programModule?.data?.action;

  if (!query.props) {
    return <LoadingView />;
  }

  let content = null;
  if (action) {
    // $FlowFixMe
    const contentProps = { style, action, ...restProps };
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
      default: {
        throw new Error(`Invalid action type ${action.type}`);
      }
    }
  } else {
    content = <View style={style} />;
  }

  return content;
}
