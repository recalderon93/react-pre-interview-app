import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const TriviaResultsTable = () => {
  const { noCorrectAns, noAttemps, noRevealedAns } = useSelector((state) => state.trivia);
  return (
    <>
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
            <TableCell>{noCorrectAns}</TableCell>
            <TableCell>{noAttemps}</TableCell>
            <TableCell>{noRevealedAns}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TriviaResultsTable;
