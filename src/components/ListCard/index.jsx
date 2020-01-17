//  @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  cardContent: {
    padding: theme.spacing(2),
  },
}));

type Props = {|
  ...React.ElementConfig<typeof Card>,
  children: React.Node,
  CardActionAreaProps?: React.ElementConfig<CardActionArea>,
  CardContentProps?: React.ElementConfig<CardContent>,
|};

export default function ListCard(props: Props) {
  const { children, CardActionAreaProps, CardContentProps, ...restProps } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card} {...restProps}>
      <CardActionArea {...CardActionAreaProps}>
        <CardContent className={classes.cardContent} {...CardContentProps}>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
