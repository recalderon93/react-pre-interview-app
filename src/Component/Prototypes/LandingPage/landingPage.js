/* eslint-disable no-unused-expressions */
import React from 'react';
import { Box, FormControl, InputLabel, InputAdornment, Input, sizing, typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Layout from 'Component/Module/Layout/Layout';
import './landingPage.scss';
import { userNameChange, userNameSubmit } from 'Store/User/user.actions';
import { useHistory } from 'react-router';
import ButtonExtended from 'Component/Elements/Button/button.muiExtended';

function LandingPage() {
 const dispatch = useDispatch();
 const { name } = useSelector(state => state.user);
 const history = useHistory();
 const clickHandler = e => {
  dispatch(userNameSubmit(history));
 };
 const onChangeHandler = e => {
  dispatch(userNameChange(e.target.value));
 };
 return (
  <>
   <Layout loading>
    <div className="username_container">
     <FormControl>
      <InputLabel htmlFor="input-with-icon-adornment" sx={{ fontSize: '20px' }}>
       Introduce Your Username
      </InputLabel>
      <Input
       id="input-with-icon-adornment"
       onChange={e => {
        onChangeHandler(e);
       }}
       value={name}
       startAdornment={
        <InputAdornment position="start">
         <AccountCircle />
        </InputAdornment>
       }
      />
      <ButtonExtended
       variant="contained"
       color="primary"
       mt={5}
       onClick={e => {
        clickHandler(e);
       }}
      >
       Enter
      </ButtonExtended>
     </FormControl>
    </div>
   </Layout>
  </>
 );
}

export default LandingPage;
