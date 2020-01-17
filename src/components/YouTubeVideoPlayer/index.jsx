// @flow

import * as React from 'react';

import config from '../../config';

type Player = $ReadOnly<{|
  embedHtml: string,
|}>;

type Props = {
  videoId: string,
};

export default function YouTubeSearchDialog(props: Props) {
  const { videoId } = props;

  const [player, setPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    const search = async () => {
      // TODO: Handle errors
      const params = new URLSearchParams();
      params.set('key', config.youtubeApiKey);
      params.set('id', videoId);
      params.set('part', 'snippet,player');

      const url = `https://www.googleapis.com/youtube/v3/videos?${params.toString()}`;

      const responseBody = await fetch(url);

      const response = await responseBody.json();

      setPlayer(response.items[0].player);
    };

    search();
  }, [videoId]);

  return (
    <>
      {!player ? (
        // TODO: Better loading
        'Loading...'
      ) : (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: player.embedHtml }}
        />
      )}
    </>
  );
}
