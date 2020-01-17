// @flow

import * as React from 'react';
import invariant from 'invariant';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import { graphql, createQuery, createMutation } from '../../api';
import PageHelmet from '../PageHelmet';
import LoadingView from '../LoadingView';
import useAsyncTask from '../useAsyncTask';
import { stripePublishableKey } from '../../config';
import appData from '../../data';

import { type SubscriptionsPageQuery } from './__generated__/SubscriptionsPageQuery.graphql';
import { type SubscriptionsPageCreateStripeCheckoutSessionMutation } from './__generated__/SubscriptionsPageCreateStripeCheckoutSessionMutation.graphql';
import SubscriptionPaper from './SubscriptionPaper';

const useMutation = createMutation<SubscriptionsPageCreateStripeCheckoutSessionMutation>(graphql`
  mutation SubscriptionsPageCreateStripeCheckoutSessionMutation(
    $input: CreateStripeCheckoutSessionInput!
  ) {
    createStripeCheckoutSession(input: $input) {
      sessionId
    }
  }
`);

const useQuery = createQuery<SubscriptionsPageQuery>(graphql`
  query SubscriptionsPageQuery {
    currentSession {
      user {
        subscription {
          id
          slug
        }
      }
    }
    # subscriptions(first: 10) {
    #   edges {
    #     node {
    #       ...SubscriptionPaper_subscription
    #       id
    #     }
    #   }
    # }
  }
`);

export default createDashboardPage<any>(function SubscriptionsPage() {
  const query = useQuery();
  const createStripeCheckoutSession = useMutation();
  const purchaseTask = useAsyncTask(async () => {
    const createStripeCheckoutSessionResponse = await createStripeCheckoutSession({
      input: {
        subscriptionSlug: 'pro',
      },
    });

    const checkoutSessionId =
      createStripeCheckoutSessionResponse.createStripeCheckoutSession.sessionId;

    const stripe = window.Stripe(stripePublishableKey);

    const response = await stripe.redirectToCheckout({
      sessionId: checkoutSessionId,
    });

    if (response.error) {
      throw response.error;
    }
  });

  const onPurchaseClick = async () => {
    purchaseTask();
  };

  if (!query.props) {
    return <LoadingView />;
  }

  const {
    currentSession,
    // subscriptions
  } = query.props;

  invariant(currentSession, 'Expected "currentSession"');

  const SuccessView = () => {
    return (
      <div style={{ display: 'flex', placeContent: 'center' }}>
        <Typography variant="body1">Your purchase was successful.</Typography>
      </div>
    );
  };

  const CancelView = () => {
    return (
      <div style={{ display: 'flex', placeContent: 'center' }}>
        <Typography variant="body1">You have cancelled the purchase.</Typography>
      </div>
    );
  };

  return (
    <>
      <PageHelmet title="Subscriptions" />
      <DashboardPageBody hideDownBreakpoint="sm">
        <Route path="/dashboard/subscriptions/success" component={SuccessView} />
        <Route path="/dashboard/subscriptions/cancel" component={CancelView} />
        <Grid
          container
          style={{ marginTop: 50, height: 'fit-content' }}
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={12}
            style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}
          >
            {appData.subscriptions.map((subscription) => (
              <SubscriptionPaper key={subscription.slug} subscription={subscription}>
                {subscription.slug === 'free' && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onPurchaseClick}
                    style={{
                      borderRadius: '40px',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 600,
                      boxShadow: 'unset',
                      letterSpacing: 1,
                      textTransform: 'unset',
                      visibility: 'hidden',
                    }}
                  >
                    Downgrade
                  </Button>
                )}
                {subscription.slug === 'pro' && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onPurchaseClick}
                    style={{
                      borderRadius: '40px',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 600,
                      boxShadow: 'unset',
                      letterSpacing: 1,
                      textTransform: 'unset',
                      visibility:
                        currentSession.user.subscription.slug !== 'pro' ? 'visible' : 'hidden',
                    }}
                  >
                    Upgrade
                  </Button>
                )}
                {subscription.slug === 'enterprise' && (
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={subscription.link}
                    style={{
                      borderRadius: '40px',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 600,
                      boxShadow: 'unset',
                      letterSpacing: 1,
                      textTransform: 'unset',
                    }}
                  >
                    {subscription.buttonText}
                  </Button>
                )}
              </SubscriptionPaper>
            ))}
          </Grid>
          {currentSession.user.subscription.slug !== 'free' && (
            <Grid item xs={8}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="body1" style={{ textAlign: 'center' }}>
                  If you have any questions about your subscription or if you would like to cancel
                  it, please <Link to="/contact-us">contact us</Link>.
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </DashboardPageBody>
    </>
  );
});
