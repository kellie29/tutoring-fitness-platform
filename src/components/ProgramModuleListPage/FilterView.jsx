// @flow

import * as React from 'react';
import { Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';

type Props = {|
  filterDefs: $ReadOnlyArray<any>,
  filters: any,
  setFilters: (any) => void,
|};

export default function FilterView(props: Props) {
  const { filterDefs, filters, setFilters } = props;

  return (
    <>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid item md={8} xs={12}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {filterDefs.map((filterDef) => (
              <div
                key={filterDef.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 16px',
                }}
              >
                <Typography variant="h6">{filterDef.label}</Typography>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    height: '100%',
                  }}
                >
                  {filterDef.choices.map((choice) => (
                    <FormControlLabel
                      key={choice.value}
                      control={
                        <Checkbox
                          size="small"
                          // $FlowFixMe
                          checked={filters[filterDef.name]?.includes(choice.value) ?? false}
                          onChange={(event) => {
                            const { checked } = event.target;

                            if (checked) {
                              setFilters({
                                // $FlowFixMe
                                ...filters,
                                // $FlowFixMe
                                [filterDef.name]: [
                                  // $FlowFixMe
                                  ...(filters[filterDef.name] ?? []),
                                  choice.value,
                                ],
                              });
                            } else {
                              setFilters({
                                // $FlowFixMe
                                ...filters,
                                // $FlowFixMe
                                [filterDef.name]: (filters[filterDef.name] ?? []).filter(
                                  (v) => v !== choice.value,
                                ),
                              });
                            }
                          }}
                          value={choice.value}
                        />
                      }
                      label={<Typography variant="body2">{choice.label}</Typography>}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
