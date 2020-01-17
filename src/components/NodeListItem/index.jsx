//  @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { FormattedDate } from 'react-intl';
import { Hidden, CardMedia } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';
import PresentableCardMedia from '../PresentableCardMedia';

import { type NodeListItem_node as Node } from './__generated__/NodeListItem_node.graphql';
import { type NodeListItem_presentable as Presentable } from './__generated__/NodeListItem_presentable.graphql';

const useStyles = makeStyles((theme) => ({
  rootDefault: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    minHeight: 200,
    [theme.breakpoints.up('sm')]: {
      height: 200,
    },
  },
  rootCompact: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12,
  },
  description: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: 200,
    },
  },
}));

const ActionButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  '& > *': {
    margin: theme.spacing(0, 0.5),
  },
}));

const usePresentableFragment = createFragment<Presentable>(graphql`
  fragment NodeListItem_presentable on Presentable {
    presentableTypeName: __typename
    ...PresentableAvatar_presentable
    ...PresentableCardMedia_presentable
    name
    image {
      url
    }
    description
  }
`);

const useNodeFragment = createFragment<Node>(graphql`
  fragment NodeListItem_node on Node {
    ...NodeListItem_presentable
    ... on Owned {
      owner {
        ...PresentableAvatar_presentable
        ...PresentableLink_presentable
        ... on Presentable {
          name
        }
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

type Props = {
  variant?: 'default' | 'compact',
  node: mixed,
  presentable?: mixed,
  infoChips?: React.Node | false,
  quickActionButtons?: React.Node | false,
  actionButtons?: React.Node | false,
  raised?: boolean,
  // TODO: Type this
  onCardContentClick?: (event: any) => void,
  cardMedia?: React.Node,
  extraContent?: React.Node,
  noOwner?: boolean,
};

export default function NodeListItem(props: Props) {
  const {
    variant = 'default',
    infoChips,
    quickActionButtons,
    actionButtons,
    raised,
    onCardContentClick,
    cardMedia,
    extraContent,
    noOwner = false,
    ...restProps
  } = props;

  const node = useNodeFragment(props.node);
  const presentable = usePresentableFragment(props.presentable || node);

  const classes = useStyles();

  const cardMediaWidth = variant === 'default' ? 200 : 100;

  let cardMediaComponent = null;
  if (cardMedia) {
    cardMediaComponent = <CardMedia style={{ width: cardMediaWidth }}>{cardMedia}</CardMedia>;
  } else {
    cardMediaComponent = (
      <PresentableCardMedia presentable={presentable} style={{ width: cardMediaWidth }} />
    );
  }

  return (
    <Card
      raised={raised}
      // TODO: Proper switch
      className={variant === 'default' ? classes.rootDefault : classes.rootCompact}
    >
      {presentable.presentableTypeName ? (
        <>
          <CardActionArea
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
            }}
            // $FlowFixMe
            {...restProps}
          >
            <Hidden xsDown>{cardMediaComponent}</Hidden>
            <CardContent
              onClick={onCardContentClick}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: 16,
                overflow: 'hidden',
              }}
            >
              <Typography
                variant={variant === 'default' ? 'h6' : 'body'}
                style={{
                  display: 'flex',
                  placeItems: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: variant === 'default' ? undefined : '16px',
                }}
                gutterBottom
                noWrap
              >
                <Hidden smUp>
                  {presentable.image?.url ? (
                    <PresentableAvatar
                      presentable={presentable}
                      style={{ display: 'inline-block', marginRight: 16 }}
                    />
                  ) : null}
                </Hidden>
                {presentable.name}
              </Typography>
              {variant !== 'compact' && presentable.description ? (
                <Typography
                  className={classes.description}
                  variant="body1"
                  gutterBottom
                  style={{ flex: 1, overflow: 'hidden' }}
                >
                  {presentable.description}
                </Typography>
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Hidden xsDown>
                  <>
                    {!noOwner && (
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {node.owner && (
                          <PresentableAvatar
                            style={{
                              height: 16,
                              width: 16,
                              marginRight: 8,
                              alignSelf: 'flex-start',
                            }}
                            presentable={node.owner}
                          />
                        )}
                        <Typography variant="body2" style={{ overflow: 'ellipsis' }}>
                          {/* $FlowFixMe */}
                          {node.owner ? `${node.owner.name}` : null}
                        </Typography>
                      </div>
                    )}
                    <div style={{ fontWeight: 'lighter', fontStyle: 'italic' }}>
                      <FormattedDate
                        value={node.createdAt}
                        year="numeric"
                        month="long"
                        day="2-digit"
                      />
                    </div>
                  </>
                </Hidden>
                <div style={{ flexGrow: 1 }} />
                {/* <div style={{ flexShrink: 0, visibility: 'hidden' }}>
                  {actionButtons !== false ? (
                    <ActionButtonContainer>{actionButtons}</ActionButtonContainer>
                  ) : null}
                </div> */}
              </div>
            </CardContent>
            {extraContent && (
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 16,
                  overflow: 'hidden',
                  placeItems: 'center',
                }}
              >
                {extraContent}
              </CardContent>
            )}
          </CardActionArea>
          <div style={{ position: 'absolute', right: 16, bottom: 16 }}>
            {actionButtons !== false ? (
              <ActionButtonContainer>{actionButtons}</ActionButtonContainer>
            ) : null}
          </div>
        </>
      ) : null}
    </Card>
  );
}
