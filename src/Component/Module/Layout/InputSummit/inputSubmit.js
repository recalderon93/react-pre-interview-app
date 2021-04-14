import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import InputFieldStyled from 'Component/Elements/Input/InputFieldStyled';
import ButtonStyled from 'Component/Elements/Button';

const useStyle = makeStyles({
  flexContainer: {
    margin: '7.5vh auto',
    padding: '15vw`',
    width: 'clamp(300px, 30vw, 500px)',
    height: 'clamp(400px, 60vh, 700px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6vh',
  },
});
function InputSubmit({
  title, value, onChangeHandler, onClickHandler, theme,
}) {
  const classes = useStyle();
  return (
    <>
      <Paper
        variant="elevation"
        elevation={5}
        className={classes.flexContainer}
        style={{
          backgroundColor: theme.palette.primary.due,
        }}
      >
        {title && <Typography variant="h5" fontWeight="790">{ title}</Typography>}
        <InputFieldStyled handler={onChangeHandler} label="Nombre de Usuario" />
        <ButtonStyled textValue="Aceptar" handler={onClickHandler} />
      </Paper>
    </>
  );
}

export default withTheme(InputSubmit);
