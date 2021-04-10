import React from 'react';
import {
  Box, AppBar, Typography, Toolbar,
  Switch, FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from 'Store/UI/ui.actions';
import SaveIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box p="0">
        <AppBar position="static" m={0} p={0}>
          <Toolbar m={0} p={0} className={classes.flexContainer}>
            <Typography
              fontWeight={770}
              fontSise={30}
              noWrap
              component="div"
            >
              Countries Trivia
            </Typography>
            <ToggleNigthMode />
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
};
function ToggleNigthMode() {
  const { darkMode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  return (
    <>
      <FormControlLabel
        control={(
          <>
            <SaveIcon />
            <Switch checked={darkMode} onChange={(e) => dispatch(toggleDarkMode())} />
          </>
)}
        labelPlacement="start"
      />
    </>
  );
}

export default Header;
