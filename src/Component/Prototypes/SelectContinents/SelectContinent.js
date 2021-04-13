import { Button, Box, Typography } from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import Layout from 'Component/Module/Layout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import continentSelectionHandler from './ContinentsSelectionhandler';
import SelectContinentContainer from './selectContinent.container';

const useStyles = makeStyles({
  buttonContainer: {
    width: '100%',
    heigth: ' 15vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

  },
});
function SelectContinent() {
  const classes = useStyles();
  const history = useHistory();
  const { name } = useSelector((state) => state.user);
  const { loader } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { continentsList } = useSelector((state) => state.continents);
  const disable = continentsList.length === 0;
  const username = name || name !== '' ? name : 'Anonimo';
  const message = `Hola ${username}, selecciona los continentes para crear tu lista de Paises`;
  return (
    <>
      <Layout>
        <Typography variant="h6">{message}</Typography>
        <SelectContinentContainer />
        <Box className={classes.buttonContainer}>
          <Button
            onClick={(e) => {
              continentSelectionHandler(dispatch, continentsList, history);
            }}
            disabled={disable}
            variant="contained"
            color="primary"
            testid="SelectContinent"
          >
            <Typography>Seleccionar</Typography>
          </Button>
        </Box>
      </Layout>
    </>
  );
}

export default SelectContinent;
