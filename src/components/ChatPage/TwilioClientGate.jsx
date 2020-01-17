// @flow

import * as React from 'react';
import invariant from 'invariant';

import { twilioClientContext } from './TwilioClientProvider';

export const useTwilioClient = () => {
  const twilioClient = React.useContext(twilioClientContext);
  invariant(twilioClient, 'Expected "twilioClient"');
  return twilioClient;
};

type Props = {|
  children?: React.Node,
|};

export default function TwilioClientGate(props: Props) {
  const { children } = props;

  const twilioClient = React.useContext(twilioClientContext);

  if (!twilioClient) return null;

  return <>{children}</>;
}
