//  @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { graphql, createFragment } from '../../api';

import { type NodeCard_node as Node } from './__generated__/NodeCard_node.graphql';
// import { type NodeCard_presentable as Presentable } from './__generated__/NodeCard_presentable.graphql';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const useFragment = createFragment<Node>(graphql`
  fragment NodeCard_node on Node {
    ... on Presentable {
      presentableTypeName: __typename
      ...PresentableAvatar_presentable
      name
      description
    }
    ... on Owned {
      owner {
        ...PresentableLink_presentable
      }
    }
    # id
    # name
    # description
    # isPublic
    createdAt
    # viewerCanUpdate
    # isBookmarkedByViewer
  }
`);

type Props = {|
  node: mixed,
  // presentable?: Presentable,
|};

export default function NodeCard(props: Props) {
  const node = useFragment(props.node);
  const classes = useStyles();

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton aria-label="Settings" className={classes.card}>
          <MoreVertIcon />
        </IconButton>
      </div>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/?health,nature?1"
        title="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          {node.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {node.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

// graphql`
//   fragment NodeCard_presentable on Presentable {
//     presentableTypeName: __typename
//     ...PresentableAvatar_presentable
//     name
//     description
//   }
// `;
