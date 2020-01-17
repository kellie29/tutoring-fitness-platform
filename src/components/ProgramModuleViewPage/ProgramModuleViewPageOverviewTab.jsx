// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramModuleViewPageOverviewTabQuery } from './__generated__/ProgramModuleViewPageOverviewTabQuery.graphql';

const useQuery = createQuery<ProgramModuleViewPageOverviewTabQuery>(graphql`
  query ProgramModuleViewPageOverviewTabQuery($programModuleId: ID) {
    programModule(id: $programModuleId) {
      id
      name
      description
      type
      data
    }
  }
`);

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  ...ContextRouter,
};

export default function ProgramModuleViewPageOverviewTab(props: Props) {
  const { match } = props;
  const classes = useStyles();

  const query = useQuery({
    programModuleId: match.params.programModuleId,
  });
  const programModule = query.props?.programModule || null;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programModule) {
    throw new Error('Not found');
  }

  return (
    <MobileAppPreviewView emulatable={{ type: 'programModule', module: programModule }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid item container spacing={3}>
                <Grid item></Grid>
                <Grid item style={{ flexGrow: 1 }}>
                  <Grid item container spacing={3}>
                    <Grid item style={{ flexGrow: 1 }}>
                      <TextField
                        label="Module Name"
                        value={programModule.name || ''}
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid item>
                      <TextField label="Type" value={programModule.type || ''} disabled />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Description"
                      fullWidth
                      value={programModule.description || ''}
                      disabled
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MobileAppPreviewView>
  );
}
