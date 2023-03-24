import { Suspense } from "react";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";
import UsersPage from "./users/UsersPage";
import { Audio, Blocks } from "react-loader-spinner";
import { SpeakersPage } from "./SpeakersPage";
import Root from "./routes";
import logo from "../assets/react.svg"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "/constantine/speakers",
        element: (
          <Suspense fallback={<Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />}>
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
      <div>
        <img src={logo} className="logo react" alt="React logo" />
      </div>
      <RouterProvider router={router} />
      <p className="read-the-docs">React 18 use() hook showcase</p>
    </div>
  );
}

export default App;
