// @flow

import * as React from 'react';
import { Link, type ContextRouter, withRouter, matchPath } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import invariant from 'invariant';

export type TabDescriptor = {|
  order: number,
  label: string,
  icon: React.Node,
  to: string,
|};

type Props = {
  ...ContextRouter,
  tabs: $ReadOnlyArray<TabDescriptor>,
};

export default withRouter(function RouterTabs(props: Props) {
  const { tabs } = props;

  const activeTabDescriptor = tabs.find((tab) => matchPath(location.pathname, { path: tab.to }));
  invariant(activeTabDescriptor, 'Expected "activeTabDescriptor"');
  const activeTabIndex = activeTabDescriptor.order;
  const sortedTabs = React.useMemo(() => [...tabs].sort((a, b) => a.order - b.order), [tabs]);

  return (
    <Tabs
      value={activeTabIndex}
      indicatorColor="primary"
      textColor="primary"
      style={{ flexShrink: 0, alignSelf: 'flex-end' }}
    >
      {sortedTabs.map((tab, i) => (
        <Tab key={i} label={tab.label} icon={tab.icon} component={Link} to={tab.to} />
      ))}
    </Tabs>
  );
});
