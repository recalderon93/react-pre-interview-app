import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CONSTANTS from 'Utils/Constants';

const NavMenu = () => {
  const history = useHistory();
  const [openMenu, setState] = useState(null);
  const { ROUTES } = CONSTANTS;
  const handleClose = () => {
    setState(null);
  };
  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={(e) => setState(e.currentTarget)}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          history.push(ROUTES.LOGIN);
          handleClose();
        }}
        >
          Cambiar Nombre
        </MenuItem>
        <MenuItem onClick={() => {
          history.push(ROUTES.SELECT_CONTINENTS);
          handleClose();
        }}
        >
          Seleccionar Continentes
        </MenuItem>
        <MenuItem onClick={() => {
          history.push(ROUTES.COUNTRIES_LIST);
          handleClose();
        }}
        >
          Lista de Paises
        </MenuItem>
        <MenuItem onClick={() => {
          history.push(ROUTES.TRIVIA);
          handleClose();
        }}
        >
          Trivia
        </MenuItem>
      </Menu>
    </>
  );
};
export default NavMenu;
