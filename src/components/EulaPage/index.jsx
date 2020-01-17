// @flow

import * as React from 'react';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';
import appData from '../../data';

export default function EndUserLicenseAgreementPage() {
  return (
    <>
      <PageHelmet title="End User License Agreement" />
      <PageFrame>
        <div style={{ padding: 16 }}>
          <appData.EndUserLicenseAgreement />
        </div>
      </PageFrame>
    </>
  );
}
