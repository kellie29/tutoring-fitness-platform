// @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type PresentableAvatarInput_presentable as Presentable } from './__generated__/PresentableAvatarInput_presentable.graphql';

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableAvatarInput_presentable on Presentable {
    ...PresentableAvatar_presentable
    id
  }
`);

type Props = {|
  presentable: mixed,
  imageFile: File | null,
  onImageFileChange: (imageFile: File | null) => void,
  avatarStyle?: $ElementType<React.ElementConfig<typeof PresentableAvatar>, 'style'>,
|};

export default function PresentableAvatarInput(props: Props) {
  const { imageFile, onImageFileChange, avatarStyle = null } = props;

  const presentable = useFragment(props.presentable);

  const onFileChange = React.useCallback(
    (event: SyntheticInputEvent<HTMLInputElement>) => {
      const file = event.target.files[0];
      onImageFileChange(file);
    },
    [onImageFileChange],
  );

  const src = React.useMemo(() => (imageFile ? URL.createObjectURL(imageFile) : null), [imageFile]);

  return (
    <label htmlFor="text-button-file" style={{ width: 'fit-content' }}>
      <input
        key={JSON.stringify(imageFile)}
        id="text-button-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ display: 'none' }}
      />
      <PresentableAvatar
        presentable={presentable}
        src={src}
        style={{ ...avatarStyle, cursor: 'pointer' }}
      />
    </label>
  );
}
