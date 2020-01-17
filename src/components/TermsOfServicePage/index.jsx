// @flow

import * as React from 'react';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';
import appData from '../../data';

export default function TermsOfServicePage() {
  return (
    <>
      <PageHelmet title="Terms of Service" />
      <PageFrame>
        <div style={{ padding: 16 }}>
          <appData.TermsOfService />
        </div>
      </PageFrame>
    </>
  );
}
