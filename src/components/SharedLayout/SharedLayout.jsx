import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      {/* <Header /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
