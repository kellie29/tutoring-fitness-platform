// @flow

import * as React from 'react';

type Props = {|
  ...$Exact<React.ElementConfig<'div'>>,
  src: CanvasImageSource,
  alt: string,
|};

export default function MarkdownImage(props: Props) {
  const { src, alt, ...otherProps } = props;

  const [size, setSize] = React.useState();

  const imgRef = React.useRef(null);

  React.useEffect(() => {
    if (imgRef.current) {
      const width = imgRef.current.naturalWidth;
      const height = imgRef.current.naturalHeight;
      setSize([width, height]);
    }
  }, [imgRef]);

  let width;
  let height;

  if (size) {
    [width, height] = size;
    const aspecRatio = width / height;
    if (aspecRatio <= 1) {
      height = Math.min(height, 512);
      width = aspecRatio * height;
    } else {
      height = undefined;
      width = '100%';
    }
  } else {
    [width, height] = [0, 0];
  }

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        marginTop: 4,
        marginBottom: 4,
        justifyContent: 'center',
      }}
    >
      <img ref={imgRef} src={src} alt={alt} {...otherProps} style={{ width, height }} />
    </div>
  );
}
