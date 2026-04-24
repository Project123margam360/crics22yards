import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
    </>
  );
}
