// @flow

const step = 45;
export default function hueFromIndex(index: number) {
  const stepCount = 360 / step;
  const revolution = Math.floor(index / stepCount);
  const pad = revolution ? 45 / (revolution + 1) : 0;
  return (pad + index * step) % 360;
}
