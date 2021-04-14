import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import logo from './logo.svg';
import './loader.scss';

function Loader({ open }) {
  return (
    <Backdrop open={open}>
      <img src={logo} className="App-logo" alt="logo" />
    </Backdrop>
  );
}

export default Loader;
