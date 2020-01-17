// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { graphql, createFragment } from '../../api';
import ListPaper from '../ListPaper';
import { type ProgramModuleDataAction } from '../../helpers/programModuleData';

import { type ProgramTrackActionResponseRow_programTrackActionResponse as ProgramTrackActionResponse } from './__generated__/ProgramTrackActionResponseRow_programTrackActionResponse.graphql';

const useFragment = createFragment<ProgramTrackActionResponse>(graphql`
  fragment ProgramTrackActionResponseRow_programTrackActionResponse on ProgramTrackActionResponse {
    id
    response
    createdAt
    action {
      data
    }
  }
`);

type Props = {
  programTrackActionResponse: mixed,
};

export default function ProgramTrackActionResponseRow(props: Props) {
  const programTrackActionResponse = useFragment(props.programTrackActionResponse);

  const action: ProgramModuleDataAction = programTrackActionResponse.action.data;

  return (
    <ListPaper>
      {(() => {
        switch (action.type) {
          case 'blocks': {
            const { blocks } = action;

            return blocks.map((block, i) => {
              const response = programTrackActionResponse.response[i];

              switch (block.type) {
                case 'textField': {
                  return (
                    <div>
                      <Typography variant="h6">{block.title}</Typography>
                      <Typography variant="body1">{response}</Typography>
                    </div>
                  );
                }
                case 'multipleChoiceField': {
                  return (
                    <div>
                      <Typography variant="h6">{block.title}</Typography>
                      <Typography variant="body1">{block.choices[response].title}</Typography>
                    </div>
                  );
                }
                case 'imageField': {
                  return (
                    <div>
                      <Typography variant="h6">{block.title}</Typography>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={`data:image/png;base64,${response}`} />
                    </div>
                  );
                }
                default: {
                  return block.type;
                }
              }
            });
          }
          default: {
            return action.type;
          }
        }
      })()}
      Action Response at {programTrackActionResponse.createdAt}
    </ListPaper>
  );
}
