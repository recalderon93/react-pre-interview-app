import { TextField } from '@material-ui/core';
import React from 'react';

function InputFieldStyled({ handler, value, label }) {
  return (
    <>

      <TextField
        variant="filled"
        label={label}
        id="input-with-icon-adornment"
        onChange={(e) => handler(e)}
        value={value}
      />
    </>
  );
}

export default InputFieldStyled;
