// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import ResizeObserver from '@zeecoder/react-resize-observer';
// import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';

import { graphql, createFragment } from '../../api';
import PresentableCardMedia from '../PresentableCardMedia';

import { type ProgramCard_program as Program } from './__generated__/ProgramCard_program.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramCard_program on Program {
    ...PresentableCardMedia_presentable
    image {
      url
    }
    id
    name
    tracks {
      edgeCount
      edges {
        node {
          events {
            edges {
              node {
                actionResponses(first: 1) {
                  edgeCount
                }
              }
            }
          }
        }
      }
    }
  }
`);

type Props = {
  program: Program,
};

export default function ProgramCard(props: Props) {
  const program = useFragment(props.program);

  let responseCount = 0;

  program.tracks.edges.forEach(({ node: trackNode }) => {
    trackNode.events.edges.forEach(({ node: eventNode }) => {
      responseCount += eventNode.actionResponses.edgeCount;
    });
  });

  return (
    <Card>
      <CardActionArea component={Link} to={`/dashboard/programs/view/${program.id}`}>
        {program.image ? (
          <PresentableCardMedia
            presentable={program}
            style={{ height: 200, backgroundSize: 'cover' }}
          />
        ) : null}
        <CardContent style={{ padding: 16 }}>
          <Typography variant="h6" gutterBottom noWrap>
            {program.name}
          </Typography>
          <Divider />
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'space-around',
              margin: '8px 0',
            }}
          >
            <div>
              {program.tracks.edgeCount}
              <br />
              Users
            </div>
            <div>
              {responseCount}
              <br />
              Responses
            </div>
          </div>
          {/* <Divider />
          <ResizeObserver>
            {(ref, width, height) => (
              <div ref={ref} style={{ height: 200, margin: '8px 0' }}>
                <XYPlot width={width} height={height}>
                  <XAxis />
                  <YAxis />
                  <LineSeries
                    data={[
                      { x: 0, y: 10 },
                      { x: 1, y: 5 },
                      { x: 2, y: 4 },
                      { x: 3, y: 7 },
                      { x: 4, y: 10 },
                      { x: 5, y: 5 },
                      { x: 6, y: 4 },
                      { x: 7, y: 7 },
                      { x: 8, y: 10 },
                      { x: 9, y: 5 },
                      { x: 10, y: 4 },
                      { x: 11, y: 7 },
                    ]}
                  />
                </XYPlot>
              </div>
            )}
          </ResizeObserver> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
