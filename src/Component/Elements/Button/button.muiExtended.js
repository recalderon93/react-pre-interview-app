/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { spacing, sizing } from '@material-ui/system';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

function ButtonExtended(props) {
  const Buttond = styled(Button)(spacing, sizing);
  return <Buttond {...props}>{props.children}</Buttond>;
}

export default ButtonExtended;
