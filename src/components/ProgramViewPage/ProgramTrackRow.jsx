// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedDate } from 'react-intl';

import { graphql, createFragment, createMutation } from '../../api';
import ListPaper from '../ListPaper';
import useAsyncTask from '../useAsyncTask';
import PresentableTag from '../PresentableTag';

import { type ProgramTrackRow_programTrack as ProgramTrack } from './__generated__/ProgramTrackRow_programTrack.graphql';
import { type ProgramTrackRowDeleteProgramTrackMutation } from './__generated__/ProgramTrackRowDeleteProgramTrackMutation.graphql';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

const useMutation = createMutation<ProgramTrackRowDeleteProgramTrackMutation>(graphql`
  mutation ProgramTrackRowDeleteProgramTrackMutation($input: DeleteProgramTrackInput!) {
    deleteProgramTrack(input: $input) {
      programTrack {
        id
      }
    }
  }
`);

const useFragment = createFragment<ProgramTrack>(graphql`
  fragment ProgramTrackRow_programTrack on ProgramTrack {
    id
    startDate
    user {
      ...PresentableTag_presentable
    }
  }
`);

type Props = {
  noUserInfo?: boolean,
  programTrack: mixed,
};

export default function ProgramTrackRow(props: Props) {
  const { noUserInfo } = props;

  const programTrack = useFragment(props.programTrack);
  const classes = useStyles();
  const deleteProgramTrack = useMutation();
  const deleteProgramTrackTask = useAsyncTask(async () => {
    await deleteProgramTrack({
      input: {
        id: programTrack.id,
      },
    });
  });

  const onDeleteProgramTrackClick = React.useCallback(() => {
    deleteProgramTrackTask();
  }, [deleteProgramTrackTask]);

  return (
    <ListPaper>
      {!noUserInfo && programTrack.user && <PresentableTag presentable={programTrack.user} />}
      <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1, alignSelf: 'flex-end' }}>
          <Typography variant="body2" style={{ fontWeight: 600 }}>
            Start Date:{' '}
            <FormattedDate
              value={programTrack.startDate}
              year="numeric"
              month="long"
              day="2-digit"
              hour="numeric"
              minute="numeric"
            />
          </Typography>
        </div>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          className={classes.button}
          onClick={onDeleteProgramTrackClick}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          className={classes.button}
          component={Link}
          to={`/dashboard/tracks/view/${programTrack.id}`}
        >
          View
        </Button>
      </div>
    </ListPaper>
  );
}
