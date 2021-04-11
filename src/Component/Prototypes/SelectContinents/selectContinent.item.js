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
      width: '100%',
      height: '100%',
    },
  });
  const { continentsList } = useSelector((state) => state.countries);
  const selected = CONSTANTS.CONTINENTS.includes(value)
    ? continentsList.includes(value) : (continentsList === CONSTANTS.CONTINENTS);
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
      <FormControl className={useStyles().root}>
        <FormControlLabel
          control={(
            <Paper
              className={useStyles().root}
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
      </FormControl>
    </>
  );
}

export default withTheme(SelectContinentItem);
