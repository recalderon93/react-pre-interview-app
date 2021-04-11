import Layout from 'Component/Module/Layout';
import React from 'react';
import SelectContinentContainer from './selectContinent.container';

function SelectContinent() {
  const continentList = ['America', 'Asia', 'Europa', 'Africa', 'Oceania', 'Antartida'];
  return (
    <>
      <Layout>
        <SelectContinentContainer value={continentList} />
      </Layout>
    </>
  );
}

export default SelectContinent;
