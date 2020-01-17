// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';

import ImageFieldComponent from './ImageFieldComponent';
import TextFieldComponent from './TextFieldComponent';
import DateTimeFieldComponent from './DateTimeFieldComponent';
import MultipleChoiceFieldComponent from './MultipleChoiceFieldComponent';
import ScaleFieldComponent from './ScaleFieldComponent';

export type FieldComponentProps = {
  data: any,
  index: number,
  response?: string,
};

type Props = {
  action: any,
  style?: any,
  response?: any | null,
};

export default function FillFormActionComponent(props: Props) {
  const { action, style = {}, response, ...restProps } = props;
  const { fields } = action;

  const actionComponents: Array<React$Element<any>> = [];
  fields.forEach((field: any, index: number) => {
    const fieldProps: FieldComponentProps = {
      key: actionComponents.length,
      data: field,
      index,
    };

    if (response) {
      fieldProps.response = response.fields[index];
    }

    switch (field.type) {
      case 'image': {
        actionComponents.push(<ImageFieldComponent {...fieldProps} />);
        break;
      }
      case 'text': {
        actionComponents.push(<TextFieldComponent {...fieldProps} />);
        break;
      }
      case 'multipleChoice': {
        actionComponents.push(<MultipleChoiceFieldComponent {...fieldProps} />);
        break;
      }
      case 'dateTime' || 'date' || 'time': {
        actionComponents.push(
          <DateTimeFieldComponent {...fieldProps} mode={field.type.toLowerCase()} />,
        );
        break;
      }
      case 'scale': {
        actionComponents.push(<ScaleFieldComponent {...fieldProps} />);
        break;
      }
      default: {
        throw new Error(`Invalid field type ${field.type}`);
      }
    }
  });

  return (
    <ScrollView
      style={style}
      // $FlowFixMe
      {...restProps}
    >
      {actionComponents}
    </ScrollView>
  );
}
