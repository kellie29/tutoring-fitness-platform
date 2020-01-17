// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from '@material-ui/core/Box';
import { useRouteMatch } from 'react-router-dom';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import ProgramModuleCreateDialog from '../ProgramModuleCreateDialog';
import DialogRoute from '../DialogRoute';
import LoadingView from '../LoadingView';
import { graphql, createQuery } from '../../api';
import ListPageHeader from '../ListPageHeader';
import ProgramAddProgramModulesDialog from '../ProgramAddProgramModulesDialog';
import DashboardPageScrollView from '../createDashboardPage/DashboardPageScrollView';

import { type ProgramModuleListPageQuery } from './__generated__/ProgramModuleListPageQuery.graphql';
import { type ProgramModuleListPageTagQuery } from './__generated__/ProgramModuleListPageTagQuery.graphql';
import ProgramModuleList from './ProgramModuleList';
import SelectedProgramModuleList from './SelectedProgramModuleList';
import FilterView from './FilterView';
import tagFilterDescriptors from './tagFilterDescriptors';

const useQuery = createQuery<ProgramModuleListPageQuery>(graphql`
  query ProgramModuleListPageQuery(
    $filter: ProgramModuleFilterInput!
    $userFilter: ProgramModuleFilterInput!
  ) {
    ...ProgramModuleList_query @arguments(filter: $filter)
    userProgramModules: programModules(filter: $userFilter, first: 0) {
      edgeCount
    }
  }
`);

const useTagQuery = createQuery<ProgramModuleListPageTagQuery>(graphql`
  query ProgramModuleListPageTagQuery($tagId: ID) {
    tag(id: $tagId) {
      slug
    }
  }
`);

const tagSlugToBreadcrumbStrings = {
  'personal-training-recipe': ['All Recipes', 'My Recipes'],
  'personal-training-habit': ['All Habits', 'My Habits'],
  'personal-training-exercise': ['All Exercises', 'My Exercises'],
};

const tagSlugToTitle = {
  'personal-training-recipe': 'Recipes',
  'personal-training-habit': 'Habits',
  'personal-training-exercise': 'Exercises',
};

const tagSlugToName = {
  'personal-training-recipe': 'Recipe',
  'personal-training-habit': 'Habit',
  'personal-training-exercise': 'Exercise',
};

const tagSlugToButtonString = {
  'personal-training-recipe': 'Create New Recipe',
  'personal-training-habit': 'Create New Habit',
  'personal-training-exercise': 'Create New Exercise',
};

const tagSlugToSearchPlaceholderString = {
  'personal-training-recipe': 'Search Recipes',
  'personal-training-habit': 'Search Habits',
  'personal-training-exercise': 'Search Exercises',
};

export default createDashboardPage<any>(function ProgramModuleListPage() {
  const match = useRouteMatch();
  const { tagId } = match.params;
  const [search, searchInputProps] = useInputValue('');
  const [showUserModules, setShowUserModules] = React.useState(null);
  const [showFilters, setShowFilters] = React.useState(false);
  const [tagFilters, setTagFilters] = React.useState({});

  const tagFilterTokens = Object.values(tagFilters)
    // $FlowFixMe
    .flat();

  React.useLayoutEffect(() => {
    setShowUserModules(null);
  }, [tagId]);

  const onAllModulesClick = React.useCallback(() => {
    setShowUserModules(false);
  }, []);

  const onMyModulesClick = React.useCallback(() => {
    setShowUserModules(true);
  }, []);

  const allFilter = React.useMemo(
    () => ({
      search: [search, ...tagFilterTokens].filter(Boolean).join('🤷🏼‍♀️'),
      searchSplit: true,
      tagId: tagId ? { eq: tagId } : null,
    }),
    [search, tagFilterTokens, tagId],
  );

  const userFilter = React.useMemo(
    () => ({
      search: [search, ...tagFilterTokens].filter(Boolean).join('🤷🏼‍♀️'),
      searchSplit: true,
      isPublic: null,
      tagId: tagId ? { eq: tagId } : null,
      ownerId: 'me',
    }),
    [search, tagFilterTokens, tagId],
  );
  const filter = showUserModules ? userFilter : allFilter;
  const query = useQuery({ filter, userFilter });
  const tagQuery = useTagQuery({ tagId });
  const tag = tagQuery.props?.tag;

  React.useLayoutEffect(() => {
    if (!query.props || showUserModules !== null) {
      return;
    }

    const userProgramModuleCount = query.props.userProgramModules.edgeCount;

    if (userProgramModuleCount) {
      setShowUserModules(true);
    }
  }, [query.props, showUserModules]);

  const [selectedProgramModuleIds, setSelectedProgramModuleIds] = React.useState([]);

  let filterDefs;
  if (tag && tagFilterDescriptors[tag.slug]) {
    filterDefs = tagFilterDescriptors[tag.slug];
  }

  return (
    <>
      <DialogRoute
        path={tagId ? `/dashboard/modules/:tagId/create` : `/dashboard/modules/create`}
        component={(props) => (
          <ProgramModuleCreateDialog
            {...props}
            moduleName={tag ? tagSlugToName[tag.slug] : 'Module'}
          />
        )}
        cancelTo={tagId ? `/dashboard/modules/${tagId}` : `/dashboard/modules`}
        completeTo={(programModule) => `/dashboard/modules/view/${programModule.id}/update`}
      />
      <DialogRoute
        path={
          tagId ? `/dashboard/modules/:tagId/add-to-program` : `/dashboard/modules/add-to-program`
        }
        component={ProgramAddProgramModulesDialog}
        componentProps={{ programModuleIds: selectedProgramModuleIds }}
        completeTo={(programModules) =>
          // $FlowFixMe
          `/dashboard/programs/view/${programModules[0].program.id}/modules/${programModules[0].programModuleGroup.id}`
        }
        goBackOnCancel
      />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {selectedProgramModuleIds.length ? (
          <>
            <SelectedProgramModuleList
              selectedProgramModuleIds={selectedProgramModuleIds}
              setSelectedProgramModuleIds={setSelectedProgramModuleIds}
            />
            <div style={{ flex: '0 0 16px' }} />
          </>
        ) : null}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            overflowY: 'auto',
            // padding: 16,
          }}
        >
          <DashboardPageScrollView>
            {tag !== undefined && (
              <>
                <PageHelmet title={tag ? tagSlugToTitle[tag.slug] : 'Modules'} />
                <ListPageHeader
                  searchBarProps={{
                    placeholder: tag
                      ? tagSlugToSearchPlaceholderString[tag.slug]
                      : 'Search Modules',
                    ...searchInputProps,
                  }}
                  actions={[
                    {
                      key: 'create',
                      type: 'link',
                      label: tag ? tagSlugToButtonString[tag.slug] : 'Create New Module',
                      to: tagId
                        ? `/dashboard/modules/${tagId}/create`
                        : '/dashboard/modules/create',
                      primary: true,
                    },
                  ]}
                  bottomContent={
                    <>
                      {filterDefs && (
                        <>
                          <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                              onClick={() => {
                                setShowFilters(!showFilters);
                              }}
                            >
                              {showFilters ? 'Hide Filters' : 'Show Filters'}
                            </Button>
                          </Box>
                          {showFilters && (
                            <FilterView
                              filterDefs={filterDefs}
                              filters={tagFilters}
                              setFilters={setTagFilters}
                            />
                          )}
                        </>
                      )}
                      <Breadcrumbs aria-label="Breadcrumb" style={{ margin: 'auto' }}>
                        <Button
                          onClick={onAllModulesClick}
                          style={
                            !showUserModules
                              ? { textDecoration: 'underline', fontWeight: 'bold' }
                              : null
                          }
                        >
                          {tag ? tagSlugToBreadcrumbStrings[tag.slug][0] : 'All Modules'}
                        </Button>
                        <Button
                          onClick={onMyModulesClick}
                          style={
                            showUserModules
                              ? { textDecoration: 'underline', fontWeight: 'bold' }
                              : null
                          }
                        >
                          {tag ? tagSlugToBreadcrumbStrings[tag.slug][1] : 'My Modules'}
                        </Button>
                      </Breadcrumbs>
                    </>
                  }
                />
              </>
            )}
            <DashboardPageBody hideDownBreakpoint="xs">
              {!query.props ? (
                <LoadingView />
              ) : (
                <ProgramModuleList
                  query={query.props}
                  selectedProgramModuleIds={selectedProgramModuleIds}
                  onSelectedProgramModuleIdsChange={setSelectedProgramModuleIds}
                />
              )}
            </DashboardPageBody>
          </DashboardPageScrollView>
        </div>
      </div>
    </>
  );
});
