//  @flow

import { styled } from '@material-ui/styles';

export default styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1, 1),
    },
  }),
  {
    name: 'ButtonRack',
  },
);
