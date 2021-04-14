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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        margin: '0 auto',
        gap: '3.5vw',

      }}
      >
        {continents.concat(['Todos']).map((item) => (
          <SelectContinentItem value={item} />
        ))}
      </div>
    </>
  );
}

export default SelectContinentContainer;
