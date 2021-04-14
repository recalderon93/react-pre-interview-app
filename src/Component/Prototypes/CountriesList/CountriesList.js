import React from 'react';
import Layout from 'Component/Module/Layout';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { SvgIcon } from '@material-ui/core';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'flag',
    headerName: 'Bandera',
    width: 120,
    renderCell: ({ value }) => (<img src={value} width="60px" alt="flag" />),
  },
  { field: 'nombre', headerName: 'Pais', width: 150 },
  { field: 'capital', headerName: 'Capital', width: 150 },
  { field: 'region', headerName: 'Continentes', width: 130 },
];

function CountriesList() {
  const { countriesList } = useSelector((state) => state.countries);
  const rowsC = countriesList.map((item, index) => ({
    id: index,
    nombre: item.translations.es,
    flag2: <img src={item.flag} alt={`${item.name} flag`} />,
    ...item,
  }));
  return (
    <>
      <Layout>
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            rows={rowsC}
            columns={columns}
            pageSize={15}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />

        </div>
      </Layout>
    </>
  );
}

export default CountriesList;
