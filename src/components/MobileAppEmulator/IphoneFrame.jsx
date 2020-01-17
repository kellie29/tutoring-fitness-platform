// @flow

import * as React from 'react';
import { useRect } from '@reach/rect';

import iphoneXsGreyFrame from './iphoneXsGreyFrame.svg';

const frameRatio = 360 / 722;
const frameWidth = 414;
const frameHeight = frameWidth / frameRatio;

export const contentWidth = Math.floor(frameWidth * 0.87);
export const contentHeight = frameHeight * 0.94;

type Props = {|
  children: React.Node,
  style: any,
|};

export default function IphoneFrame(props: Props) {
  const { children, style } = props;

  const ref = React.useRef();
  const rect = useRect(ref);

  const containerWidth = rect ? rect.width : 0;
  const containerHeight = rect ? rect.height : 0;
  const xScale = containerWidth / frameWidth;
  const yScale = containerHeight / frameHeight;
  const zoom = Math.min(xScale, yScale);

  return (
    <div ref={ref} style={style}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
          width: containerHeight * frameRatio,
          height: containerWidth / frameRatio,
          pointerEvents: 'none',
        }}
      >
        <div style={{ zoom }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: 'flex',
              placeContent: 'center',
            }}
          >
            <img
              src={iphoneXsGreyFrame}
              alt=""
              style={{
                width: frameWidth,
                height: frameHeight,
              }}
            />
          </div>
          <div
            style={{
              width: contentWidth,
              height: contentHeight,
              backgroundColor: 'black',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
