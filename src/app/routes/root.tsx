import reactLogo from "../../assets/react.svg";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import UsersPage from "../users/UsersPage";
import { Suspense } from "react";

export default function Root() {
  return (
    <div>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <nav className="menu">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/constantine/speakers" className="menu-item">Speakers</Link>
      </nav>
      <Outlet />
      <p className="read-the-docs">React 18 use() hook showcase</p>
    </div>
  );
}
