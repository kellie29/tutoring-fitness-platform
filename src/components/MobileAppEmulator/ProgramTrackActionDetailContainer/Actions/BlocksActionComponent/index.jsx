// @flow
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { contentWidth } from '../../../IphoneFrame';
import ImageFieldComponent from '../FillFormActionComponent/ImageFieldComponent';
import TextFieldComponent from '../FillFormActionComponent/TextFieldComponent';
import DateTimeFieldComponent from '../FillFormActionComponent/DateTimeFieldComponent';
import MultipleChoiceFieldComponent from '../FillFormActionComponent/MultipleChoiceFieldComponent';
import ScaleFieldComponent from '../FillFormActionComponent/ScaleFieldComponent';
import NumberFieldComponent from '../FillFormActionComponent/NumberFieldComponent';
import { type FieldComponentProps } from '../FillFormActionComponent';
import Markdown from '../../../../Markdown';

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
  response?: any | null,
};

export default function BlocksActionComponent(props: Props) {
  const { action, style = {}, response, ...restProps } = props;

  const width = contentWidth - 32;

  const components = [];
  action.blocks.forEach((block, index: number) => {
    const fieldProps: FieldComponentProps = {
      key: components.length,
      data: block,
      index,
    };

    if (response) {
      fieldProps.response = response.fields[index];
    }

    switch (block.type) {
      case 'text': {
        components.push(<Markdown key={index} markdown={block.content} />);
        break;
      }
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
      case 'imageField': {
        components.push(<ImageFieldComponent {...fieldProps} />);
        break;
      }
      case 'textField': {
        components.push(<TextFieldComponent {...fieldProps} />);
        break;
      }
      case 'multipleChoiceField': {
        components.push(<MultipleChoiceFieldComponent {...fieldProps} />);
        break;
      }
      case 'dateTimeField' || 'dateField' || 'timeField': {
        components.push(
          <DateTimeFieldComponent
            {...fieldProps}
            mode={
              {
                dateTimeField: 'date',
                dateField: 'time',
                timeField: 'datetime',
              }[block.type]
            }
          />,
        );
        break;
      }
      case 'scaleField': {
        components.push(<ScaleFieldComponent {...fieldProps} />);
        break;
      }
      case 'numberField': {
        components.push(<NumberFieldComponent {...fieldProps} />);
        break;
      }
      default: {
        throw new Error(`Invalid field type ${block.type}`);
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
