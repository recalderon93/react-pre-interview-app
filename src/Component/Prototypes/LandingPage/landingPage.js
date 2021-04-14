/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userNameChange, userNameSubmit } from 'Store/User/user.actions';
import { useHistory } from 'react-router';
import InputSubmit from 'Component/Module/Layout/InputSummit/inputSubmit';

function LandingPage() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const history = useHistory();
  const clickHandler = (e) => {
    dispatch(userNameSubmit(history));
  };
  const onChangeHandler = (e) => {
    dispatch(userNameChange(e.target.value));
  };
  return (
    <>
      <InputSubmit title="Ingresar" value={name} onChangeHandler={onChangeHandler} onClickHandler={clickHandler} />
    </>
  );
}

export default LandingPage;
