// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

export default function ProgramTrackActionResponseCardEmpty() {
  return (
    <Card raised>
      <CardActionArea>
        <CardContent>
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: 600, lineHeight: '1.3em' }}>
              User has not started any activity yet
            </Typography>
            <div style={{ flexGrow: 1 }} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
