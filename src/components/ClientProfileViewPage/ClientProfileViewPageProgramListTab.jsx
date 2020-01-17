// @flow

import * as React from 'react';
import { Link, type ContextRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import invariant from 'invariant';

import { DashboardPageBody } from '../createDashboardPage';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import ProgramList from '../ProgramList';
import ListPageHeader from '../ListPageHeader';
import useInputValue from '../useInputValue';
import DialogRoute from '../DialogRoute';
import ProgramCreateDialog from '../ProgramCreateDialog';

import { type ClientProfileViewPageProgramListTabQuery } from './__generated__/ClientProfileViewPageProgramListTabQuery.graphql';

const useQuery = createQuery<ClientProfileViewPageProgramListTabQuery>(graphql`
  query ClientProfileViewPageProgramListTabQuery(
    $clientProfileId: ID
    $programFilter: ProgramFilterInput!
  ) {
    ...ProgramList_query @arguments(filter: $programFilter)
    userPrograms: programs(first: 0, filter: $programFilter) {
      edgeCount
    }
    clientProfile(id: $clientProfileId) {
      ...PresentableViewPageHeader_presentable
      id
      name
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function ClientProfileViewPageProgramListTab(props: Props) {
  const { match } = props;
  const { clientProfileId } = match.params;
  invariant(clientProfileId, 'Expected "clientProfileId"');

  const [search, searchInputProps] = useInputValue('');
  const programFilter = React.useMemo(() => ({ search, clientProfileId }), [
    clientProfileId,
    search,
  ]);
  const query = useQuery({
    clientProfileId,
    programFilter,
  });
  const clientProfile = query.props?.clientProfile;

  if (query.props && !clientProfile) {
    throw new Error('Not found');
  }

  const hasPrograms = !!(query.props && query.props.userPrograms.edgeCount);

  const bodyContent = hasPrograms ? (
    <ProgramList
      query={query.props}
      getNodeListItemProps={(program) => ({
        component: Link,
        to: `/dashboard/clients/view/${clientProfileId}/programs/view/${program.id}`,
      })}
    />
  ) : (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" style={{ marginTop: 32, textAlign: 'center' }}>
        You haven&apos;t assigned any programs to this client yet.
      </Typography>
      <Button
        component={Link}
        to={`/dashboard/clients/view/${clientProfileId}/programs/new`}
        variant="contained"
        size="large"
        color="secondary"
        style={{ color: '#ffffff', fontWeight: 800, marginTop: 16 }}
      >
        Assign New Program
      </Button>
    </div>
  );

  return (
    <>
      {clientProfile && (
        <DialogRoute
          path="/dashboard/clients/view/:clientProfileId/programs/new"
          component={ProgramCreateDialog}
          cancelTo={`/dashboard/clients/view/${clientProfileId}/programs`}
          completeTo={(program) =>
            `/dashboard/clients/view/${program.clientProfile.id}/programs/view/${program.id}`
          }
        />
      )}
      {hasPrograms ? (
        <ListPageHeader
          searchBarProps={{
            placeholder: 'Search Programs',
            ...searchInputProps,
          }}
          actions={[
            {
              key: 'create',
              type: 'link',
              label: 'Assign New Program',
              to: `/dashboard/clients/view/${clientProfileId}/programs/new`,
              primary: true,
            },
          ]}
        />
      ) : null}
      <DashboardPageBody>{!query.props ? <LoadingView /> : bodyContent}</DashboardPageBody>
    </>
  );
}
