import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DotSpinner from '@/components/spinner/DotSpinner';
import NavMenu from '@/components/nav-menu/NavMenu';

export default function Root() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={<DotSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
