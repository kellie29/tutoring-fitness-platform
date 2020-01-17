// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import MobileAppEmulator, { type Emulatable } from '../MobileAppEmulator';
import useFormatMessage from '../useFormatMessage';

type Props = {|
  emulatable: ?Emulatable,
  noHeader?: boolean,
  showSaveButton?: boolean,
  children: React.Node,
|};

export default function MobileAppPreviewView(props: Props) {
  const { emulatable, noHeader = false, showSaveButton, children } = props;

  const s = useFormatMessage();

  return (
    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflow: 'hidden', overflowY: 'auto', padding: 16 }}>{children}</div>
      <div style={{ flex: '0 0 16px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 16 }}>
        {!noHeader ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Tooltip title={s('mobileAppPreviewView.tooltipTitle')} placement="right">
                <Typography
                  variant="h6"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontWeight: '800',
                  }}
                >
                  Client&apos;s Phone
                  <InfoIcon fontSize="small" style={{ marginLeft: 8 }} />
                </Typography>
              </Tooltip>
            </div>
            <div style={{ height: 16 }} />
          </>
        ) : null}
        <MobileAppEmulator
          emulatable={emulatable}
          showSaveButton={showSaveButton}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
}
