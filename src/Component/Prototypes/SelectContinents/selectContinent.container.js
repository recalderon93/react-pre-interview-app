/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CONSTANTS from 'Utils/Constants';
import SelectContinentItem from './selectContinent.item';

function SelectContinentContainer() {
  const continents = CONSTANTS.CONTINENTS;
  useEffect(() => () => { }, []);
  return (
    <>
      <Grid container spacing={8}>
        {continents.concat(['Todos']).map((item) => (
          <Grid key={item} item xs={4}>
            <SelectContinentItem value={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SelectContinentContainer;
