import { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from 'react-router-dom';

// import DotSpinner from '@/components/spinner/DotSpinner';
import Root from '@/app/router/Root';
import UsersPage from '@/app/pages/UsersPage';
import SpeakersPage from '@/app/pages/SpeakersPage';

const ErrorComponent = () => {
  let error = useRouteError();
  console.error(error);

  return <div>Dang!</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/home',
        element: <UsersPage />
      },
      {
        path: '/codestantine/speakers',
        element: <SpeakersPage />
      }
    ]
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
