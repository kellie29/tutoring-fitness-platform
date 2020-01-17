// @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';

import { useDashboardPageScrollViewRef } from '../createDashboardPage';
import LoadingView from '../LoadingView';

export { default as ListPageListItem } from './ListPageListItem';

type Props = {|
  hasMore: boolean,
  loadMore: () => void,
  children: React.Node,
|};

export default function ListPageList(props: Props) {
  const { hasMore, loadMore, children } = props;

  const scrollViewRef = useDashboardPageScrollViewRef();

  return (
    <InfiniteScroll
      hasMore={hasMore}
      loadMore={loadMore}
      loader={<LoadingView key="loader" />}
      useWindow={false}
      getScrollParent={() => scrollViewRef.current}
    >
      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </Grid>
    </InfiniteScroll>
  );
}
