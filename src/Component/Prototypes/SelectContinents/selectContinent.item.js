import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper, FormControl, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import CONSTANTS from 'Utils/Constants';
import { toggleAllContinents, toggleContient } from 'Store/Countries/countries.actions';

function SelectContinentItem({ theme, value }) {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    item: {
      width: 'clamp(120px, 25vw, 300px)',
    },
  });
  const { continentsList } = useSelector((state) => state.continents);
  const selected = (CONSTANTS.CONTINENTS.includes(value))
    ? continentsList.includes(value) : (continentsList.length === CONSTANTS.CONTINENTS.length);
  const dispatch = useDispatch();
  const onChangeCheckHandler = (e) => {
    if (CONSTANTS.CONTINENTS.includes(value)) {
      dispatch(toggleContient(value));
    } else if (value.toLowerCase() === 'todos') {
      dispatch(toggleAllContinents(continentsList));
    }
  };
  return (
    <>
      <FormControlLabel
        className={useStyles().root}
        control={(
          <Paper
            className={useStyles().item}
            variant="elevation"
            elevation={3}
            style={{
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              align="center"
              noWrap
              component="div"
              style={{ color: theme.palette.text.primary }}
            >
              {value}
            </Typography>
            <Checkbox checked={selected} onChange={(e) => onChangeCheckHandler(e)} />
          </Paper>
)}
      />
    </>
  );
}

export default withTheme(SelectContinentItem);
