import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const  UserComponent: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserComponent;