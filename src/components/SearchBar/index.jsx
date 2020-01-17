// @flow

import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

type Props = {|
  placeholder: string,
  value: string,
  onChange: any,
  style?: any,
|};

export default function SearchBar(props: Props) {
  const { placeholder, value, onChange, style } = props;

  return (
    <Paper
      elevation={1}
      style={{
        padding: '4px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        ...style,
      }}
    >
      <IconButton aria-label="Search" style={{ padding: 8 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
        }}
      />
    </Paper>
  );
}
