import { Button, Box, Typography } from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import continentSelectionHandler from '../../../Utils/ContinentsSelectionhandler';
import SelectContinentContainer from './selectContinent.container';

const useStyles = makeStyles({
  buttonContainer: {
    width: '100%',
    heigth: ' 15vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

  },
  flexContainer: {
    width: '100vw',
    margin: '10vh 0 10vh 5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5vw',

  },
});
function SelectContinent() {
  const classes = useStyles();
  const history = useHistory();
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { continentsList } = useSelector((state) => state.continents);
  const disable = continentsList.length === 0;
  const username = name || name !== '' ? name : 'Anonimo';
  const message = `Hola ${username}, selecciona los continentes para crear tu lista de Paises`;
  return (
    <>
      <Box className={classes.flexContainer}>
        <Typography variant="h5" align="center">{message}</Typography>
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

      </Box>
    </>
  );
}

export default SelectContinent;
