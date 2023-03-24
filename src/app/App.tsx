import { Suspense } from "react";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";
import SpeakersPage from "./speakers/SpeakersPage";
import Root from "./routes/root";
import { ClipLoader } from "react-spinners";
import UsersPage from "./users/UsersPage";

const Loader = () => {
  return (
    <ClipLoader
      color={"#ffffff"}
      loading={true}
      // cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "/constantine/speakers",
        element: (
          <Suspense fallback={<Loader />}>
            <SpeakersPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
