/* eslint-disable react/destructuring-assignment */
import Loader from 'Component/Elements/Loader/loader';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header';

function Layout({ children }) {
  const { loader } = useSelector((state) => state.ui);
  return (
    <>
      <Header />
      {loader ? <Loader open /> : children}
    </>
  );
}

export default Layout;
