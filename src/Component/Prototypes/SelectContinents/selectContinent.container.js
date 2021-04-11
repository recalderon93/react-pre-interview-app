/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Grid } from '@material-ui/core';
import SelectContinentItem from './selectContinent.item';

function SelectContinentContainer({ value }) {
  return (
    <>
      <Grid container spacing={8}>
        {value.sort().concat('Todos').map((item) => (
          <Grid key={item} item xs={4}>
            <SelectContinentItem value={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SelectContinentContainer;
