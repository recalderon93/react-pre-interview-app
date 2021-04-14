import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonContainer: {
    width: '100%',
    heigh: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: '60%',
  },
});

function ButtonStyled({ textValue, handler, width }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.buttonContainer}>
        <Button onClick={(e) => handler(e)} className={classes.button} variant="contained">
          <Typography fontWeight="700">{textValue}</Typography>
        </Button>
      </Box>
    </>
  );
}

export default ButtonStyled;
