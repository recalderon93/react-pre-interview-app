import {
  Table,
  TableBody,
  TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    margin: '10vh 15vw',
    display: 'flex',
    aligItems: 'center',
    justtifyContent: 'center',
    flexWrap: 'wrap',
  },
  innerContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
function TriviaPage() {
  const clasess = useStyles();
  return (
    <>
      <div className={clasess.container}>

        <div className={clasess.innerContainer}>
          {true && <Typography variant="h4">Test</Typography> }
          <img src="https://restcountries.eu/data/col.svg" alt="trivia tag" width="300" />
        </div>
        <div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Correctas</TableCell>
                  <TableCell>Intentos</TableCell>
                  <TableCell>Reveladas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default TriviaPage;
