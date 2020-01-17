// @flow

import * as React from 'react';
import { URLSearchParams } from 'whatwg-url';
import useDebounce from 'react-use/lib/useDebounce';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import config from '../../config';
import YouTubeVideoPlayer from '../YouTubeVideoPlayer';

import YouTubeVideoListItem from './YouTubeVideoListItem';

type Props = {|
  onChooseClick: (result: any) => void,
|};

export default function YouTubeSearchView(props: Props) {
  const { onChooseClick } = props;

  const initialQuery = 'straight leg raise';
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [selectedResult, setSelectedResult] = React.useState<any | null>(null);

  useDebounce(
    () => {
      setDebouncedQuery(query);
    },
    200,
    [query],
  );

  const onQueryChange = React.useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  React.useEffect(() => {
    const search = async () => {
      const params = new URLSearchParams();
      params.set('key', config.youtubeApiKey);
      params.set('q', debouncedQuery || initialQuery);
      params.set('part', 'snippet');
      params.set('maxResults', 10);

      const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;

      const responseBody = await fetch(url);

      const response = await responseBody.json();

      setResults(response.items);
    };

    search();
  }, [debouncedQuery]);

  return (
    // <div style={{ flex: 0, display: 'flex', flexDirection: 'column' }}>
    <>
      <div style={{ flex: 0, display: 'flex', overflowY: 'auto' }}>
        {selectedResult && (
          <div
            style={{ display: 'flex', margin: 16, alignItems: 'center', justifyContent: 'center' }}
          >
            <YouTubeVideoPlayer videoId={selectedResult.id.videoId} />
          </div>
        )}
        <div>
          <Paper
            elevation={1}
            style={{
              margin: '0 16px 8px 16px',
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <IconButton aria-label="Search" style={{ padding: 8 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search YouTube Videos"
              value={query}
              onChange={onQueryChange}
              style={{
                flex: 1,
              }}
            />
          </Paper>
          {results &&
            results.map((result, i) => (
              <div
                key={i}
                style={{
                  margin: '0 16px',
                }}
              >
                <YouTubeVideoListItem
                  result={result}
                  onChooseClick={() => setSelectedResult(result)}
                />
              </div>
            ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 16px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onChooseClick(selectedResult)}
          disabled={!selectedResult}
        >
          Choose
        </Button>
      </div>
    </>
    // </div>
  );
}
