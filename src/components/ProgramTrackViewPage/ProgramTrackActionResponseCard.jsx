// @flow

import * as React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { FormattedDate } from 'react-intl';

import { graphql, createFragment } from '../../api';

import { type ProgramTrackActionResponseCard_programTrackActionResponse as ProgramTrackActionResponse } from './__generated__/ProgramTrackActionResponseCard_programTrackActionResponse.graphql';

const useFragment = createFragment<ProgramTrackActionResponse>(graphql`
  fragment ProgramTrackActionResponseCard_programTrackActionResponse on ProgramTrackActionResponse {
    id
    createdAt
    action {
      id
      name
    }
    response
  }
`);

type Props = {
  programTrackActionResponse: mixed,
  selected: boolean,
  onClick: () => void,
  body?: React.Node | null,
};

export default function ProgramTrackActionResponseCard(props: Props) {
  const { selected, onClick, body } = props;

  const programTrackActionResponse = useFragment(props.programTrackActionResponse);

  return (
    <Card raised={selected}>
      <CardActionArea>
        <CardContent onClick={onClick}>
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: 600, lineHeight: '1.3em' }}>
              {programTrackActionResponse.action.name}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography variant="body1">
              <FormattedDate
                value={programTrackActionResponse.createdAt}
                year="numeric"
                month="long"
                day="2-digit"
              />
            </Typography>
          </div>
          {body && <Typography variant="body2">{body}</Typography>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
