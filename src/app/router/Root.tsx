import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavMenu from '@/components/NavMenu';

function Root() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={<h2>Loading…Foreboding!!!</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}
