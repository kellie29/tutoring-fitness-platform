// @flow

import './styles.css';

import * as React from 'react';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';

import PrivacyPolicy from './PrivacyPolicy.md';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHelmet title="Privacy Policy" />
      <PageFrame>
        <div style={{ padding: 16 }}>
          <PrivacyPolicy />
        </div>
      </PageFrame>
    </>
  );
}
