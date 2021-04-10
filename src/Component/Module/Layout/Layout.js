/* eslint-disable react/destructuring-assignment */
import { Box, AppBar, Typography, Container, Toolbar } from '@material-ui/core';
import Loader from 'Component/Elements/Loader/loader';
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
 return (
  <>
   <Box p="0">
    <AppBar position="static" m={0} p={0}>
     <Toolbar m={0} p={0}>
      <Typography
       variant="h6"
       noWrap
       component="div"
       // sx={{ display: { xs: 'none', sm: 'block' } }}
      >
       Countries Trivia
      </Typography>
     </Toolbar>
    </AppBar>
   </Box>
  </>
 );
}
function Layout({ children }) {
 const { loader } = useSelector(state => state.ui);
 return (
  <>
   <Header />
   {loader ? <Loader open /> : children}
  </>
 );
}

export default Layout;
