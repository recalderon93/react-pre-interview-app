/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from '@material-ui/core';

function ButtonExtended(props) {
  const Buttond = Button;
  return <Buttond {...props}>{props.children}</Buttond>;
}

export default ButtonExtended;
